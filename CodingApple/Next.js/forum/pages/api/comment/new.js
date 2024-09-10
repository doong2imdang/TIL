import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  console.log(session);

  if (요청.method === "POST") {
    요청.body = JSON.parse(요청.body);
    let 저장할거 = {
      content: 요청.body.comment,
      parent: new ObjectId(요청.body._id),
      author: session.user.email,
      name: session.user.name,
    };
    const db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(저장할거);

    응답.status(200).json({ message: "요청 수신 완료" });
  } else {
    응답.status(405).json({ message: "허용되지 않은 메서드" });
  }
}
