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

// 새로운 요소 추가 
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';

list.appendChild(newLi);