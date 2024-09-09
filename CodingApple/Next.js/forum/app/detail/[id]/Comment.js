"use client";

import { useState } from "react";

export default function Comment({ result }) {
  let [comment, setComment] = useState("");
  console.log(result);
  return (
    <div>
      <div>댓글목록 보여줄 부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: comment,
              author: result.author,
              parent: result._id,
            }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
