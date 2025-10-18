import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { GetUserDto } from './models/userDto';
import { LoginDto } from './models/loginDto';
import { RegisterDto } from './models/registerDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  getUsers(): Observable<GetUserDto[]> {
    return this.httpClient.get<GetUserDto[]>(`${this.BaseUrl}/me`);
  }

  login(loginUserDto: LoginDto) {
    return this.httpClient.post(
      `${this.BaseUrl}/api/v1/auth/login`,
      loginUserDto
    );
  }

  register(registerDto: RegisterDto) {
    return this.httpClient.post(
      `${this.BaseUrl}/api/v1/auth/register`,
      registerDto
    );
  }
}
