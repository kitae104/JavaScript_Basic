// 배열 
const hobbies = ['Reading', 'Cooking'];
const copiedArray = hobbies.slice();             // ['Reading', 'Cooking']와 같음
console.log(copiedArray);                        

// spread operator 사용하기 
const newHobbies = [...hobbies, 'Hiking'];      // ['Reading', 'Cooking', 'Hiking']와 같음
console.log(newHobbies);                        // ['Reading', 'Cooking', 'Hiking']

const toArray = (arg1, arg2, arg3) => {         // 함수 정의
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));                  

const toArray2 = (...args) => {                  // 함수 정의
    return args;
};

console.log(toArray2(1, 2, 3, 4));               // [1, 2, 3, 4]