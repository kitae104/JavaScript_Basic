//=====================================
// 가위, 바위, 보 게임 만들기
//=====================================
'use strict';

const startGameBtn = document.querySelector('#start-game-btn');
const output = document.querySelector('#output');

const ROCK = '바위';
const PAPER = '보';
const SCISSORS = '가위';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = '비겼습니다.';
const RESULT_PLAYER_WINS = '플레이어 승리';
const RESULT_COMPUTER_WINS = '컴퓨터 승리';

let gameIsRunning = false;

// 게임 시작 함수
const startGrame = () => {
  console.log('Game is starting...');
};

// 플레이어의 선택을 받는 함수
const getPlayerChoice = () => {
  const selection = prompt(
    `${SCISSORS}, ${ROCK}, 또는 ${PAPER}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
    alert(
      `불가능한 선택입니다! 우리는 당신에게 ${DEFAULT_USER_CHOICE}를 취천합니다.`
    );
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// 컴퓨터의 선택을 랜덤하게 만드는 함수
const getComputerChoice = () => {
  const randomValue = Math.random(); // 0과 1 사이의 랜덤한 숫자
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// 승자를 판단하는 함수
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === ROCK)
    ? RESULT_COMPUTER_WINS
    : RESULT_PLAYER_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('게임을 시작합니다...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  console.log(winner);

  let message = '';
  if (winner === RESULT_DRAW) {
    message = `컴퓨터의 선택: ${computerSelection}, 당신의 선택: ${playerSelection}, 결과: ${RESULT_DRAW}`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `컴퓨터의 선택: ${computerSelection}, 당신의 선택: ${playerSelection}, 결과: ${RESULT_PLAYER_WINS}`;
  } else {
    message = `컴퓨터의 선택: ${computerSelection}, 당신의 선택: ${playerSelection}, 결과: ${RESULT_COMPUTER_WINS}`;
  }
  // 결과 화면에 출력
  output.innerHTML = '게임 결과 : ' + message;

  gameIsRunning = false;
});


const combine = (resultHandler, operation, ...numbers) => {     // rest 연산자 : 여러 개의 인자를 받아 배열로 만들어줌 

  const validateNumber = (number) => {    // 중첩 함수
    return isNaN(number) ? 0 : number
  };

  let sum = 0;
  for (const num of numbers) {
    if(operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= num;
    }
    
  }
  resultHandler(sum);                       // 콜백 함수 호출
};

const showResult = (messageText, result) => { 
  console.log(messageText + ' ' + result);
}

// .bind() 메서드를 사용하여 콜백 함수에 인자를 전달 - this 바인딩
combine(showResult.bind(this, '전체 숫자들의 덧셈은 '), 'ADD', 1, 5, 10, 'ab', 'test', -3, 6, 10);  // 29
combine(showResult.bind(this, '전체 숫자들의 덧셈은 '), 'ADD', 1, 5, 10, -3, 10, 25,  88);   // 136
combine(showResult.bind(this, '전체 숫자들의 뺄셈은 '), 'SUBTRACT', 1, 10, 15, 20);  // -46