function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var 제일큰수 = 0;
    a.forEach(function (e) {
        if (제일큰수 < e) {
            제일큰수 = e;
        }
    });
    return 제일큰수;
}
console.log(함수(6, 8, 7, 2));
// function 함수(...a: number[]): number {
//   let 제일큰수 = Math.max(...a);
//   return 제일큰수;
// }
// console.log(함수(6, 3, 7, 2));
