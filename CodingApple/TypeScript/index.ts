class User {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = this.familyName + a;
  }

  이름변경함수() {
    this.familyName = "park";
  }
}

let 유저1 = new User("민수");
유저1.이름변경함수();
console.log(유저1);

class Person {
  constructor(public name: string) {}
}

let 자식 = new Person("kim");
console.log(자식);
