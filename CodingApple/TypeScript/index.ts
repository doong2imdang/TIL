type Shape = {
  color?: string;
  size: number;
  readonly position: number[];
};

let myShape: Shape = {
  size: 10,
  position: [10, 20],
};
