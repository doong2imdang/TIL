import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    console.log(
      요청.body.name.length,
      요청.body.email.length,
      요청.body.password.length
    );

    if (요청.body.name && 요청.body.email && 요청.body.password) {
      let hash = await bcrypt.hash(요청.body.password, 10);
      console.log(hash);

      요청.body.password = hash;
      let db = (await connectDB).db("forum");
      await db.collection("user_cred").insertOne(요청.body);
      응답.status(200).json("가입성공");
    } else {
      응답.status(500).json("이름, 이메일, 비밀번호를 모두 작성해주세요.");
    }
  }
}
