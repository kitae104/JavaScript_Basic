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

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // if(section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');

});