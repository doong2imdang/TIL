// class Square {
//   width: number;
//   height: number;
//   color: string;

//   constructor(a: number, b: number, c: string) {
//     this.width = a;
//     this.height = b;
//     this.color = c;
//   }

//   draw() {
//     const container = document.querySelector(".container");
//     const newDiv = document.createElement("div");
//     newDiv.style.width = `${this.width}px`;
//     newDiv.style.height = `${this.height}px`;
//     newDiv.style.backgroundColor = this.color;

//     container?.appendChild(newDiv);
//   }
// }

class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
