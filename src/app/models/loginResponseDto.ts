export interface LoginResponseDto {
  token: string;
  user: {
    id : number
    username: string;
    email: string;
  };
}
