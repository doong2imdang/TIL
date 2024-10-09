type Fish = { swim: string };
type Bird = { fly: string };

function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수2(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입에요");
  } else {
    console.log("x는 Bike 타입이에요");
  }
}
