type User = {
  name: string;
  phone: number;
  email: string;
};

type Status = {
  status: boolean;
};

type UserInfo = User & Status;

let 회원가입정보: UserInfo = {
  name: "kim",
  phone: 123,
  email: "a123@asdf.com",
  status: true,
};
