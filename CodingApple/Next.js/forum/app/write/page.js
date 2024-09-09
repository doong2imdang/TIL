export default function Write() {
  // if(유저세션출력해서 아무것도 없으면)  {
  //   return (
  //     <div>
  //       로그인하세요
  //     </div>
  //   )
  // }

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
