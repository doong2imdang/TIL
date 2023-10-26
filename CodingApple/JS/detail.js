// 버튼O 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼O에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - divO에 show 클래스명 추가
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

//     querySelectorAll('.tab-button')[0]과 비슷함
// $(".tab-button")
//   .eq(0)
//   .on("click", function () {});
