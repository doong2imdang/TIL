type Info = { user: string; comment: number[]; admin: boolean };

function 함수({ user, comment, admin }: Info): void {
  console.log(user, comment, admin);
}

함수({ user: "kim", comment: [3, 5, 4], admin: false });
