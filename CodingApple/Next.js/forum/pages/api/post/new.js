import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
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
