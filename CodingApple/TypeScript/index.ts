let 멍멍: [string, boolean?, number?] = ["dog"];

// function 함수(...x: [number, string]) {
//   console.log(x);
// }

function 함수(a: number, b: string) {
  console.log([a, b]);
}

함수(111, "222");

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
