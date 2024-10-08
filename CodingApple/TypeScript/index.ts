type Animal = { name: string };
type Cat = { age: number } & Animal;

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = {
  name: "kim",
};

let 선생: Teacher = {
  name: "kim",
  age: 20,
};
