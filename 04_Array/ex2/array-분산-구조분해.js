// split() : 문자열을 구분자로 나누어 배열로 반환
const data = 'new york;10.99;2000';

const transformedData = data.split(';'); // 구분자 ; 로 나누어 배열로 반환
transformedData[1] = +transformedData[1]; // 문자열을 숫자로 변환
console.log(transformedData); // ['new york', 10.99, '2000']

// join() : 배열을 구분자로 연결하여 문자열로 반환
const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' '); // 구분자 ' '로 연결하여 문자열로 반환
console.log(name); // Max Schwarz

// ... : 전개 연산자 - 배열을 복사하여 새로운 배열을 생성
const copiedNameFragments = [...nameFragments, 'kim']; // nameFragments 배열을 복사하여 copiedNameFragments 배열 생성
console.log(copiedNameFragments); // ['Max', 'Schwarz', 'kim']

console.log(Math.min(1, 5, -3)); // -3

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); // NaN - 배열을 인수로 사용할 수 없음
console.log(Math.min(...prices)); // 3.99 - 전개 연산자를 사용하여 배열을 인수로 사용

const persons = [
  { name: 'Max', age: 30 },
  { name: 'Manuel', age: 31 },
];
const copiedPerson = [...persons]; // persons 배열을 복사하여 copiedPerson 배열 생성
persons.push({ name: 'Anna', age: 29 }); // persons 배열에 객체 추가
persons[0].name = 'Kim'; // persons 배열의 첫 번째 객체의 name 속성 변경
console.log(persons, copiedPerson); // [{name: 'Kim, age: 30}, {name: 'Manuel', age: 31}, {name: 'Anna', age: 29}] [{name: 'Kim, age: 30}, {name: 'Manuel', age: 31}]

const persons2 = [
  { name: 'Max', age: 30 },
  { name: 'Manuel', age: 31 },
];

// persons2 배열을 복사하여 copiedPerson2 배열 생성()
const copiedPerson2 = [
  ...persons2.map((person) => ({ name: person.name, age: person.age })),
]; 
persons2.push({ name: 'Anna', age: 29 }); // persons2 배열에 객체 추가
persons2[0].name = 'Kim'; // persons2 배열의 첫 번째 객체의 name 속성 변경
console.log(persons2, copiedPerson2); // [{name: 'Kim, age: 30}, {name: 'Manuel', age: 31}, {name: 'Anna', age: 29}] [{name: 'Max, age: 30}, {name: 'Manuel', age: 31}]

// 배열 구조 분해 : 배열의 요소를 변수로 분해하여 할당
const nameData = ['Max', 'Schwarz', 'Mr', 30];
const first = nameData[0]; // nameData 배열의 첫 번째 요소를 first 변수에 할당
const last = nameData[1]; // nameData 배열의 두 번째 요소를 last 변수에 할당
const [firstName, lastName] = nameData; // nameData 배열의 요소를 firstName, lastName 변수로 분해하여 할당
console.log(firstName, lastName); // Max Schwarz

const [firstName2, lastName2, ...otherInformation] = nameData; // nameData 배열의 요소를 firstName2, lastName2 변수로 분해하여 할당, 나머지 요소는 otherInformation 배열에 할당
console.log(firstName2, lastName2, otherInformation); // Max Schwarz ['Mr', 30]