/* eslint-disable */
// Lint 끄는 기능임

import "./App.css";
import { useState } from "react";

function App() {
  // 대충 서버에서 가져온 실제 데이터임
  let post = "강남 우동 맛집";
  // document.querySelector('h4').innerHTML = post; (Javascript상에서)
  // let [a, b] = useState("남자 코트 추천");
  // a => state에 보관했던 자료 나옴
  // b => state 변경을 도와주는 함수
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  // let [logo, setLogo] = useState("ReactBlog");

  // Q. 변수가 아니라 왜 state 써야함?
  // 일반 변수는 갑자기 변경되면 html도 변경해줘야함(html 자동으로 반영안됨)
  // 변수와 다르게 state는 갑자기 변경되면 state쓰던 html은 자동 재렌더링 됨

  // Q. state 언제 써야함?
  // -> 변동시 자동으로 html 반영되게 만들고 싶으면 state 쓰셈

  // 숙제. 이렇게 만들어오세요. 근데 제목들을 state로 만들어오셈(완)

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // 따봉변경 => state 변경용 함수임

  // onClick={안엔 함수이름을 넣어야함} => 함수 만드는 문법을 바로 넣어도 상관없음( () => {} or function() { })

  // state 변경하는 법(등호로 변경금지)
  // state변경함수(새로운state)

  // 오늘 배운거
  // 1. onClick 쓰는 법 => onClick={} 안엔 함수 넣어야함
  // 2. state 변경하는 법(항상 state 변경함수 쓰세요) => state변경함수(새로운 state)

  // 숙제. 버튼 누르면 첫 글이 '여자코트 추천'으로 바뀌는 기능만들기(완)

  // 숙제2. 버튼 누르면 글제목 가나다순 정렬 기능 만들기(완)

  // useState()안에 값의 형식은 자유(모달창상태 표현만 가능하면 됩니다)
  let [modal, setModal] = useState(false); // 스위치
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        {/* 로고 글자도 state로 넣으면 좋을듯? (쓸데없어보임=> 맨날 바뀌지 않기때문) */}
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
          <button
            onClick={() => {
              let copiedArray = [...글제목];
              글제목변경(copiedArray.sort());
            }}
          >
            가나다순정렬
          </button>
          <button
            onClick={() => {
              //          이 변수에 저장되어있던건 화살표밖에 없음(글제목으로만 되어있을때)
              // let 글제목에 있던 화살표가 복사됨(copy에)
              // 변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴
              // console.log(copy == 글제목); (let copy = 글제목; 으로 할 경우)
              // copy는 기존 state와 달라지지 않았다고 생각
              // array, object는 reference data type이라서 그럼(더 찾아보기)
              // 이렇게 하면 화살표가 바뀜
              let copy = [...글제목];

              copy[0] = "여자코트 추천";
              글제목변경(copy);
            }}
          >
            글수정
          </button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal ? setModal(false) : setModal(true);
            // 제목 또 누르면 모달창 사라지게?
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {/* a => array안에 있던 데이터랬음 */}
      {/* i => 반복문이 돌때 마다 0부터 1씩 증가하는 정수 */}
      {/* 숙제.따봉 갯수 개별로 기록하기 */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal ? setModal(false) : setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  const new따봉 = [...따봉];
                  new따봉[i] += 1;
                  따봉변경(new따봉);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>

      {
        // 삼항연산자(ternary operator)
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal ? (
          <Modal
            color="skyblue"
            글제목변경={글제목변경}
            글제목={글제목}
            title={title}
          />
        ) : null // 기계
        // Q. 제목클릭시 모달창 띄우기? 클릭시 state만 조절하면 됩니다
        // props로 일반문자도 전송가능
      }
    </div>
  );
}

function Modal(props) {
  let [title, setTitle] = useState(0); // state를 자식에 만들면 부모 -> 자식 전송할 필요 없을듯 but, state가 Modal, App에서 필요하면 상위컴포넌트(App)에 만들어놔야함
  // (중요) state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트(생각 귀찮으면 그냥 App에서 만드셈)

  return (
    // 파란배경 모달창이 필요하다 => 다양한 색의 모달창이 필요하다(모달이란 컴포넌트를 또 만드는게 아니라)
    // => 파라미터문법은 다양한 기능을 하는 함수를 만들 떄 사용함(실은 props도 파라미터 문법일 뿐)

    // 숙제. 글수정 버튼을 누르면 첫 글제목이 '여자코트 추천'으로 바뀌어야함(완)

    // 지금 누른 글 제목이 모달창 안에 뜨게 하려면?(완)
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트 추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

