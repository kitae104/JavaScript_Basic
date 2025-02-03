// indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
const indexOfData = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log(indexOfData.indexOf(1.5)); // 2

// lastIndexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 마지막 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
console.log(indexOfData.lastIndexOf(1.5)); // 4

const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' })); // -1 : 객체는 찾을 수 없음

// find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});
console.log(manuel); // { name: 'Manuel' }

manuel.name = 'Anna'; // 객체의 속성 변경
console.log(manuel, personData); // { name: 'Anna' } [ { name: 'Max' }, { name: 'Anna' } ]

// findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 그런 요소가 없다면 -1을 반환합니다.
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});
console.log(maxIndex); // 0

// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.
console.log(indexOfData.includes(1.5)); // true
console.log(indexOfData.includes(10.5, 2)); // false : 2번 인덱스부터 찾기