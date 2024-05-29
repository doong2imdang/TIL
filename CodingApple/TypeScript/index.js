// type alias(별칭 => 변수) 만드는 법 //
var 동물 = "kim";
var 동물s = { name: "kim", age: 20 };
// const 변수 잠깐 설명시간
var 출생지역 = "seoul";
// 출생지역 = 'busan'; // 에러
var 출생지역s = { region: "seoul" };
출생지역s.region = "busan";
var 여친 = {
    name: "엠버",
};
var 여친s = {
    name: "엠버",
};
var position = { x: 10, y: 20 }; // 에러 안나는거 보니 잘 되는군
var substitute = { x: 10, y: "10" }; // 오류 없음
var example1 = {
    color: "green",
    size: 20,
    position: [90, 100, 105],
};
var person1 = {
    name: "kim",
    phone: 123123123,
    email: "abc@naver.com",
};
var person2 = {
    name: "lee",
    phone: 123123123,
    email: "example@naver.com",
    minorstatus: true,
};
