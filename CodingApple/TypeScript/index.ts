class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
