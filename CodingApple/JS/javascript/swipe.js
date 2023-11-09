// 기능1. 내가 드래그한 거리만큼 사진('박스')도 왼쪽으로 움직임
// 기능2. 손놓으면 100px 이동 시  둘째 사진('박스') 보임 아니면 첫째사진('박스')보임

// 알아야할 이벤트
// mousedown : 마우스 누를때 발동
// mouseup : 마우스 뗄 때 발동
// mousemove : 마우스가 움직일 때 발동

// e.clientX : 현재 마우스위치 X 좌표

// mousedown - mousemove 하면 얼마나 움직였는지 알 수 있음
// 모든 변수는 범위가 function이라 mousedown에서 만든 변수를 다른 함수에서 사용할 수 없음(탈출 불가능)
var 시작좌표 = 0; // 전역변수(아무데서나 쓸 수 있는 변수)
var 눌렀냐 = false;
$(".slide-box")
  .eq(0)
  .on("mousedown", function (e) {
    console.log(e.clientX);
    // 기능1
    시작좌표 = e.clientX;
    눌렀냐 = true;
  });

$(".slide-box")
  .eq(0)
  .on("mouseup", function (e) {
    눌렀냐 = false;
  });

$(".slide-box")
  .eq(0)
  .on("mousemove", function (e) {
    // 기능1
    e.clientX - 시작좌표; // 이동거리
    console.log(e.clientX - 시작좌표); // 이동거리 출력

    // 마우스 찍은 후에 박스 움직이게 해주세요
    if (눌렀냐 == true) {
      $(".slide-container").css(
        "transform",
        `translateX(${e.clientX - 시작좌표}px)`
      );
    }

    // 기능2. 손놓을 때 100px 이상 이동했으면 둘째 사진 보임 아니면 첫째사진 보임
    // 2번 사진이 순간이동하는게 아니라 서서히 등장하게? -> transition 쓰면 될듯
  });
