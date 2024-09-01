"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const [수량, 수량변경] = useState(0);

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, index) => {
        return (
          <div className="food" key={index}>
            <img src={`/food${index}.png`} className="food-img" />
            <h4>{item} $40</h4>
            <span> {수량} </span>
            <button
              onClick={() => {
                수량변경(수량 + 1);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
