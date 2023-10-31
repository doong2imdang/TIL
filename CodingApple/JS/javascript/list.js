var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 오늘의 숙제
// products 안에 있는 데이터를 카드 3개에 데이터바인딩해오십시오(반복문 등등 이용해서)
for (let i = 0; i < products.length; i++) {
  document.querySelectorAll(".card-title")[i].innerHTML = products[i].title;

  document.querySelectorAll(".card-price")[i].innerHTML = products[i].price;
}

// class 주지않고 하는 방법
for (let i = 0; i < products.length; i++) {
  document.querySelectorAll(".card-body h5")[i].innerHTML = products[i].title;

  document.querySelectorAll(".card-body p")[i].innerHTML =
    "가격 : " + products[i].price + "원";
}

// 문자 중간에 변수 쉽게넣기(같은결과)
var a = "안녕";
let a1 = "문자" + a + "문자";
console.log(a1);

let a2 = `문자${a}문자`;
console.log(a2);
