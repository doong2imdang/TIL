// type alias(별칭 => 변수) 만드는 법 //

// type 변수 작명 관습
// - 시작은 영어대문자 국룰
// - 뒤에 Type 붙여주기(선택)

type AnimalType = string | number | undefined;
let 동물: AnimalType = "kim";

type AnimalsType = { name: string; age: number };
let 동물s: AnimalsType = { name: "kim", age: 20 };

// const 변수 잠깐 설명시간
const 출생지역 = "seoul";
// 출생지역 = 'busan'; // 에러

const 출생지역s = { region: "seoul" };
출생지역s.region = "busan";
// const 는 재할당을 금지하는 키워드지 안에 있는 object 수정을 금지하는 것은 아님
// => const 변수는 등호로 재할당만 막는 역할임
// => const로 담은 object 수정은 자유롭게 가능

// typescript 쓰면 object 자료 수정도 막을 수 있음(readonly) //
type Girlfriend = {
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "엠버",
};

// 여친.name = "유라"; // readonly를 붙이면 에러가 생김 => 실수로 수정하면 에러내줌
// => readonly 쓰면 object 자료 수정도 막을 수 있음
// (주의) 타입스크립트 에러는 에디터 & 터미널에서만 존재함
// 실제 변환된 js 파일은 에러없음

// object 속성 안에도 ? 사용가능
type Girlfriends = {
  name?: string; // name 속성은 선택 사항임(? -> string | undefined 가 들어올 수 있음)
};
const 여친s: Girlfriends = {
  name: "엠버",
};

// type 변수 당연히 union type으로 extend(합치기) 가능 //
// 나중에 interface 키워드 배울 때 다시 다룰 듯
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기 //
type PositionX = { x: number };
type PositionY = { y: number };
// {x : number, y : number} => 이걸 만들고 싶어~~

type NewType = PositionX & PositionY; // => {x : number, y : number} 만들어짐

let position: NewType = { x: 10, y: 20 }; // 에러 안나는거 보니 잘 되는군

// (참고) 같은 이름의 type 변수 재정의 불가능 //
type 어쩌구 = { x: number };
// type 어쩌구 = number; => 에러생김
