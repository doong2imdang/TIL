class User {
  static skill = "js";
  intro = User.skill + " 전문가입니다.";
}

let 철수 = new User();
console.log(철수);

User.skill = "ts";
let 철수2 = new User();
console.log(철수2);
