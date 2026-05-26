export type ResponseAdminLogin = {
  accessToken: string;
  role: string;
  name: string;
};

export type ResponseMyInfo = {
  userId: number;
  name: string;
  email: string;
  role: string;
};
