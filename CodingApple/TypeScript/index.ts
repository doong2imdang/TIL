class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...param: (number | string)[]) {
    param.forEach((i) => {
      if (typeof i === "string") {
        this.str.push(i);
      } else {
        this.num.push(i);
      }
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
