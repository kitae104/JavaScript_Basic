// 리스트 노드와 노드 요소 삭제 하기 
const list = document.querySelector('ul');  // ul 요소 선택

const listItems = document.querySelectorAll('li'); // 모든 li 요소 선택
console.log(listItems);

const listItems2 = list.getElementsByTagName('li'); // ul 요소에서 li 요소 선택
console.log(listItems2);

const newLi = document.createElement('li'); // 새로운 요소 추가
newLi.textContent = 'Item 4';

list.append(newLi);  // 마지막 요소로 추가
console.log(listItems);
console.log(listItems2);

listItems[1].textContent = 'test';  // 두번째 요소의 텍스트 변경

list.firstElementChild.replaceWith(newLi);  // 첫번째 요소를 새로운 요소로 교체

list.firstElementChild.remove();  // 첫번째 요소 삭제

list.remove();  // ul 요소 삭제