function 함수(
  월소득: number,
  집보유여부: boolean,
  매력: string
): string | void {
  let 월소득점수: number = 월소득;
  let 집보유점수: number = 집보유여부 ? 500 : 0;
  let 매력점수: number = 매력 === "상" ? 100 : 0;

  if (월소득점수 + 집보유점수 + 매력점수 >= 600) {
    return "결혼가능";
  }
}

console.log(함수(700, false, "중"));
