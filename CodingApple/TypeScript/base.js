// JavaScript 경우 //
5 - "3"; // 2
// JavaScript는 Dynamic Typing 가능
// 원래는 숫자 - 숫자만 가능하지만 JS가 알아서 숫자로 바꿔줌
// (프로젝트 크면 단점일 뿐)
// 코드 길게 짤 땐 자유도 & 유연성은 오히려 쓰레기임

// TypeScript 경우 //
5 - "3"; // TS error : "문자랑 숫자빼는거 이상한데요 빨리 수정하셈"
// TypeScript는 타입 엄격히 검사해줌
// 나는 JavaScript로 충분한 것 같소 나는 똑똑하다 (협업이나 기존코드 뜯어고칠 생각 해보셈)

// TypeScript는 에러메시지 퀄리티가 훌륭함 -> JS는 추상적이고 추적어려운 에러일 경우가 많음
// 예를 들어, Type 'string' is not assignable to type 'number'. -> TS 에러 : '숫자넣어야지 왜 문자 넣음'
// Property 'apend' does not exist on type '{append : number;};. Did you mean 'append'? -> TS 에러: 'apend 아니고 append임'
// TypeScript는 언어보다는 그냥 코드 에디터 부가기능 역할로 봐도 될듯

// TypeScript 설치는 (여기선 그냥 static 웹페이지 개발시를 가정할 것임)
// React / Vue 이용시 TS 설치는 -> npm install --save typescript @types/node @types/react @types/react-dom @types/jest 를 터미널에 입력
// 1. nodejs 설치 (최신버전 제발)
// 2. VScode 에디터 준비
// 3. 터미널 오픈 후 npm install -g typescript
// 4. 코드 짤 폴더 만들고 에디터로 폴더 오픈
// 5. 어쩌구.ts 파일 생성 후 코드짜셈
// 6. tsconfig.json 생성 후 내용 작성 (하단)
// {
//   "compilerOptions": {
//     "target": "ES5",
//     "module": "CommonJS"
//   }
// }

// 터미널 켜서 tsc-w 입력해두면 자동변환됨
