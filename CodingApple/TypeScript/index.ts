// 간단한 변수 타입 지정 가능 //
// let 이름: string = "kim";
// 이름 = 123; -> 'number'형식은 'string'형식에 할당할 수 없습니다 에러
// "이 변수엔 string(문자) type만 들어올 수 있습니다"
// string, number, boolean, null, undefined, bigint, [], {}, 등...

// array 타입 지정 //
// let 이름: string[] = ["kim", "park"];
// "이 변수엔 string 담긴 array만 들어올 수 있습니다."

// object 타입 지정 //
let 이름: { name?: string } = { name: "kim" };
// 여기서 ?는 'name 속성은 옵션이에얌'
// let 이름: { name?: string } = { }; 일때 에러가 나지 않도록 하는 것임
