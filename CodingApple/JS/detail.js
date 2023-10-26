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
