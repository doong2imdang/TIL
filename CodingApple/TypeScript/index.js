var User = /** @class */ (function () {
    function User(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    User.prototype.이름변경함수 = function () {
        this.familyName = "park";
    };
    return User;
}());
var 유저1 = new User("민수");
유저1.이름변경함수();
console.log(유저1);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var 자식 = new Person("kim");
console.log(자식);
