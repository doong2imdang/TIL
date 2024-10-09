var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + " 전문가입니다.";
    }
    User.skill = "js";
    return User;
}());
var 철수 = new User();
console.log(철수);
User.skill = "ts";
var 철수2 = new User();
console.log(철수2);
