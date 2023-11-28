import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  // Q. Detail안에 shoes라는 state 더 만들면 편할듯?
  // let [shoes] = useState();
  // but, 수정사항이 생기면 두곳을 수정해야하기때문에 보통 이렇게 쓰지 않는다.

  // 유저가 URL 파라미터에 입력한거 가져오려면 useParams()
  // 유저가 :id 자리에 적은거 가져와줌

  // URL 파라미터에 이상한거 입력하면?
  // 막을 수는 없고 if문으로 처리하면됨

  // 오늘의 응용 1. /detail/0 접속 시 0번째 상품말고 상품 id가 0인걸 보여주면 좋을듯(data.js에서 id 가져오면 될듯) => 왜냐? 만약에 home에서 가나다 순으로 정렬이 되면 Grey Yordan이 0번째가 되어버려서 순서가 꼬일 수 있음
  let { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-t mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
