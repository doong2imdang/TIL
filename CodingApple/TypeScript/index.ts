class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("park");

console.log(사람1.함수("어쩌구"));
