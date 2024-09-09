import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    console.log(요청.body);
    const db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(요청.body);

    응답.status(200).json({ message: "요청 수신 완료" });
  } else {
    응답.status(405).json({ message: "허용되지 않은 메서드" });
  }
}
