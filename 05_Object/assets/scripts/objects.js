const movieList = document.querySelector('#movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
  'first name': 'Kitae',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  num: 100,
  1.5: 'hello',
  [userChosenKeyName]: '123',
  greet: function() {
    alert('Hi there!');
  }
}

person.age = 30;
person.isAdmin = true;
console.log(person);

person.age = null;  // 현재 값이 없음을 나타내는 값
delete person.temp; // 객체의 프로퍼티 삭제

console.log(person);
console.log(person[1.5]); // 접근 방법 '1.5'도 가능 (하지만 권장하지 않음)

const numbers = {5: 'five', 1: 'one'};
console.log(numbers); // {1: "one", 5: "five"} 순서가 오름차순 

const keyName = 'first name';
console.log(person[keyName]); // Kitae
console.log(person['first name']); // Kitae
console.log(person.keyName); // undefined 
console.log(person[userChosenKeyName]); // 123
console.log(person['level']); // 123
console.log(person.userChosenKeyName); // undefined
