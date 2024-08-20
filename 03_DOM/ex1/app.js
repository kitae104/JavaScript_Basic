//=====================================
// DOM 이해하기 
//=====================================
'use strict';

const liFirst = document.querySelector('li');
console.log(liFirst.parentNode); // ul
console.log(liFirst.parentElement); // ul

console.log(liFirst.closest('body')); // body
console.log(liFirst.closest('header')); // ul

const ul = liFirst.parentElement;
console.log(ul); // ul 

console.log(ul.previousElementSibling); // header 
console.log(ul.nextElementSibling); // input 