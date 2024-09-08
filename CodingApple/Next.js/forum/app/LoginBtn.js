"use client";

import { signIn } from "next-auth/react";

export default function LoginBox() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
