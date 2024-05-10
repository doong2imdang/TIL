// Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야합니다. //

// 대표적인 Narrowing 방버븐 typeof 연산자
// (union type등 떄문에) 어떤 변수가 타입이 아직 불확실하면
// === 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
// (주의) if문 썼으면 끝까지 써야 안전 else, else if 안쓰면 에러로 잡아줄 수도

// 예시1
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

내함수(123);

// 예시2 -> x 타입이 number | string (union type)
function 내함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}

내함수2(123);

// Narrowing으로 판정해주는 문법들
// - typeof 변수
// - 속성명 in 오브젝트자료
// - 인스턴스 instanceof 부모
// -> 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌

// assertion 문법(타입 덮어쓰기) //

// 예시 1
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // as 왼쪽에 있는 변수를 number로 덮어 씌어주세요
}

내함수3(123);

// 남용하지 않기 위한 assertion 문법의 용도
// 1. Narrowing 할 때 씁니다.
let 이름: string = "kim";
// 이름 as number;  -> 타입을 a 에서 b로 변경 x

// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈 (그래서 굳이 쓸 이유가?)
// => 그냥 if문 쓰셈
function 내함수4(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // as 왼쪽에 있는 변수를 number로 덮어 씌어주세요
}
내함수4("123"); // 문자 넣어도 아무일 없음 -> assertion 해놓으면 이런 버그 캐치 못함

// 3. 남이 짠 코드 수정할때... 왜 타입에러가 나는지 모르겠을때... 디버깅용..

// 예전 as 문법은 (참고)
// let 이름들 :string = 'kim';
// <number>이름;

// as 문법이 유용한 경우: 강의하단 참고

// 코드 짜다가 콘솔창에 변수 출력해보고 싶으면 html 파일에 ts -> js 변환된 파일 넣으셈
