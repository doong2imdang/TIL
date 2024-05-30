// type aliaas 에 함수 type 저장해서 쓰는 법 //
// 1. 함수타입은 () => {} 모양으로
// 2. 함수표현식에만 type alias 사용가능

type 함수타입 = (a: string) => number;

// () => { return 10 } => () => {이부분이 return 값인 이유}

// 함수 type alias 부착하려면 함수표현식 써야함(함수 정의하는 다른 방법일 뿐)
let 함수: 함수타입 = function (a) {
  return 10;
};

// object 안에 함수 만들 수 있음 //
type 회원정보Type = {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: 회원정보Type = {
  name: "kim",
  plusOne(a) {
    // Q. object 안의 함수 타입지정은 어떻게? // 오늘의 포인트
    // 파라미터 하나는 number, return, 값은 number 이어야함(가정)
    // 파라미터가 있는데 타입지정 안하면 혼남
    return a + 1;
  },
  changeName: () => {},
};

회원정보.plusOne(1); // 이렇게 하면 함수안에 있는 코드 실행됨

//(숙제 1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
// - plusOne 이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야 합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return 하면 안됩니다.
// - type 키워드를 쓰든 말든 알아서 합시다.

// 숙제를 위한 잠깐 콜백함수 개념 설명 //
function 함수1(a) {
  a();
}
function 함수2() {}
함수1(함수2);
// 1. 그럼 함수1 내부코드 a() 실행됨
// 2. 근데 파라미터를 a자리에 집어넣어서 함수2() 실행됨
// 함수2를 콜백함수라고 부른다
