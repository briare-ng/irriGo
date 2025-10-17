import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { GetUserDto } from '../models/userDto';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';

export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  getUser(): Observable<GetUserDto[]> {
    return this.httpClient.get<GetUserDto[]>(`${this.BaseUrl}/me`);
  }

  login(loginUserDto: LoginDto) {
    return this.httpClient.post(`${this.BaseUrl}/auth/login`, loginUserDto);
  }

  register(registeDto: RegisterDto) {
    return this.httpClient.post(`${this.BaseUrl}/auth/register`, registeDto);
  }
}
