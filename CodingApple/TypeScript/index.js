var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog"];
// function 함수(...x: [number, string]) {
//   console.log(x);
// }
function 함수(a, b) {
    console.log([a, b]);
}
함수(111, "222");
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
