import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { GetUserDto } from '../models/userDto';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';
import { LoginResponseDto } from '../models/loginResponseDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  getUser(): Observable<GetUserDto> {
    return this.httpClient.get<GetUserDto>(`${this.BaseUrl}/me`);
  }

  login(loginUserDto: LoginDto) : Observable<LoginResponseDto> {
    console.log('service login');
    
    return this.httpClient.post<LoginResponseDto>(`${this.BaseUrl}/auth/login`, loginUserDto);
  }

  register(registeDto: RegisterDto): Observable<GetUserDto> {
    return this.httpClient.post<GetUserDto>(`${this.BaseUrl}/auth/register`, registeDto);
  }
}
