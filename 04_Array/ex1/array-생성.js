// 배열 만들기
const numbers = [1, 2, 3]; // 리터럴을 사용한 배열 생성
console.log(numbers); // [1, 2, 3]

const moreNumbers = new Array('Hi', 'Welcome', 1, 2, 3); // Array 생성자를 사용한 배열 생성
console.log(moreNumbers); // []

const moreNumbers2 = new Array(5); // 길이가 5인 배열 생성
console.log(moreNumbers2); // [ <5 empty items> ]

const moreNumbers3 = Array(5, 2); // Array 생성자를 사용한 배열 생성
console.log(moreNumbers3); // [5, 2]

const yetMoreNumbers = Array.of(1, 2); // Array.of()를 사용한 배열 생성
console.log(yetMoreNumbers); // [1, 2]

const moreNumbers4 = Array.from('Hi!'); // Array.from()을 사용한 배열 생성
console.log(moreNumbers4); // ['H', 'i', '!']

const moreNumbers5 = Array.from([1, 2, 3]); // Array.from()을 사용한 배열 생성
console.log(moreNumbers5); // [1, 2, 3]

const listItems = document.querySelectorAll('li'); // NodeList를 사용한 배열 생성
console.log(listItems); // NodeList(4) [li, li, li, li]

const arrayListItems = Array.from(listItems); // Array.from()을 사용한 배열 생성
console.log(arrayListItems); // [li, li, li, li]

