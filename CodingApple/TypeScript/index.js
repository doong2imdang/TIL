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
// let substitution: ThreePlusFour = { x: 10, y: "10" };  // 오류 발생
// 하지만 'x' 속성이 다른 타입이었다면, 예를 들어 'string'이었다면 위와 같은 오류가 발생합니다. => 이 경우 타입스크립트는 'x' 속성이 'number'와 'string' 타입을 동시에 만족할 수 없기때문에 오류를 발생시킵니다.
// 따라서 두 타입을 '&' 기호로 합칠 때, 중복된 속성의 타입이 동일하면 문제가 없으며, 타입이 다르면 타입스크립트에서 오류가 발생하게 됩니다.
