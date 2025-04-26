export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireAt: string;
  refreshTokenExpireAt: string;
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  role: string;
}

export interface IUser {
    email: string;
    id: string;
    name: string;
    phoneNumber: string;
    role: string;
}