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

var 변수 = 0; // 변수로 저장할 경우 페이지 새로고침시 다시 초기값으로 변함

// 데이터를 반영구적으로 저장하는 방법
// -> 브라우저안에 몰래 데이터 저장가능

// 저장할 수 있는 다양한 방법이 있는데
// 1. localStorage, 2. sessionStorage 는 이름(key):값(value) 형태로 저장가능 / 용량은 5MB / 문자, 숫자만 저장가능
// localStorage는 사이트 재접속해도 유지 sessionStorage는 사이트나가면 자동삭제되는 차이점이 있음
// 3. IndexedDB 는 구조화된 대용량데이터 저장시(문법 복잡)
// 4. Cookies 는 보통 로그인 정보 저장시
// 5. Cache Storage는 html css js 파일 저장하는 곳

// forEach 사용하는 경우
products.forEach((data) => {
  var 템플릿 = `
  <div class="col-sm-4">
    <img src="https://via.placeholder.com/200" class="w-100" />
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}원</p>
      <button class="buy">구매</button>
    </div>
  `;
  document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿);
});

/// 13. 장바구니 기능과 localStorage ///
// 구매 버튼 누르면 장바구니에 상품명 추가?
// -> 실제 서비스면 서버로 보냈을듯

// 구매버튼을 누르면 localStorage에 상품명 저장해두자

// 저장하려면
localStorage.setItem("데이터이름", "저장할 값");
localStorage.setItem("이름", "kim");

// 출력하려면
localStorage.getItem("이름"); // kim

// 삭제하려면
localStorage.removeItem("이름");

// localStorage에 array, object 저장하려면
// array/object -> JSON으로 바꾸면 저장가능
// array/object -> JSON 은 JSON.stringify()
// JSON -> array/object는 JSON.parse()
localStorage.setItem("num", [1, 2, 3]); // num 1, 2, 3(array를 강제로 문자로 변환해줌)
var arr = [1, 2, 3];
var newArr = JSON.stringify(arr);

localStorage.setItem("num", newArr);
var 꺼낸거 = localStorage.getItem("num");
JSON.parse(꺼낸거);
console.log(꺼낸거); // array가 아니라 문자 [1, 2, 3]
console.log(JSON.parse(꺼낸거)); // array

// sessionStorage 사용법은 localStorage 부분을 sessionStorage라고만 바꾸면 똑같이 사용 가능

// localStorage 데이터 수정?
// 1. 자료꺼냄
// 2. 꺼낸거 수정
// 3. 다시 넣음

// 숙제 1. 구매버튼 누르면 누른 상품명 localStorage에 저장하기(예. cart(key): value값에 array로 저장추천)
// (팁1) 내 형제요소(sibling) 찾는 법 알아봐야
// (팁2) localStorage가 비어있을때 / 뭐가 있을떄 저장방식이 뭔가 다를듯( 1. 구매버튼 누를때 cart 항목 없으면 array 추가해야함 / 2. cart 항목 있으면 array 수정해야함)

// 1. 구매버튼 누르면
// 2. 지금누른 버튼 윗윗 글자를 가져와서
// 3. localStorage에 [글자] 저장
// document.querySelectorAll(".buy").forEach((buyButton, index) => {
//   buyButton.addEventListener("click", function () {
//     let selectedProduct = products[index];
//     let key = "상품명";
//     let cart = JSON.parse(localStorage.getItem(key)) || [];
//     cart.push(selectedProduct.title);
//     localStorage.setItem(key, JSON.stringify(cart));
//   });
// });

// 강의 정답
document.querySelectorAll(".buy").forEach((buyButton) => {
  buyButton.addEventListener("click", function (e) {
    var title =
      e.target.previousElementSibling.previousElementSibling.textContent;

    // 만약에 이미 cart 라는 항목이 있으면 수정하기~~ 근데 그게 아니면 cart 추가해주기
    if (localStorage.getItem("cart") != null) {
      // localStorage에 있던 array 1. 꺼내서 2. 자료 추가하고 3. 다시 넣기
      // localStorage.getItem('cart') == localStorage.cart
      var 꺼낸거 = JSON.parse(localStorage.cart);
      꺼낸거.push(title);
      localStorage.setItem("cart", JSON.stringify(꺼낸거));
    } else {
      localStorage.setItem("cart", JSON.stringify([title]));
    }
  });
});

// 숙제 2. cart.html 방문시 localStorage에 저장된 상품명들 다 보여주기(완 - cart.html)

// 응용. array안의 중복제거는?

// 응용2. 아니면 상품수량도 저장?
// 예시) value 값이 ["Blossom Dress 2개"] -> ["Blossom Dress 3개"] 이렇게
// 예시) [{상품명: 'A', 수량 : 1}, {상품명: 'B', 수량 : 2} ...] 이런식으로 저장

// Q. 더보기 버튼 누르면 상품 3개 가져와서 출력하기
// https://codingapple1.github.io/js/more1.json(GET 요청하면 상품 3개 더줌 [{}, {}, {}])
// let count = 0;
// document.querySelector("#more").addEventListener("click", function () {
//   if (count === 0) {
//     fetch("https://codingapple1.github.io/js/more1.json")
//       .then((res) => res.json())
//       .then((data) => {
//         data.forEach((thing) => {
//           var 템플릿2 = `
//         <div class="col-sm-4">
//           <img src="https://via.placeholder.com/200" class="w-100" />
//           <h5>${thing.title}</h5>
//           <p>가격 : ${thing.price}원</p>
//         </div>
//         `;
//           document
//             .querySelector(".row")
//             .insertAdjacentHTML("beforeend", 템플릿2);
//         });
//         count += 1;
//         console.log(count);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else if (count === 1) {
//     fetch("https://codingapple1.github.io/js/more2.json")
//       .then((res) => res.json())
//       .then((data) => {
//         data.forEach((thing) => {
//           var 템플릿2 = `
//         <div class="col-sm-4">
//           <img src="https://via.placeholder.com/200" class="w-100" />
//           <h5>${thing.title}</h5>
//           <p>가격 : ${thing.price}원</p>
//         </div>
//         `;
//           document
//             .querySelector(".row")
//             .insertAdjacentHTML("beforeend", 템플릿2);
//         });
//         document.querySelector(".btn-danger").style.display = "none";
//         count += 1;
//         console.log(count);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// });

// https://codingapple1.github.io/js/more2.json(GET요청하면 7,8,9 번째 상품 줌)
// 응용 1. 더보기 2회 누르면 7, 8, 9번째 상품 더 가져오기(완)

// 응용 2. 더보기 2회 누르면 7, 8, 9 번째 상품 더 가져오기 & 버튼 안보이게(완)

// 응용 3. 심심하면 유사한 코드 줄여보기 => 함수로 만들어보기
// 함수화할때 변수있으면 파라미터로 바꾸는게 좋음

let count = 0;
document.querySelector("#more").addEventListener("click", function () {
  const url =
    count === 0
      ? "https://codingapple1.github.io/js/more1.json"
      : "https://codingapple1.github.io/js/more2.json";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const row = document.querySelector(".row");

      data.forEach((thing) => {
        const 템플릿2 = `
      <div class="col-sm-4">
        <img src="https://via.placeholder.com/200" class="w-100" />
        <h5>${thing.title}</h5>
        <p>가격 : ${thing.price}원</p>
      </div>
      `;
        row.insertAdjacentHTML("beforeend", 템플릿2);
      });
      count += 1;
      // console.log(count);

      if (count === 2) {
        document.querySelector(".btn-danger").style.display = "none";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

/// 10. array에 자주 쓰는 sort, map, filter 함수 ///
// 가격순 정렬
// products array를 정렬하고 products에 있던걸로 html 다시 생성하면 끝일듯

// array 정렬하는 법
// 문자 정렬은 array.sort()
var 어레이 = [7, 3, 5, 2, 40];
var 어레이2 = ["a", "b", "c"];

어레이.sort();
// console.log(어레이); // [2, 3, 40, 5, 7]

// 숫자 정렬은
어레이.sort(function (a, b) {
  return a - b;
});
// console.log(어레이); // [2, 3, 5, 7, 40]

// 동작원리????
// 1. a, b 는 arrya 안의(에있던) 자료(들)임
// 2. return 오른쪽이 양수면 a를 오른쪽으로
// 3. return 오른쪽이 음수면 b를 오른쪽으로

// 숫자내림차순 정렬은? (3, 2, 1순)
어레이.sort(function (a, b) {
  return b - a;
});
// console.log(어레이); // [40, 7, 5, 3, 2]

// 문자 가나다순 정렬은?
어레이2.sort();
// console.log(어레이2); // ['a', 'b', 'c']

// 숙제. 문자 다나가순 정렬은?
어레이2.sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(어레이2); // ['c', 'b', 'a']

// Q. 버튼 누르면 products 안의 데이터를 가격순 정렬?
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

document.querySelector("#price").addEventListener("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  // console.log(products);
});

// Q. 버튼 눌러도 왜 html은 안바뀜?
// 컴퓨터는 여러분이 시키는것만 할뿐 명령을 내려야함

document.querySelector("#price").addEventListener("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  // 1. 카드 3개있던 div의 내용제거
  document.querySelector(".row").innerHTML = "";

  // 2. products 갯수만큼 카드 생성~ 정렬대로
  products.forEach((data) => {
    var 템플릿3 = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/200" class="w-100" />
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}원</p>
    </div>
    `;
    document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿3);
  });
});

// array 자료 원하는 것만 필터하려면 .filter() //
// a => array에 있던 자료임
// filter() 결과는 변수에 저장해서 써야함
var 어레이 = [7, 3, 5, 2, 40];
var 새어레이 = 어레이.filter(function (a) {
  // return 조건식
  return a < 4;
});
// console.log(새어레이); // [3, 2]

// array 자료 전부 변형하려면 .map() //
// 달러표시 상품가격인데 전부 원화로 변경하려면?
// 환율을 전체에 곱해주면 되는 그런곳에 활용함
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.map(function (a) {
  return a * 4;
});
// console.log(새어레이); // [28, 12, 20, 8, 160]

// sort 와 filter 비교
// .sort() 는 원본변형 O
// .filter() 는 원본변형 X

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 숙제1. '상품명 다나가순 정렬' 버튼과 기능

var 어레이 = ["가", "다", "나"];
어레이.sort(function (a, b) {
  // return 양수 -> a 우측으로 감
  // return 음수 -> b 우측으로 감
  //   a   b
  // '가' '다' 일 경우 return 양수
  // '다' '나' 일 경우 return 음수
  // '가', '나' 일 경우 return 양수
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

document.querySelector("#name").addEventListener("click", function () {
  products.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    } else {
      return 0;
    }
  });
  document.querySelector(".row").innerHTML = "";

  products.forEach((data) => {
    var 템플릿4 = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/200" class="w-100" />
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}원</p>
    </div>
    `;
    document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿4);
  });
});

// 숙제2. '6만원 이하 상품만 보기' 버튼과 기능
// products에서 6만원 이하만 남기면 될듯 그리고 그걸로 html 새로 생성
document.querySelector("#underPrice").addEventListener("click", function () {
  document.querySelector(".row").innerHTML = "";
  let underPrice = products.filter(function (product) {
    return product.price <= 60000;
  });

  underPrice.forEach((data) => {
    var 템플릿4 = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/200" class="w-100" />
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}원</p>
    </div>
    `;
    document.querySelector(".row").insertAdjacentHTML("beforeend", 템플릿4);
  });
  console.log(underPrice);
});
