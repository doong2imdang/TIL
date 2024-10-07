var 자료 = {
  name: "kim",
} as const;

자료.name; // kim

function 내함수(a: "kim") {}

내함수(자료.name);
