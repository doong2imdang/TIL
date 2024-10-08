type CutZero = (x: string) => string;

const cutZero: CutZero = function (x) {
  if (x.slice(0, 1) === "0") {
    return x.slice(1, x.length);
  } else {
    return x;
  }
};

console.log(cutZero("123456"));

type RemoveDash = (x: string) => number;

const removeDash: RemoveDash = function (x) {
  if (x.indexOf("-") !== -1) {
    return parseInt(x.replace(/-/g, ""));
  } else {
    return parseInt(x);
  }
};

console.log(removeDash("12--23"));
