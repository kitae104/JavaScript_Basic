// Sets : 중복을 허용하지 않는 자료구조(고유한 값만 저장 가능)
const ids = new Set([1, 2, 3]); // Set 객체 생성
console.log(ids); // Set { 1, 2, 3 }
console.log(ids[1]); // undefined - Set 객체는 인덱스로 요소에 접근할 수 없음

ids.add(2); // Set 객체에 요소 추가
console.log(ids); // Set { 1, 2, 3 } - 중복된 요소는 추가되지 않음

ids.add(5); // Set 객체에 요소 추가
console.log(ids); // Set { 1, 2, 3, 5 }

console.log(ids.has(1)); // true - Set 객체에 요소가 있는지 확인

for(const entry of ids.entries()) { // Set 객체의 요소를 열거
  console.log(entry); // [1, 1], [2, 2], [3, 3], [5, 5]
  console.log(entry[0]); // 1, 2, 3, 5
}

const words = ['Hi', 'Hello', 'Hi', 'Hello', 'Max'];
const uniqueWords = new Set(words); // Set 객체 생성
console.log(uniqueWords); // Set { 'Hi', 'Hello', 'Max' }

if(uniqueWords.has('Hi')) { // Set 객체에 요소가 있는지 확인
  uniqueWords.delete('Hi'); // Set 객체의 요소 삭제
}
console.log(uniqueWords); // Set { 'Hello', 'Max' }

// WeakSets : 객체만 저장 가능(객체에 대한 참조만 저장 가능)
let person = { name: 'Max' }; // 객체 생성
const persons = new WeakSet();  // WeakSet 객체 생성
persons.add(person); // WeakSet 객체에 객체 추가

console.log("1" + persons); // WeakSet { { name: 'Max' } }

person = null; // person 변수에 null 할당
console.log("2" + persons); // WeakSet { { name: 'Max' } } - WeakSet 객체는 객체에 대한 참조만 저장 가능
