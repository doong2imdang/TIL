// Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야합니다. //
// 대표적인 Narrowing 방버븐 typeof 연산자
// (union type등 떄문에) 어떤 변수가 타입이 아직 불확실하면
// === 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
// (주의) if문 썼으면 끝까지 써야 안전 else, else if 안쓰면 에러로 잡아줄 수도
// 예시1
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수(123);
// 예시2 -> x 타입이 number | string (union type)
function 내함수2(x) {
    var array = [];
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
