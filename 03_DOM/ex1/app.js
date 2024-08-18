//=====================================
// DOM 이해하기 
//=====================================
'use strict';

const h1 = document.querySelector('h1');
console.log(h1.textContent);
h1.textContent = 'Hello, Learn DOM!';
h1.className = 'title';

h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const input = document.querySelector('input');
input.value = 'Hello, DOM!';
input.setAttribute('value', 'Hello, Kitae!'); // value 속성을 설정, 하지만 화면에는 반영되지 않음
input.value = input.getAttribute('value');    // value 속성을 가져와서 input 요소의 value 속성에 대입
console.log(input.value);

const li = document.querySelector('li:last-of-type');
li.textContent = 'JavaScript';

const listItemElements = document.querySelectorAll('li');
for(const listElement of listItemElements) {
  console.dir(listElement);
}