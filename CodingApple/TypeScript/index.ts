let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수({ student: true, age: 20 });
