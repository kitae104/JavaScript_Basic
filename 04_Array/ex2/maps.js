// Maps : 키와 값을 연결해주는 자료구조
const person1 = { name: 'Max' };
const person2 = { name: 'John' };

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]); // Map 객체 생성
console.log(personData); // Map { { name: 'Max' } => [ { date: 'yesterday', price: 10 } ] }
console.log(personData.get(person1)); // [ { date: 'yesterday', price: 10 } ] - Map 객체의 키에 해당하는 값 반환

personData.set(person2, [{date: 'two weeks ago', price: 100}]); // Map 객체에 요소 추가
console.log(personData); // Map { { name: 'Max' } => [ { date: 'yesterday', price: 10 } ], { name: 'John' } => [ { date: 'two weeks ago', price: 100 } ] }

for( const entry of personData.entries()) { // Map 객체의 요소를 열거
  console.log(entry); // [ { name: 'Max' }, [ { date: 'yesterday', price: 10 } ] ], [ { name: 'John' }, [ { date: 'two weeks ago', price: 100 } ] ]
}

for (const [key, value] of personData.entries()) { // Map 객체의 요소를 열거
  console.log(key, value); // { name: 'Max' } [ { date: 'yesterday', price: 10 } ], { name: 'John' } [ { date: 'two weeks ago', price: 100 } ]
}

for (const key of personData.keys()) { // Map 객체의 키를 열거
  console.log(key); // { name: 'Max' }, { name: 'John' }
}

for (const value of personData.values()) { // Map 객체의 값 열거
  console.log(value); // [ { date: 'yesterday', price: 10 } ], [ { date: 'two weeks ago', price: 100 } ]
}

console.log(personData.size); // 2 - Map 객체의 요소 개수 반환

personData.delete(person1); // Map 객체의 요소 삭제
console.log(personData); // Map { { name: 'John' } => [ { date: 'two weeks ago', price: 100 } ] }