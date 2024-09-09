import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  console.log(session, 요청.query);

  if (요청.method === "DELETE") {
    const db = (await connectDB).db("forum");
    const postId = 요청.query.author;

    if (!session) {
      return 응답.status(401).json("로그인 필요");
    }

    if (session.user.role === "admin") {
      // Admin일 경우 게시글 ID로 삭제
      await db.collection("post").deleteOne({ author: postId });
      return 응답.status(200).json("게시글 삭제 완료");
    } else if (session.user.email === postId) {
      // 일반 사용자가 자신이 작성한 게시글만 삭제 가능
      await db.collection("post").deleteOne({ author: session.user.email });
      return 응답.status(200).json("게시글 삭제 완료");
    } else {
      return 응답.status(403).json("삭제 권한이 없습니다.");
    }
  } else {
    return 응답.status(405).json("허용되지 않은 메서드입니다.");
  }
}
