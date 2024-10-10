var data = '{"name" : "dog", "age" : 1 }';
function 함수(x) {
    return JSON.parse(x);
}
var result = 함수(data);
console.log(result);
