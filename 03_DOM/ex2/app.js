//=====================================
// DOM 이해하기 
//=====================================
'use strict';

// 1. DOM 탐색 프로퍼티
const ul = document.body.firstElementChild.nextElementSibling; 
const firstLi = ul.firstElementChild;
console.log(firstLi);

// 2. querySelector() 메소드
const section = document.querySelector('section');
section.className = 'red-bg';

const list = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click', () => {  
  section.classList.toggle('invisible');
});

const div = document.querySelector('div');
div.innerHTML = div.innerHTML + '<p>Some new text</p>';

div.insertAdjacentHTML('beforeend', '<p>insertAdjacentHTML text</p>');

const p = div.querySelector('p')
p.style.backgroundColor = 'yellow';

const newLi = document.createElement('li'); // 새로운 요소 추가 
newLi.textContent = 'Item 4';

list.lastElementChild.before(newLi);  // 마지막 요소 앞에 새로운 요소 추가 

list.firstElementChild.replaceWith(newLi);  // 첫번째 요소를 새로운 요소로 교체

list.append(newLi);  // 마지막 요소로 추가

const secondLi = list.children[1];
secondLi.textContent = 'test';  // 두번째 요소의 텍스트 변경

const newLi2 = newLi.cloneNode(true);  // 복제
list.append(newLi, newLi2);