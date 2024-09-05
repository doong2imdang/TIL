import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  console.log(props.params.id);
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // await db.collection('post').updateOne({수정할 게시물 정보}, {$set :{title : '바보', content : '바보2'}})
  console.log(result);

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" defaultValue={result.title} />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
