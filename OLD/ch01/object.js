// 객체 
const person = {
    name: 'Max',
    age: 29,
    greet() {       // () => {} 대신 function() {} 사용 : 차이점은?  
        console.log('Hi, I am ' + this.name);   // this는 person 객체를 의미하지 않음
    }
};

console.log(person);
person.greet();

// 객체 복사
const copiedPerson = {...person};   // spread operator 사용
console.log(copiedPerson);

// 배열 
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
console.log(hobbies);   // map()은 새로운 배열을 반환하므로 hobbies 배열은 변하지 않음