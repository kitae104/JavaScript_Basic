const name = 'Max';
let age = 29;
const hasHobbies = true;

//name = 'Maximilian';          // 오류 : const 변수는 재할당 불가능
age = 30;                       // let 변수는 재할당 가능

console.log(name);

// 화살표 함수 선언
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    );
}

const add = (a, b) => a + b;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addRandom());
