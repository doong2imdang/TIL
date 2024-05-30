// type aliaas 에 함수 type 저장해서 쓰는 법 //
// 1. 함수타입은 () => {} 모양으로
// 2. 함수표현식에만 type alias 사용가능
// () => { return 10 } => () => {이부분이 return 값인 이유}
// 함수 type alias 부착하려면 함수표현식 써야함(함수 정의하는 다른 방법일 뿐)
var 함수 = function (a) {
    return 10;
};
// object 안에 함수 만들 수 있음 //
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        // Q. object 안의 함수 타입지정은 어떻게? // 오늘의 포인트
        // 파라미터 하나는 number, return, 값은 number 이어야함(가정)
        // 파라미터가 있는데 타입지정 안하면 혼남
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(); // 이렇게 하면 함수안에 있는 코드 실행됨
// 숙제를 위한 잠깐 콜백함수 개념 설명 //
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2);
// 1. 그럼 함수1 내부코드 a() 실행됨
// 2. 근데 파라미터를 a자리에 집어넣어서 함수2() 실행됨
// 함수2를 콜백함수라고 부른다
