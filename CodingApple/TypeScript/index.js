// 변수만들기 //
// 변수에 타입 지정 가능 -> 변수명 :타입명 = 변수에 실드 씌우는 것임
// 타입에는 string, number, boolean, null, undefined ...
var 이름 = "kim";
// 이름 = 123; (장점: 타입이 실수로 변경될 때 에러내줌)
var 나이 = 50;
var 결혼했니 = true; // boolean은 true/false 자료를 뜻함
var 결혼결혼 = null; // undefined, null 타입도 있습니다.
var 미혼미혼 = undefined;
// 변수 하나에 여러자료 집어넣고 싶으면 array 자료형 쓰면 됩니다.
// array 자료에 타입 지정 가능
var 회원들 = ["kim", "park"]; // -> 문자만 담긴 array만 가능
// Q. 저는 array에 숫자랑 문자 동시에 넣고 싶은데요?
// A. 나중에 알아봅시다. Union type을 쓰면 됩니다.
// 변수 하나에 여러자료 집어넣고 싶으면 object 자료형 써도 가능
// object 자료에도 타입 지정 가능
var 회원s = {
    member1: "kim",
    member2: "park",
}; // -> 이 변수엔 object만 들어올 수 있음
// 오늘의 pro tip
// 타입스크립트 갓 배운 사람 특징_온갖 곳에 다 타입지정 해놓음
// 타입 지정 원래 자동으로 됩니다. -> 타입 지정 문법 생략 가능
var 회원들들 = "park";
var 회원임 = 123;
var 회원일까 = [1, 2, 3];
// JS 문법 그대로 TS에서 사용 가능
// 저번에 셋팅해놓은 곳에 코드 짤 것임
// - nodeJS 최신버전 설치
// - 터미널에 npm install -g typescript
// - tsconfig.json 만들고
// - 어쩌구.ts 파일에 코딩 시작
// - 터미널에 tsc -w 헤둔 채로
// Q1. 여려분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = "doong";
var myAge = 27;
var placeOfBirth = "Ansan";
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var 마이훼이보릿 = {
    곡: "Golden Hour",
    가수: "Ateez",
};
// Q3. 다음과 같이 생긴 자료의 타입 지정을 해보도록 합시다.
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
