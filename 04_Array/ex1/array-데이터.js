// 배열 데이터 입력 
const hobbies = ['Watching Movies', 'Playing Games', 'Reading Books', 'Listening Music', 'Traveling'];
for (let hobby of hobbies) {
    console.log(hobby);
}

const personalData = [30, 'Max', {moreDetail: []}]; // 배열 안에 객체, 배열이 들어갈 수 있음
console.log(personalData[1]);

const analyticsData = [[1, 1.6], [-5.4, 2.1]];  // 2차원 배열

// 배열 데이터 출력
for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
}