// 화살표 함수 
// 기존 코드 
const prices = [20.9, 30.5, 3.99, 4.94];

const filteredArray = prices.filter((price, idx, prices) => {
  return price < 10; // 10보다 큰 요소만 추출
});
console.log(filteredArray); // [30.5, 20.9]

// 화살표 함수 적용 코드
const arrowArray = prices.filter(price => price > 10);
console.log(arrowArray); // [20.9, 30.5]

// 일반적으로 값을 누적하는 경우 forEach()를 사용
let sum = 0;
prices.forEach(price => {
  sum += price;
});
console.log(sum); // 60.33

// reduce() : 배열의 요소에 대해 누적된 값을 반환
sum = prices.reduce((prevValue, curValue, curIndex, prices) => {  // prevValue : 이전 값, curValue : 현재 값
  return prevValue + curValue;  // 이전 값과 현재 값을 더하여 반환
}, 0);
console.log(sum); // 60.33

// 화살표 함수 적용 코드
sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum); // 60.33