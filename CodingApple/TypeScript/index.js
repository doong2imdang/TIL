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
// assertion 문법(타입 덮어쓰기) //
// 예시 1
function 내함수3(x) {
    var array = [];
    array[0] = x; // as 왼쪽에 있는 변수를 number로 덮어 씌어주세요
}
내함수3(123);
// 남용하지 않기 위한 assertion 문법의 용도
// 1. Narrowing 할 때 씁니다.
var 이름 = "kim";
// 이름 as number;  -> 타입을 a 에서 b로 변경 x
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈 (그래서 굳이 쓸 이유가?)
// => 그냥 if문 쓰셈
function 내함수4(x) {
    var array = [];
    array[0] = x; // as 왼쪽에 있는 변수를 number로 덮어 씌어주세요
}
내함수4("123"); // 문자 넣어도 아무일 없음 -> assertion 해놓으면 이런 버그 캐치 못함
// 3. 남이 짠 코드 수정할때... 왜 타입에러가 나는지 모르겠을때... 디버깅용..
// 예전 as 문법은 (참고)
// let 이름들 :string = 'kim';
// <number>이름;
// as 문법이 유용한 경우: 강의하단 참고
// 코드 짜다가 콘솔창에 변수 출력해보고 싶으면 html 파일에 ts -> js 변환된 파일 넣으셈
// (숙제 1) 숫자 여러개를 array자료에 저장해놨는데 가끔 '4', '5' 이런식의 문자타입의 숫자가 발견되고 있습니다. 이걸 클리닝해주는 함수가 필요합니다. 클리닝함수(['1', '2', '3']) 이렇게 숫자와 문자가 섞인 array를 입력하면 [1, 2, 3] 이렇게 숫자로 깔끔하게 변환되어나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝(x) {
    var 클리닝완료 = [];
    x.forEach(function (e) {
        if (typeof e === "string") {
            클리닝완료.push(parseInt(e));
        }
        else {
            클리닝완료.push(e);
        }
    });
    return 클리닝완료;
}
console.log(클리닝([123, "3"]));
// (숙제 2) 다음과 같은 함수를 만들어보십시오.
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장되어 있습니다. 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되었고, 과목 2개 이상 가르치는 쌤들은 array자료로 과목들이 저장되어 있습니다.
// '철수쌤' 같은 object 자료를 파라미터로 집어넣으면 그 선생님이 가르치고 있는 과목 중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다. 그리고 타입지정도 엄격하게 해보도록 합시다.
function 과목(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없어유";
    }
}
console.log(과목({ subject: ["english", "art"] }));
