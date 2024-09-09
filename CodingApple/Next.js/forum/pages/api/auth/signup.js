import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method !== "POST") {
    return 응답.status(405).json({ message: "지원되지 않는 요청 방식입니다." });
  }

  const { name, email, password } = 요청.body;

  if (!name || !email || !password) {
    return 응답
      .status(400)
      .json({ message: "이름, 이메일, 비밀번호를 모두 작성해주세요." });
  }

  let db = (await connectDB).db("forum");
  let result = await db.collection("user_cred").find({ email }).toArray();

  if (result.length > 0) {
    return 응답.status(409).json({ message: "이미 존재하는 이메일입니다." });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const userData = { name, email, password: hash, role: "normal" };

    await db.collection("user_cred").insertOne(userData);
    return 응답.status(200).json({ message: "가입성공" });
  } catch (error) {
    console.error(error);
    return 응답.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
}
