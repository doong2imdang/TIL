// Union Type (타입 2개 이상 합친 새로운 타입 만들기) //

// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만듭니까
let 회원: number | string | boolean = 123;
회원;
// Q. 숫자 or 문자가 가능한 array / object 타입 지정은?
let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

// any 타입 //

// => 타입실드 해제문법임
// 모든 자료형 허용해줌
// 그럼 타입스크립트 쓰는 의미가 없는뎅
// 일반 JS 변수로 만들고 싶으면 쓰셈
// 그래서 타입 관련 버그가 나도 잡아주지 않음
let 이름: any;
이름 = 123;
이름 = true;
이름 = "kim";
이름 = [];

// unknown 타입 //

// 모든 자료형 허용해줌
// any 보다 안전한 이유는
let 나이: unknown;
나이 = 123;
나이 = "kim";
나이 = [];
나이 = {};
// let 변수1 :string = 나이; -> 지금 '나이'가 {}이기 때문에 에러가 생김
// any로 될 경우 에러가 생기지 않음

// * 타입스크립트의 엄격함에 대해 * //
// 나이 - 1 => 간단한 수학연산도 타입 맞아야함 (unknown타입은 뺄셈 안됨)
// => unknown은 number 타입이 아님
// (중요) 타입 엄격하게 지켜야함

// Q. 왜 타입 맞는데 +1 안되는 것?
let 연세: string | number;
// 연세 + 1; (에러)
// - 타입스크립트는 타입 엄격한거 좋아한다고 했잖음
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number 타입 + 1 (안돼) / -1도 안돼

// Q. 변수가 분명 1인데 왜 -1이 안되는 것?
let 춘추: unknown = 1;
// 춘추 -1; (에러)
// - 타입스크립트는 엄격한거 좋아한댔음
// 숫자타입이여야 숫자처럼 연산해주죠
// 나중에 Narrowing / Assertion 배워서 엄격하게 코드짜면 됩니다.

// (숙제 1) 다음 변수 4개에 타입을 지정해봅시다.
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// (숙제 2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
