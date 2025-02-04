// sort() : 배열의 요소를 정렬
const prices = [20.9, 30.5, 3.99, 4.94];
let sortedPrices = prices.sort(); // 문자열로 변환 후 정렬
console.log(sortedPrices); // [20.9, 3.99, 30.5, 4.94]

// 정상적으로 정렬하려면 비교 함수를 사용해야 함
sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1; // a가 b보다 크면 b를 a보다 앞으로
  }
  if (a === b) {
    return 0; // a와 b가 같으면 그대로 둔다
  }
  if (a < b) {
    return -1; // a가 b보다 작으면 a를 b보다 앞으로
  }
});
console.log(sortedPrices); // [3.99, 4.94, 20.9, 30.5]

// reverse() : 배열의 요소를 역순으로 정렬
const reversePrices = prices.reverse();
console.log(reversePrices); // [30.5, 20.9, 4.94, 3.99]  

// filter() : 배열의 요소 중 특정 조건을 만족하는 요소만 추출
const filteredArray = prices.filter((price, idx, prices) => {
  return price > 10; // 10보다 큰 요소만 추출
});
console.log(filteredArray); // [30.5, 20.9]