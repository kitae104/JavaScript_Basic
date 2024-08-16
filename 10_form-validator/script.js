const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// 에러 메시지
const showError = (input, message) => {
  const formControl = input.parentElement; // input의 부모 요소인 div.form-control
  formControl.className = "form-control error"; // div.form-control에 class 추가
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// 성공 메시지
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// 이메일 유효성 검사
const checkEmail = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(input.value).toLowerCase())){
    showSuccess(input);
  } else {
    showError(input, '이메일 형식이 올바르지 않습니다.');
  }
};

// 필드 이름 - 첫문자 대문자로 변환
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // 첫 글자 대문자로 변환
};

const checkRequired = (inputArr) => {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element)}은 필수 입력 사항입니다.`);
    } else {
      showSuccess(element);
    }
  });
};

// checkLength 함수
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)}은 최소 ${min}자 이상이어야 합니다.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)}은 최대 ${max}자를 넘을 수 없습니다.`
    );
  } else {
    showSuccess(input);
  }
};

// 비밀번호 일치 확인
const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "비밀번호가 일치하지 않습니다.");
  }
};

// 이벤트 리스너
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 이벤트 객체의 기본 동작을 취소하는 메서드
  // console.log(username.value);

  checkRequired([username, email, password, password2]); // 필수 입력 사항 체크
  checkLength(username, 3, 15); // username 길이 체크
  checkLength(password, 6, 25); // password 길이 체크
  checkEmail(email); // email 유효성 검사
  checkPasswordsMatch(password, password2); // 비밀번호 일치 확인
});
