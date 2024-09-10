import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  // console.log(session.user.email);

  if (session) {
    요청.body.author = session.user.email;
    요청.body.name = session.user.name;
  }
  console.log(요청.body);
  if (요청.method == "POST") {
    console.log(요청.body);
    if (요청.body.title == "") {
      return 응답.status(500).json("제목을 작성하세요.");
    }
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").insertOne(요청.body);
    // return 응답.status(200).json("저장완료");
    return 응답.status(200).redirect(302, "/list");
  }
}
