import { LoginDto } from './../models/loginDto';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { EmailToCheckDto } from '../models/emailToCheckDto';
import { UserStore } from '../models/UserStore';
import { RegisterDto } from '../models/registerDto';
import { tap } from 'rxjs';
import { LoginResponseDto } from '../models/loginResponseDto';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor() {}

  getAuthStore() {
    return; //userStore.getValue();
  }

  signin(email: string, password: string) {
    const body: LoginDto = { email, password };
    // return this.authService.signin(body).pipe(
    //   tap((res) => {
    //     // this.storeUser(res);
    //   })
    // );
  }

  signup(username: string, email: string, password: string) {
    //const body: RegisterDto = { username, email, password };
    // return this.authService.signup(body).pipe(
    // tap((res) => {
    // this.storeUser(res);
    // })
    // );
  }

  logout() {
    // userStore.update((state) => ({
    //   ...state,
    //   user: null,
    // }));
  }
}
