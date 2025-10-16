import { LoginDto } from './../models/loginDto';
import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';
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
    return //userStore.getValue();
  }

  emailAskForConfirm(email: string) {
    console.log('askforconfirm facade : ', email);
    const body: EmailToCheckDto = { email: email };
    // return this.authService.emailAskForConfirm(body);
  }

  signin(email: string, password: string) {
    const body: LoginDto = { email, password };
    // return this.authService.signin(body).pipe(
    //   tap((res) => {
    //     // this.storeUser(res);
    //   })
    // );
  }

  checkEmailToken(token: string) {
    // return this.authService.checkEmailToken(token);
  }

  signup(username: string, email: string, password: string) {
    const body: RegisterDto = { username, email, password };
    // return this.authService.signup(body).pipe(
      // tap((res) => {
        // this.storeUser(res);
      // })
    // );
  }

  // resetPwd() {}  // à déplacer dans la partie "User Account"
  // resetPwdconfirm() {}
  // deleteUser() {}

  logout() {
    // userStore.update((state) => ({
    //   ...state,
    //   user: null,
    // }));
  }
}
