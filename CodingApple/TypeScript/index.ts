function 함수(...x: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  x.forEach((e) => {
    if (typeof e === "string") {
      result[0].push(e);
    } else {
      result[1].push(e);
    }
  });

  return result;
}

console.log(함수("b", 5, 6, 8, "a"));
