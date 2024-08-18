const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log("unbound :", unboundGetX()); // 이 함수는 'this'를 가지지 않음

const boundGetX = unboundGetX.bind(module); // module을 this로 바인딩
console.log("bound :", boundGetX()); // 42

function log(...args) {
  console.log(this, ...args);
}

const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind(this, 3, 4);
console.log(boundLog2(5, 6)); // this value 1 2 3 4


// 전역 객체를 this로 바인딩
this.x = 9;
const module2 = {
  x: 81,
  getX() {
    return this.x;  // this는 module2를 가리킴
  },
};

// module2의 x를 this로 바인딩
console.log(module2.getX()); // 81

// module2의 getX를 변수에 할당
const retrieveX = module2.getX;

// 전역 객체의 x를 this로 바인딩
console.log(retrieveX()); // 9

// 새로운 함수를 생성하고 module2를 this로 바인딩
const boundGetX2 = retrieveX.bind(module2);
console.log(boundGetX2()); // 81