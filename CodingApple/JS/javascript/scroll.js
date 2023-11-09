// 스크롤 할때마다 뭔가 코드를 실행하려면?
// 현재 스크롤바 높이를 알려주는 .scrollTop()
$(window).scroll(function () {
  var 높이 = $(window).scrollTop();
  console.log(높이);

  // 650 ~ 1150 까지 스크롤바를 내리면, 첫째카드의 opacity 1 ~ 0 으로 서서히 변경해주셈

  // (스크롤 높이에 따라) 카드 0의 opacity 변경
  // y: 650 ~ 1150 스크롤 될 떄 0 ~ 1 의 값을 가지는 변수
  // 높이가 650 ~ 1150 일때 0 ~ 1dl 되는 y는?
  // var y = a * 높이 + b; // 흔한 직선 표현식
  // a = -1/500;
  // b = 115/50;
  var y = (-1 / 500) * 높이 + 115 / 50;
  $(".card-box").eq(0).css("opacity", y);
});

// 숙제. 카드가 작아지는걸 구현(transform 속성(scale) 이용)
