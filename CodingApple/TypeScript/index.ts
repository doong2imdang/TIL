interface LengthCheck {
  length: number;
}

function 함수<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let a = 함수<string[]>(["100"]);

console.log(a);
