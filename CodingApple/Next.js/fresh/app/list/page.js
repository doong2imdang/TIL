export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, index) => {
        return (
          <div className="food" key={index}>
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
