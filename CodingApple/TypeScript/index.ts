// Literal type //
// - 변수에 뭐가 들어올지 더 엄격하게 관리가능
// - 자동완성 힌트 굿

// 더 엄격한 타입지정 가능
// 'kim or park 이런 문자만 들어올 수 있습니다~'

// let 이름: string;
// =>
let 이름: 123;
이름 = 123;
// 이름 = 456; 은 에러

let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";

// 함수도 되나 테스트 해봅시다
// 함수도 값을 지정할 수도 있다.
function 함수(a: "hello"): 1 | 0 {
  return 1;
}
함수("hello");

// Q. 이런 함수 어떻게 만들죠?
// 1. 가위 or 바위 or 보 중 1개 입력가능 // 함수('가위')
// 2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함 // ['가위', '보']
function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
가위바위보("가위");

// const 변수의 한계 //

// Literal type은 const 변수와 유사하게 사용가능
// Literal type은 const 변수 업글버전임

// Literal type 의 문제점 //
var 자료 = {
  name: "kim",
} as const;
자료.name; // 'kim'

function 내함수(a: "kim") {}
내함수("kim");
// 내함수(자료.name)   // error
// 파라미터를 저렇게 설정한게 'kim'이라는 자료만 들어올 수 있습니다 가 아님
// => 파라미터에 'kim'이라는 타입만 들어올 수 있습니다임
// 내함수(자료.name)에 들어올 수 있는 타입은 'kim : string'인데 자료.name:string이 들어와서 안되는 것임

// 솔루션 1. object 만들 때 타입지정 확실히 하셈
// 솔루션 2. as 문법으로 타입을 구라치든가

// 솔루션 3. as const 이상한 키워드 쓰든가 => 이 object는 literal type 지정 알아서 해주셈
// 효과 1. object value 값을 그대로 타입으로 지정해줌
// 효과 2. object 속성들에 모두 readonly 붙여줌
// 예시) 자료.name = 123;으로 하면 에러

// object 자료를 완전히 잠가놓고 싶으면 as const 써보셈
