function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = [[], []];
    x.forEach(function (e) {
        if (typeof e === "string") {
            result[0].push(e);
        }
        else {
            result[1].push(e);
        }
    });
    return result;
}
console.log(함수("b", 5, 6, 8, "a"));
