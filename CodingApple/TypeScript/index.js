// 간단한 변수 타입 지정 가능 //
// let 이름: string = "kim";
// 이름 = 123; -> 'number'형식은 'string'형식에 할당할 수 없습니다 에러
// "이 변수엔 string(문자) type만 들어올 수 있습니다"
// string, number, boolean, null, undefined, bigint, [], {}, 등...
// array 타입 지정 //
// let 이름: string[] = ["kim", "park"];
// "이 변수엔 string 담긴 array만 들어올 수 있습니다."
// object 타입 지정 //
// let 이름: { name?: string } = { name: "kim" };
// 여기서 ?는 'name 속성은 옵션이에얌'
// let 이름: { name?: string } = { }; 일때 에러가 나지 않도록 하는 것임
// 다양한 타입이 들어올 수 있게 하려면 Union type ( | ) //
// let 이름: string[] | number = 123;
// 타입은 변수에 담아쓸 수 있음 Type alias //
// type Name = string | number;
// let 이름: Name = 123;
// 영어 대문자로 보통 작명함 -> 그래야 일반변수랑 차별화해서 관리할 수 있기때문
// 함수에 타입 지정 가능 //
function 함수(x) {
    return x * 2;
}
// 함수('123'); -> 에러
// 이 함수는 파라미터로 number, return 값으로 number
