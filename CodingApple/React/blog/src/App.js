import "./App.css";
import { useState } from "react";

function App() {
  // 대충 서버에서 가져온 실제 데이터임
  let post = "강남 우동 맛집";
  // document.querySelector('h4').innerHTML = post; (Javascript상에서)
  // let [a, b] = useState("남자 코트 추천");
  // a => state에 보관했던 자료 나옴
  // b => state 변경을 도와주는 함수
  let [글제목, b] = useState("남자 코트 추천");
  // let [logo, setLogo] = useState("ReactBlog");

  // Q. 변수가 아니라 왜 state 써야함?
  // 일반 변수는 갑자기 변경되면 html도 변경해줘야함(html 자동으로 반영안됨)
  // 변수와 다르게 state는 갑자기 변경되면 state쓰던 html은 자동 재렌더링 됨

  // Q. state 언제 써야함?
  // -> 변동시 자동으로 html 반영되게 만들고 싶으면 state 쓰셈

  // 숙제. 이렇게 만들어오세요. 근데 제목들을 state로 만들어오셈
  return (
    <div className="App">
      <div className="black-nav">
        {/* 로고 글자도 state로 넣으면 좋을듯? (쓸데없어보임=> 맨날 바뀌지 않기때문) */}
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

