"use client";

import Link from "next/link";
// import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return (
    <div>
      {JSON.parse(result).map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={"/detail/" + a["_id"]}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={"/edit/" + a["_id"]}>✏️</Link>

            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: a._id,
                })
                  .then((response) => {
                    if (response.status == 200) {
                      return response.json();
                    } else {
                      // 서버가 에러코드 전송 시 실행할 코드
                    }
                  })
                  .then((result) => {
                    // 성공시 실행할 코드
                  })
                  .catch((error) => {
                    // 인터넷문제로 실패시 실행할 코드
                    console.log(error);
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
