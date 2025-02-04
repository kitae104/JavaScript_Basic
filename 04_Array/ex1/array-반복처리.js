// for loop : 배열의 요소를 하나씩 꺼내서 처리할 때 사용
const prices = [100, 200, 300, 400];
const tax = 0.19;
let taxAdjustedPrices = [];

for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
}
console.log(taxAdjustedPrices); // [119, 238, 357, 476]

// forEach : 배열의 요소를 하나씩 꺼내서 처리할 때 사용
taxAdjustedPrices = [];
prices.forEach((price, idx, prices) => {  // price : 요소값, idx : 인덱스, prices : 배열
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices); // [ { index: 0, taxAdjPrice: 119 }, { index: 1, taxAdjPrice: 238 }, { index: 2, taxAdjPrice: 357 }, { index: 3, taxAdjPrice: 476 } ]

// map : 배열의 요소를 하나씩 꺼내서 처리한 결과를 새로운 배열로 반환
// map()은 원본 배열을 변경하지 않고, 변환된 값으로 새로운 배열을 만듭니다.
const prices2 = [10.9, 20.5, 3.99, 4.94];
const tax2 = 0.19;
const taxAdjustedPrices2 = prices2.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax2) };
  return priceObj;
});
console.log(taxAdjustedPrices2); // [ { index: 0, taxAdjPrice: 13.031 }, { index: 1, taxAdjPrice: 24.395 }, { index: 2, taxAdjPrice: 4.751 }, { index: 3, taxAdjPrice: 5.89 } ]