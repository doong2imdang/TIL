import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const client = await connectDB;
  const db = client.db("forum");
  let contents = await db.collection("signup").find().toArray();

  const isExistingUser = contents.some(
    (item) => item.inputId === 요청.body.inputId
  );

  if (isExistingUser) {
    console.log("이미 존재하는 아이디입니다.");
    return 응답.status(500).json("이미 존재하는 아이디입니다.");
  } else {
    let result = await db.collection("signup").insertOne(요청.body);
    console.log("회원가입 성공!");
    return 응답.status(200).json("회원가입 성공!");
  }
}
