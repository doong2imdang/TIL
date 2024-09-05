import React from "react";

export default function Signup() {
  return (
    <form action="/api/post/signup" method="POST">
      <label htmlFor="input-id">아이디</label>
      <input id="input-id" name="inputId" type="text" />
      <label htmlFor="input-pw">비밀번호</label>
      <input id="input-pw" name="inputPW" type="password" />
      <button type="submit">회원가입</button>
    </form>
  );
}
