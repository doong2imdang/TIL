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
      console.log(count);

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
console.log(어레이); // [2, 3, 40, 5, 7]

// 숫자 정렬은
어레이.sort(function (a, b) {
  return a - b;
});
console.log(어레이); // [2, 3, 5, 7, 40]

// 동작원리????
// 1. a, b 는 arrya 안의(에있던) 자료(들)임
// 2. return 오른쪽이 양수면 a를 오른쪽으로
// 3. return 오른쪽이 음수면 b를 오른쪽으로

// 숫자내림차순 정렬은? (3, 2, 1순)
어레이.sort(function (a, b) {
  return b - a;
});
console.log(어레이); // [40, 7, 5, 3, 2]

// 문자 가나다순 정렬은?
어레이2.sort();
console.log(어레이2); // ['a', 'b', 'c']

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
console.log(어레이2); // ['c', 'b', 'a']

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

  console.log(products);
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
console.log(새어레이); // [3, 2]

// array 자료 전부 변형하려면 .map() //
// 달러표시 상품가격인데 전부 원화로 변경하려면?
// 환율을 전체에 곱해주면 되는 그런곳에 활용함
var 어레이 = [7, 3, 5, 2, 40];

var 새어레이 = 어레이.map(function (a) {
  return a * 4;
});
console.log(새어레이); // [28, 12, 20, 8, 160]

// sort 와 filter 비교
// .sort() 는 원본변형 O
// .filter() 는 원본변형 X

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 숙제1. '상품명 다나가순 정렬' 버튼과 기능
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
