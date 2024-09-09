"use client";

import Link from "next/link";
// import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  console.log(result);
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
              onClick={async (e) => {
                try {
                  const response = await fetch(
                    `/api/post/delete?author=${a.author}`,
                    {
                      method: "DELETE",
                    }
                  );

                  if (response.status === 200) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  } else {
                    console.error("서버 에러:", await response.text());
                  }
                } catch (error) {
                  console.error("네트워크 오류:", error);
                }

                // fetch(`api/abc/${a.author}`);
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
