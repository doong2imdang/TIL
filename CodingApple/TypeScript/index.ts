import { ObjFunction } from "./a";

let 함수: ObjFunction = function (a) {
  console.log(a);
};

함수({ abc: "안뇽" });
