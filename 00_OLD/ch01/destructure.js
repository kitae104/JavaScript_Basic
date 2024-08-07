// 구조 분해 이해하기
// 객체
const person = {
  name: 'Max',
  age: 29,
  greet() {
    // () => {} 대신 function() {} 사용 : 차이점은?
    console.log('Hi, I am ' + this.name); // this는 person 객체를 의미하지 않음
  },
};

const printName = (person) => {
  console.log(person.name);
};
printName(person);

const printName2 = ({ name, age }) => {
  console.log(name, age);
};
printName2(person);

// 구조 분해
const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
