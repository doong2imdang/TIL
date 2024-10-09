function 함수(...a: (number | string | boolean)[]) {
  console.log(a);
}

함수(1, 5, 2, 5, 6, "6", true);

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

let [변수1, 변수2] = ["안녕", 100];
console.log(변수1, 변수2);

let { student, age } = { student: true, age: 20 };
console.log(student, age);
