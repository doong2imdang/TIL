interface ShoppingCart {
  product: string;
  price: number;
}
// interface ShoppingCart {
//   card: boolean;
// }

interface NewShoppingCart extends ShoppingCart {
  card: boolean;
}

let 장바구니: NewShoppingCart[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: true },
];
