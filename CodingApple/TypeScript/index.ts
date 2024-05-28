// 함수 이렇게 만들어서 씁니다. //
// 1. 길고 복잡한 코드 한 단어로 축약 가능
// 2. 숫자 집어넣으면 다른 숫자 나오는 블랙박스 역할
// (결론) 함수는 파라미터, return 값 타입지정 가능

// x -> 파라미터(숫자 input역할)
// return 할 값(output 되는 값)
// => x자리에 숫자 넣으면 그거 2 곱해서 내보내샘
// 여기서 x를 let x; 이것처럼 변수라고 생각하면 되는데, 변수만 만들면 :any 자동할당됩니다. => 타입스크립트 안쓰겠습니다, 실드해제하겠습니다와 같은 의미
function 함수(x: number): number {
  // x: number => x 파라미터 자리에 숫자타입만 입력가능
  // (x : number) 우측 :number은 return되는 값은 숫자타입으로 제한함 이란 의미
  // 코드 ~~~;
  return x * 2;
}

함수(30); // 60
함수(90); // 180
// 함수("6");  // 에러

// 함수에서 void 타입 활용가능 //
// "JAVA C# 같은 객체지향 언어를 해보셨으면 잘 아시겠죠? 거기서의 void와 유사합니다."
// return 쓰기싫은 함수에 쓰는 것
// 실수로 뭔가 return 하는 걸 사전에 막을 수 있음

function 함수2(x: number): void {
  1 + 1;
  // return 1 + 1; (불가능)
  // 이처럼 return이 없을 경우
}

// 자바스크립트와 다른점
// - 타입지정된 파라미터는 필수임
함수2(2);

// 파라미터가 옵션일 경우엔
function 함수3(x?: number): void {
  // 파라미터 뒤에 '?' 붙여주기
  // 파라미터변수? : 타입
}

함수3();
// (중요) '?' 연산자는 들어올수도 있다~ 라는 뜻이긴 한데
// 변수? :number는 변수 :number | undefined와 같음 (알아두면 나중에 겪을 미스테리가 해결될 것임)

// 추가 : object자료에서 {age? : number}로 설정하면 key값이 들어올 수도 있다로 선언하는 것 가능

// Q. 이 함수는 왜 이럴까요?
// 타입스크립트는 엄격한거 좋아해서 그럼
// string + number (가능)
// number + number (가능)
// 이외엔 불가능
// 지금 x는 number | string 타입이잖음(union type) 그래서 연산을 안해주는 것임
// 애매한 타입들은 미리 타입검사 필요
function 함수Q1(x: number | string): void {
  // 왜 에러날까요?
  // console.log(x + 3);
  // => narrowing
  // if(x의 타입이 숫자면) {
  //   console.log(x + 3);
  // }
}
함수Q1(2);

// (숙제 1) 이름을 파라미터로 입력하면 콘솔창에 '안녕하세요 홍길동'을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 '이름이 없습니다'를 출력하는 함수를 만들어봅시다. 파라미터와 return 타입지정도 잘 해봅시다.
function 인사(x?: string): void {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("이름이 없습니다.");
  }
}

// (숙제 2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 자릿수(x?: string | number): number {
  return x.toString().length;
}

// 구글에 물어보니 문자에 .length 붙이면 자릿수 세어준다고 하네요. 근데 숫자는 .length를 붙여줄 수 없으니까 우선 문자로 변환했다고 합니다. 변환하는 함수도 역시 구글에 물어보니 .toString() 쓰면 된다고 하는군요. 물론 더 정확하게 하려면 만약에 x가 숫자일 경우 이렇게 문자일 경우 이렇게 코드를 짜는게 좋습니다.
function 자릿수2(x?: string | number): number {
  if (typeof x === "number") {
    return x.toString().length;
  } else {
    return x.length;
  }
}
