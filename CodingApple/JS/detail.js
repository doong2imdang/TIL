// 버튼O 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼O에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - divO에 show 클래스명 추가

// 숙제. for 반복문으로 풀어보기
let Buttons = document.querySelectorAll(".tab-button");
let Contents = document.querySelectorAll(".tab-content");
for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", function () {
    // 모든 버튼에서 'orange' 클래스 제거
    Buttons.forEach((button) => button.classList.remove("orange"));
    // 현재 클릭한 버튼에 'orange' 클래스 추가
    Buttons[i].classList.add("orange");

    // 모든 콘텐츠에서 'show' 클래스 제거
    Contents.forEach((content) => content.classList.remove("show"));
    // 현재 클릭한 버튼에 해당하는 콘텐츠에 'show' 클래스 추가
    Contents[i].classList.add("show");
  });
}
console.log(Buttons, Contents);

// 응용. 탭이 4개, 5개로 늘어나도 잘 작동하는 코드?
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // 모든 탭 컨텐츠를 숨김
      tabContents.forEach((content) => {
        content.classList.remove("show");
      });

      // 현재 클릭한 버튼에 해당하는 컨텐츠만 보임
      tabContents[index].classList.add("show");

      // 모든 탭 버튼 스타일을 초기화
      tabButtons.forEach((btn) => {
        btn.classList.remove("orange");
      });

      // 현재 클릭한 버튼에 스타일을 적용
      button.classList.add("orange");
    });
  });

  // 초기 상태 설정: 첫번쨰 탭을 활성화
  tabButtons[0].click();
});

// jQuery //

// querySelectorAll('.tab-button')[0]과 비슷함

// var 버튼 = $(".tab-button");
// var 컨텐츠 = $(".tab-content");
// 버튼.eq(0).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(0).addClass("orange");
//   컨텐츠.removeClass("show");
//   컨텐츠.eq(0).addClass("show");
// });

// 버튼.eq(1).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(1).addClass("orange");
//   컨텐츠.removeClass("show");
//   컨텐츠.eq(1).addClass("show");
// });

// 버튼.eq(2).on("click", function () {
//   버튼.removeClass("orange");
//   버튼.eq(2).addClass("orange");
//   컨텐츠.removeClass("show");
//   컨텐츠.eq(2).addClass("show");
// });

/// for 반복문 ///
// for 문법은 코드 복붙보다는 반복실행이 맞음
console.log("안녕");
console.log("안녕");
console.log("안녕");

// ===
//  시작은 i=0/3되면 끝내셈/복붙할때마다 i+1
for (var i = 0; i < 3; i++) {
  console.log("안녕");
  // 변수 i      복붙여부
  // 0             OK
  // 1             OK
  // 2             OK
  // 3             X
}

// var 버튼 = $(".tab-button");
// var 컨텐츠 = $(".tab-content");
// for (let i = 0; i < 3; i++) {
//   버튼.eq(i).on("click", function () {
//     버튼.removeClass("orange");
//     버튼.eq(i).addClass("orange");
//     컨텐츠.removeClass("show");
//     컨텐츠.eq(i).addClass("show");
//   });
// }

// 12. 이벤트 버블링 응용과 dataset
// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기();
//     });
// }

// ===

// function 탭열기() {
//   $(".tab-button").removeClass("orange");
//   $(".tab-button").eq(i).addClass("orange");
//   $(".tab-button").removeClass("show");
//   $(".tab-button").eq(i).addClass("show");
// }

// // 이렇게 했을때 실행 안됨!!
// // => 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔줘야 합니다.

// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

// ===

// function 탭열기(작명아무거나) {
//   $(".tab-button").removeClass("orange");
//   $(".tab-button").eq(작명아무거나).addClass("orange");
//   $(".tab-button").removeClass("show");
//   $(".tab-button").eq(작명아무거나).addClass("show");
// }
// 이렇게 써줘야 한다~!!!
// 실행은
// 탭열기(0)실행하면 0번 탭 열릴듯

/// 탭기능 다르게 만들기 -> 이벤트리스너 1개만 쓰기 ///
// 까닭? 이벤트리스너 하나를 쓸때마다 RAM 용량을 쓰게된다.
// 이벤트버블링을 알고있으면 이벤트리스너 많이 필요없음

// $(".list").click(function (e) {
//   // if(지금 누른게 버튼 0이면 ) {
//   //   탭열기(0)
//   // }
//   // ===
//   // 지금 누른게 버튼 0이면 탭열기(0)
//   if (e.target == document.querySelectorAll(".tab-button")[0]) {
//     탭열기(0);
//   }
//   // 지금 누른게 버튼 0이면 탭열기(1)
//   if (e.target == document.querySelectorAll(".tab-button")[1]) {
//     탭열기(1);
//   }
//   // 지금 누른게 버튼 0이면 탭열기(2)
//   if (e.target == document.querySelectorAll(".tab-button")[2]) {
//     탭열기(2);
//   }
// });

/// 오늘의 문법 ///
// (오늘의 상식) html 태그에 몰래 정보숨기기 가능
// => data-자료이름="값"
// 숨겼던 자료 출력은 셀렉터.dataset.자료이름 (예시. document.querySelector('.tab-button).dataset.id)

// $(".list").click(function (e) {
//   // 탭열기(지금누른버튼에 숨겨져있는 data-id); => 이러면 if 필요없을듯
//   탭열기(e.target.dataset.id); // 숫자로 변환해서 쓰면 더 정확할듯
// });

/// 오늘 배운 것들 ///
// 1. 함수로 축약하 때 변수있으면 파라미터로 바꿔보셈
// 2. data-id 로 몰래 숨기기 가능
// 3. 이벤트리스너 1개만 써도 개발가능할 수도 -> 이벤트버블링 이용해서

/// 1. Array 와 Object 자료형 ///

var car = "소나타";
var carPrice = 50000;
var carColor = "white"; // Q. 변수 10개 만들것임? => 변수 하나에 여러자료 저장 가능

// array 자료형 [자료1, 자료2, 자료3, ...]
// => array 쓰면 여러자료를 변수 하나에 저장가능
//             0       1       2
var car = ["소나타", 50000, "white"];
console.log(car);

// Q. array에서 자료 꺼내려면?
console.log(car[1]);

// Q. array 자료 추가/ 수정하려면?
car[0] = "아반떼";
console.log(car[0]);

car[3] = "2023";
console.log(car);

// array와 비슷한게 있음 => Object 자료형
// {이름1 : 자료1, 이름2 : 자료2, ...}
// 장점: 이름을 붙여서 저장가능한것(꼭 붙여야함) => key: value 형태로 저장가능한게 장점
//            key    value    key    value
var car2 = { name: "소나타", price: 50000 };

// Q. object에서 자료 꺼내려면? => Array형과 다르게 숫자가 아닌 이름을 불러주면됨
console.log(car2["name"]);
console.log(car2.price);

// Q. Object 자료 수정/ 추가는?
car2.price = 60000;
console.log(car2.price);

// array / obeject 차이점 //

// array
// - array는 자료간 순서가 존재함
// => 자료간 정렬도 가능함(예시) car.sort())
// => 중간에 자르기도 가능함 => car.slice(1, 3)
// => 자료검색도 가능함
// => 맨앞/맨뒤에 자료추가 가능
// array에 붙일 수 있는 기본함수들 개많음(찾아쓰기)

// object
// - object는 순서개념이 없음
// => 그래서 인덱싱 할 수 없음(예시) car2[0] 이런거 안됨)

// 오늘의 숙제
// 자바스크립트를 써서 car2에 있던 데이터들을 html에 꽂아서 보여주기
