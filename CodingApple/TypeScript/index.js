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
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n      top:".concat(a * 400, "px; \n      left:").concat(a * 400, "px; \n      width:").concat(this.width, "px; \n      height : ").concat(this.height, "px; \n      background:").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.draw();
