var cutZero = function (x) {
    if (x.slice(0, 1) === "0") {
        return x.slice(1, x.length);
    }
    else {
        return x;
    }
};
console.log(cutZero("123456"));
var removeDash = function (x) {
    if (x.indexOf("-") !== -1) {
        return parseInt(x.replace(/-/g, ""));
    }
    else {
        return parseInt(x);
    }
};
console.log(removeDash("12--23"));
var 만들함수 = function (x, func1, func2) {
    var result = func1(x);
    var result2 = func2(result);
    console.log(result2);
};
만들함수("010-1111-2222", cutZero, removeDash);
