"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginBox({ session }) {
  console.log(session);
  return (
    <>
      {session == null ? (
        <>
          <button
            onClick={() => {
              signIn();
            }}
          >
            로그인
          </button>
        </>
      ) : (
        <>
          <span>{session.user.name}님 </span>
          <button
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </button>
        </>
      )}
    </>
  );
}
