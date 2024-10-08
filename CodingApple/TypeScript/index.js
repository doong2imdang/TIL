var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                _this.str.push(i);
            }
            else {
                _this.num.push(i);
            }
        });
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
