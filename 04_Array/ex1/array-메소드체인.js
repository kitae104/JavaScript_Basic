// map()과 reduce() 메서드를 사용하여 배열의 객체 속성 합산하기
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price);
console.log(transformedArray); // [10.99, 5.99, 29.99]

let sum = transformedArray.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum); // 46.97

// 메서드 체인 형성하기
sum = originalArray.map(obj => obj.price).reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum); // 46.97