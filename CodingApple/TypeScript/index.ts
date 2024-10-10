interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function 함수<T>(x: string): T {
  return JSON.parse(x);
}

let result = 함수<Animal>(data);

console.log(result);
