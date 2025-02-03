// slice() : 범위 선택 및 복제하기
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(); // 배열 복사
console.log(testResults.slice()); // [1, 5.3, 1.5, 10.99, -5, 10] - 복사한 배열 출력
console.log(testResults, storedResults); // [1, 5.3, 1.5, 10.99, -5, 10] [1, 5.3, 1.5, 10.99, -5, 10] 

testResults.push(5.91); // testResults 배열에만 요소 추가
console.log(testResults, storedResults); // [1, 5.3, 1.5, 10.99, -5, 10, 5.91] [1, 5.3, 1.5, 10.99, -5, 10]

tempResults = testResults.slice(0, 3); // 0번 인덱스부터 3번 인덱스까지 복사
console.log(tempResults); // [1, 5.3, 1.5]

tempResults2 = testResults.slice(-3, -1); // 뒤에서 3번째부터 뒤에서 1번째까지 복사
console.log(tempResults2); // [-5, 10] 

// concat() : 배열 합치기
const concatDatas = [1, 5.3, 1.5, 10.99, -5, 10];
const concatDatas2 = concatDatas.concat(); // 배열 복사
console.log(concatDatas, concatDatas2); // [1, 5.3, 1.5, 10.99, -5, 10] [1, 5.3, 1.5, 10.99, -5, 10]

const concatDatas3 = concatDatas.concat([3, 4, 5]); // 배열 합치기
console.log(concatDatas3); // [1, 5.3, 1.5, 10.99, -5, 10, 3, 4, 5]