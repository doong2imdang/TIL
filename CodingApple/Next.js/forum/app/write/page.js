import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="p-20">
      <h4>글작성</h4>
      {session ? (
        <>
          <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목" />
            <input name="content" placeholder="글내용" />
            <button type="submit">버튼</button>
          </form>
        </>
      ) : (
        <>
          <div>로그인하세요.</div>
        </>
      )}
    </div>
  );
}
