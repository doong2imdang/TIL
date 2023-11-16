import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대문 사진 넣기 */}
      {/* html애서 src폴더의 이미지를 넣을 땐 => import 작명 from '이미지경로'(상단에) 그리고 필요한 곳에 작명한거 쓰기 */}
      <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}>
        {/* 상품 레이아웃 3개 만들기(Bootstrap으로 빠르게 할것임) => 조금 더 용량절약 가능(편의상 오리지널 Bootstrap 코드 이용했음) */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* 외부에 호스팅해둔 이미지라면 이미지 절대주소만 넣으면 됩니다 */}
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
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

export default App;

