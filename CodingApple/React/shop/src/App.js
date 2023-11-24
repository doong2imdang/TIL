import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.jpg";
// import { a, b } from "./data.js";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
// 다른 파일에 있던 자료 가져오려면 import/export 문법 씁니다.
import Detail from "./Detail.js";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        {/* {a} */}
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 페이지 이동버튼은 */}
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      {/* Q. 상품목록은 메인페이지에만 보여주고 싶은데? */}
      <Routes>
        {/* 메인페이지 */}
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              >
                {/* 상품 레이아웃 3개 만들기(Bootstrap으로 빠르게 할것임) => 조금 더 용량절약 가능(편의상 오리지널 Bootstrap 코드 이용했음) */}
              </div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        {/* /detail로 접속하면 상세페이지 보여주고 싶다 */}
        <Route path="/detail" element={<Detail />} />
        {/* /about으로 접속하면 또 다른 페이지 보여주고싶다 */}
        {/* <Route path="/about" element={<div>어바웃페이지임</div>} /> */}
      </Routes>

      {/* 대문 사진 넣기 */}
      {/* html애서 src폴더의 이미지를 넣을 땐 => import 작명 from '이미지경로'(상단에) 그리고 필요한 곳에 작명한거 쓰기 */}
    </div>
  );
}
// 이미지 불러오는 법 3
// public 폴더에도 이미지 보관 가능
// 리액트는 사이트발행 전에 html js css 파일을 압축함(bundling) => 효율적이니깐
// src파일안에있는 것들 압축되어버림 but public 폴더에 있던건 압축안됨
// html에서 public폴더 이미지 사용할 땐 그냥 /이미지경로 로 쓰면됨 예) /logo192.png
// but 주의점!! 나중에 발행할 때 codingapple.com에 발행시 별 문제 없음 => codingapple.com/어쩌구/ 에 발행시 문제 생김
// 그래서 권장 public 폴더 이미지 쓰는 권장방식
// <img src={process.env.PUBLIC_URL + '/img/logo.png'} />

// 숙제1. 상품목록 컴포넌트화
// 숙제2. 상품명 데이터바인딩도 잘 해오기
// 숙제3.반복적인 부분은 map 반복문 써보기

// 숙제1. 상세페이지 컴포넌트로 만들기(디자인은 강의하단)

export default App;

// <Product> 쓸 때마다 살짝 다른 내용 보여주고 싶으면 props 잘 쓰십쇼
function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}
