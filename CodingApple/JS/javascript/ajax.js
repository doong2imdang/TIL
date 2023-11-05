var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 숙제. 상품목록 3개 만들어오기(자바스크립트로 html 생성하기)
// for (let i = 0; i < products.length; i++) {
//   var 템플릿 = `
//   <div class="col-sm-4">
//     <img src="https://via.placeholder.com/600" class="w-100" />
//       <h5>${products[i].title}</h5>
//       <p>가격 : ${products[i].price}원</p>
//     </div>
//   `;
//   document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿);
// }

// forEach 사용하는 경우
products.forEach((data) => {
  var 템플릿 = `
  <div class="col-sm-4">
    <img src="https://via.placeholder.com/200" class="w-100" />
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}원</p>
    </div>
  `;
  document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿);
});

// Q. 더보기 버튼 누르면 상품 3개 가져와서 출력하기
// https://codingapple1.github.io/js/more1.json(GET 요청하면 상품 3개 더줌 [{}, {}, {}])
document.querySelector("#more").addEventListener("click", function () {
  fetch("https://codingapple1.github.io/js/more1.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((thing) => {
        var 템플릿2 = `
        <div class="col-sm-4">
          <img src="https://via.placeholder.com/200" class="w-100" />
          <h5>${thing.title}</h5>
          <p>가격 : ${thing.price}원</p>
        </div>
        `;
        document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿2);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// https://codingapple1.github.io/js/more2.json(GET요청하면 7,8,9 번째 상품 줌)
// 응용 1. 더보기 2회 누르면 7, 8, 9번째 상품 더 가져오기

// 응용 2. 더보기 2회 누르면 7, 8, 9 번째 상품 더 가져오기 & 버튼 안보이게

// 응용 3. 심심하면 유사한 코드 줄여보기 => 함수로 만들어보기
// 함수화할때 변수있으면 파라미터로 바꾸는게 좋음
