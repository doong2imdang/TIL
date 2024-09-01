// import Image from "next/image";
import Tomatoes from "/public/food0.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
