let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelectorAll(".naver");
링크.forEach((e) => {
  if (e instanceof HTMLAnchorElement) {
    e.href = "https://kakao.com";
  }
});

let 버튼 = document.querySelector("#button");

let 이미지 = document.querySelector("#image");
버튼?.addEventListener("click", function () {
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});
