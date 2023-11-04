var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 숙제. 상품목록 3개 만들어오기(자바스크립트로 html 생성하기)
for (let i = 0; i < products.length; i++) {
  var 템플릿 = `
  <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}원</p>
    </div>
  `;
  document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿);
}
