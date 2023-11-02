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

/// 8. Ajax 1 - 개념 정리 ///
// 서버와 데이터 주고받는 법 //
// 서버? => 데이터 달라고 하면 데이터 보내주는 프로그램
// [서버코드] 누가 이미지 요청하면 이미지 주셈/ 누가 html 요청하면 html 주셈 ...
// 서버와 통신하기위해서는 1. 어떤 데이터인지(데이터의 url) 2. 어떤 방법으로 요청할 것인지 잘 기재를 해야 데이터 줌(GET 인지 POST 인지 잘 기재해야 데이터 줌)

// 예시(네이버웹툰)
// 개발자 ===========> 네이버웹툰서버
//        <===========
// 개발자 1. 데이터 url 기재해야함(comic.naver.com)
// 개발자 2. GET(데이터 읽을때)/POST(데이터 보낼때) 둘 중 하나 선택해야함
// 서버 1. 데이터 보내주기
// 서버 2. 유저데이터 DB에 저장하기(유저가 서버에 데이터보내려면 거의 POST 요청 필요)

// Q. 특정 url로 GET 요청 하는 법?
// 브라우저 주소창이 GET요청하는 공간

// Q. 특정 url로 POST 요청하는 법?
// html에서
// <form action="/url~~" method="post">
// </form>

// GET/POST 요청하면 브라우저 새로고침됨
// => Ajax를 이용해서 새로고침없이 GET, POST 요청이 가능함

// ajax로 GET 요청하는 법 //

// 1. jQuery
// $.get('url~~~')
// done: 받아오는데 성공하면
// $.get() 얘는 JSON => object 자동변환해줌
$.get("https://codingapple1.github.io/hello.txt")
  .done(function (data) {
    console.log(data); // data: 서버에서 받아온 데이터는 여기
  })
  .fail(function () {
    // ajax 실패시 특정 코드 실행하고 싶으면
    // 404: url 주소가 이상하다는 뜻
    console.log("실패함");
  });

$.get("https://codingapple1.github.io/price.json")
  .done(function (data) {
    console.log(data.price);
  })
  .fail(function () {
    console.log("실패함");
  });

// 브라우저 기본함수 fetch 써도 ajax 가능
fetch("https://codingapple1.github.io/price.json")
  // 문자만 주고받을 수 있기때문에
  // object, array 보내고 싶으면 따옴표쳐서 문자처럼 만들어야 함 "{"price":5000}"(json형태)
  .then((res) => res.json()) // 받아온 JSON을 object로 바꿔주는 기능
  .then((data) => {
    console.log(data.price);
  })
  .catch((error) => {
    console.log(error);
  });

// ajax로 POST 요청하는 법 //

// 1. jQuery
// $.post('url~~~', {받아올 데이터})
// done: 받아오는데 성공하면
// $.post("https://codingapple1.github.io/hello.txt", { name: "kim" }).done(
//   function (data) {
//     console.log(data); // data: 서버에서 받아온 데이터는 여기
//   }
// );

// axios 라이브러리(ajax 편하게 쓰고싶을때 사용)
