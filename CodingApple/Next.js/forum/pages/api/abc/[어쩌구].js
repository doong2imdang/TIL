import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  console.log(session, 요청.query);

  if (
    요청.method == "GET" &&
    session &&
    session.user.email == 요청.query.어쩌구
  ) {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ author: 요청.query.어쩌구 });
    응답.status(200).json("삭제완료");
  } else {
    응답.status(500).json("삭제할 수 있는 권한이 없습니다.");
  }
}
