import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail(props) {
  /// useEffect 정리시간 ///
  useEffect(() => {}); // 1. 재렌더링마다 코드 실행하고 싶으면
  useEffect(() => {}, []); // 2. mount 시 1회 코드실행하고 싶으면
  useEffect(() => {
    return () => {
      // 3. unmount시 1회 코드 실행하고 싶으면
    };
  }, []);

  // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return () => {}
  // 5. 특정 state 변경시에만 실행하려면 [state명] <= defendency

  // 오늘의 숙제. <input>에 숫자말고 다른거 입력하면 그러지 말라고 안내메시지 띄우기(경고: 숫자만 입력하세요 => 굳이 useEffect 사용해보기)

  /// 컴포넌트에 갈고리 다는 법 ///

  // 오늘의 숙제. Detail 페이지 방문 후 2초 지나면 <div> 숨기기(완)

  let [alert, setAlert] = useState(true);
  // (동적 UI 만들기)
  // - UI 상태 저장할 state 만들고
  // - state에 따라서 UI가 어떻게 보일지 작성

  useEffect(() => {
    // mount, update 시 여기 코드 실행됨
    // 두번 출력되는 이유는 디버깅을 위해서 그렇게 동작함(실제 사이트에서는 한번 동작하게 될거임) => 없애고 싶으면 index.js에 가서 <React.StrictMode> 없애거나 그러셈
    // console.log("안녕");
    let a = setTimeout(() => {
      // 실행할 코드
      setAlert(false);
    }, 2000);
    console.log(2);

    // 옵션 => useEffect 동작 전에 실행되는 return () => {}
    // 별명 : clean up function
    // 기존 코드 치우는 거 여기에 많이 작성함
    // (참고) clean up function은 mount시 실행안됨 / unmount시 실행됨
    // 예) 대충 서버로 데이터 요청하는 코드(2초 소요) 그 사이에 계속 요청이 생길 수있어 버그가 생겨버릴 위험이 있으니 return 함수 안에 기존 데이터 요청은 제거해주세요~ 라는 코드 작성하는 것
    return () => {
      // 코드~~~
      // Q. 그래서 타이머 제거는 어떻게 함?
      console.log(1); // 얘가 console.log(2)보다 먼저 출력됨
      clearTimeout(a); // 타이머 제거해주는 함수임
    };
  });
  // useEffect 실행조건 넣을 수 있는 곳은 []
  // [defendency] 안에 예를 들어 count라고 되어있으면 count가 변할때마다 실행해줌
  // [] => defendency가 없다면 mount에만 실행됨(update될때 실행안함) => 컴포넌트 mount시 1회만 실행하고 싶으면 이렇게

  // Q. useEffect 바깥에 넣어도 똑같은데? -> 들킴
  /// useEffect 쓰는 이유 ///

  // useEffect 안에 있는 코드는 html 렌더링 후에 동작합니다. => 좀더 html를 먼저 보여줘 사용자에게 빠른 느낌을 줄 수있음
  // useEffect 안에 적는 코드들은 - 어려운 연산 / - 서버에서 데이터 가져오는 작업 / - 타이머 장착하는 거

  // Q. 왜 이름이 Effect 어쩌구임?
  // Side Effect : 함수의 핵심기능과 상관없는 부가기능 => 그거에서 따온 함수명임
  // useEffect(() => {
  //  Side Effect 코드들 보관함임
  // })

  let [count, setCount] = useState(0);

  // Q. Detail안에 shoes라는 state 더 만들면 편할듯?
  // let [shoes] = useState();
  // but, 수정사항이 생기면 두곳을 수정해야하기때문에 보통 이렇게 쓰지 않는다.

  // 유저가 URL 파라미터에 입력한거 가져오려면 useParams()
  // 유저가 :id 자리에 적은거 가져와줌

  // URL 파라미터에 이상한거 입력하면?
  // 막을 수는 없고 if문으로 처리하면됨

  // 오늘의 응용 1. /detail/0 접속 시 0번째 상품말고 상품 id가 0인걸 보여주면 좋을듯(data.js에서 id 가져오면 될듯) => 왜냐? 만약에 home에서 가나다 순으로 정렬이 되면 Grey Yordan이 0번째가 되어버려서 순서가 꼬일 수 있음
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => {
    return x.id === parseInt(id);
  });
  console.log(찾은상품.id);

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-t mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg === "blue" ? "white" : "black")};
//   /* (참고1) 당연히 간단한 프로그래밍 가능 */
//   padding: 10px;
// `;

// (참고2) 기존 스타일 복사 가능
// let newBtn = styled.button(YellowBtn)`
//   /* 또 스타일링 가능 */
// `;

// Q. 오렌지색 버튼이 필요하면? - props 문법 쓰면 됩니다.
// props로 컴포넌트 재활용 가능
// let OrangeBtn = styled.button`
//   background: orange;
//   color: black;
//   padding: 10px;
// `;  => 이거 아니야~

let Box = styled.div`
  background: grey;
  padding: 20px;
`;

/// styled-components 장점 ///

// 1. CSS 파일 안열어도 됩니다.
// 2. 스타일이 다른 js파일로 오염되지 않음
//  => 오염 방지하려면 컴포넌트.module.css(예) App.module.css 라고 하면 App.js에 종속이 되도록 코드를 작성할 수 있음)
// 3. 페이지 로딩시간 단축

/// styled-components 단점 ///

// 1. JS 파일 매우 복잡해짐
// 2. 중복스타일은 컴포넌트간 import 할텐데 css와 다를 바가 없군
// 3. 협업시 CSS 담당의 숙련도 이슈
