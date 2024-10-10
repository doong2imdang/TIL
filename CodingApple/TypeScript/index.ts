class Person<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person<string>("어쩌구");
a.name;
