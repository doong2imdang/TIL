function 함수<T extends string | string[]>(x: T) {
  return x.length;
}

let a = 함수<string>("hello");
let b = 함수<string[]>(["kim", "park"]);

console.log(a, b);
