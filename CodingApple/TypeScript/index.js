function 함수(a) {
    var array = [];
    a.forEach(function (e) {
        if (typeof e === "string") {
            array.push(parseInt(e));
        }
        else {
            array.push(e);
        }
    });
    return array;
}
console.log(함수(["1", 2, "3"]));
