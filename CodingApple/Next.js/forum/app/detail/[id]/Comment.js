"use client";

import { useEffect, useState } from "react";

export default function Comment({ result }) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  const fetchComment = () => {
    fetch(`/api/comment/list?id=${result._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <div>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => (
            <p key={i}>
              <span>{a.name} </span>
              {a.content}
            </p>
          ))
        : "댓글없음"}
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",

            body: JSON.stringify({
              comment: comment,
              _id: result._id,
            }),
          })
            .then((response) => response.json())
            .then((newComment) => {
              setData((prevData) => [...prevData, newComment]);
              setComment("");
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
