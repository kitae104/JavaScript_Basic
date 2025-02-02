// push, pop, shift, unshift - 배열의 끝과 앞에 요소를 추가하거나 제거하는 방법
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); // 맨 뒤에 추가
hobbies.unshift('Coding'); // 맨 앞에 추가
console.log(hobbies); // ['Coding', 'Sports', 'Cooking', 'Reading']

const poppedValue = hobbies.pop(); // 맨 뒤에 요소 제거
hobbies.shift(); // 맨 앞에 요소 제거
console.log(hobbies); // ['Sports', 'Cooking']

hobbies[1] = 'Coding'; // 특정 위치의 요소 변경
hobbies[5] = 'Reading'; // 배열 길이를 늘리면서 요소 추가
console.log(hobbies); // ['Sports', 'Coding', empty, empty, empty, 'Reading']

// splice - 배열의 특정 위치에 요소를 추가하거나 제거하는 방법
hobbies.splice(1, 0, 'Good Food'); // 1번 인덱스에 요소 추가
console.log(hobbies); // ['Sports', 'Good Food', 'Coding', empty, empty, empty, 'Reading']

hobbies.splice(0, 1); // 0번 인덱스부터 1개의 요소 제거
console.log(hobbies); // ['Good Food', 'Coding', empty, empty, empty, 'Reading']

const removedHobby = hobbies.splice(-1, 1); // 맨 뒤에서 1개의 요소 제거
console.log(hobbies); // ['Good Food', 'Coding', empty, empty, empty]