import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.jpg";
// import { a, b } from "./data.js";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// 다른 파일에 있던 자료 가져오려면 import/export 문법 씁니다.
import Detail from "./routes/Detail.js";
import Event from "./routes/Event.js";
import Loading from "./routes/Loading.js";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);

  const fetchData = () => {
    // 로딩 중 UI 띄우기
    setLoading(true);

    if (count === 0) {
      setCount(count + 1);
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((결과) => {
          const newData = 결과.data;
          setShoes([...shoes, ...newData]);
          // 로딩 중 UI 숨기기
        })
        .catch(() => {
          console.log("Failed to fecth data");
          // 로딩 중 UI 숨기기
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (count === 1) {
      setCount(count + 1);
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((결과) => {
          const newData = 결과.data;
          setShoes([...shoes, ...newData]);
          // 로딩 중 UI 숨기기
        })
        .catch(() => {
          console.log("Failed to fecth data");
          // 로딩 중 UI 숨기기
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        {/* {a} */}
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 페이지 이동버튼은 */}
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

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
              {loading && <Loading />}
              {count <= 1 ? <button onClick={fetchData}>더보기</button> : ""}
            </>
          }
        />
        {/* /detail로 접속하면 상세페이지 보여주고 싶다 */}
        {/* (참고) URL 파라미터 만들때 
            - 여러개 가능 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* 상세페이지 100개 필요하면? url파라미터 문법 사용하기 */}
        {/* 페이지 여러개 만들고 싶으면 :URL파라미터 써도 됩니다. */}

        {/* Q. 페이지는 여러개인데 보이는 내용은 똑같은데요
          A. - 각각 다른 컴포넌트(페이지)를 100만개 만들던가
             - 하나의 컴포넌트로 각각 다른 내용을 보여주던가 => props활용하면 컴포넌트 1개로 각각 다른 내용 가능 */}

        {/* Nested Routes */}
        {/* /about/member 페이지도 만들고
            /about/location 페이지도 만들고  */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        {/* <Route path="/about/member" element={<About />} />
        <Route path="/about/location" element={<About />} /> */}

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        {/* 404 페이지는 */}
        <Route path="*" element={<div>없는페이지요</div>} />
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
  let navigate = useNavigate();

  let handleClick = () => {
    navigate(`/detail/${props.shoes.id}`);
  };
  return (
    <div
      className="col-md-4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      {/* 어디보여줄지 정하려면 <Outlet> */}
      <Outlet></Outlet>
    </div>
  );
}

// 응용 1. 버튼 2회 누를 때는 7, 8, 9번 상품 가져오려면? (완)
// => https://codingapple1.github.io/shop/data3.json 으로 요청하면 데이터 3개가 더 옴
// => 버튼 누른 횟수저장해두면 좋을 듯

// 응용 2. 버튼 3회 누를 때는 상품 더 없다고 알려주기
// => 없애거나(완) 누를 경우 더이상 상품이 없어요 라는 경고창 띄우기(완) => 조건문

// 응용 3. 버튼 누르면 '로딩중입니다' 글자 띄우기
