"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={"/detail/" + result[i]["_id"]}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]["_id"]}>✏️</Link>

            <span
              onClick={() => {
                fetch("/api/test", {
                  method: "POST",
                }).then(() => {
                  console.log(123123);
                });
              }}
            >
              🗑️
            </span>
            {/* <DetailLink /> */}
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
