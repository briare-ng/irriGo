export interface LoginResponseDto {
  accessToken: string;
  user: {
    id : string
    username: string;
    email: string;
  };
}
