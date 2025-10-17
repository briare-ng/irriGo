import { withEntities } from '@ngrx/signals/entities';
import {
  withDevtools,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { GetUserDto } from '../models/userDto';
import { AuthService } from './auth.service';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';

export interface AuthenticationState {
  user: GetUserDto | null;
  token: string | null;
}

const initialState: AuthenticationState = {
  user: null,
  token: null,
};

export const AuthenticationStore = signalStore(
  { providedIn: 'root' },
  withState<AuthenticationState>(initialState),
  withMethods(
    (store, authService = inject(AuthService), router = inject(Router)) => ({
      authenticate(loginUser: LoginDto) {
        return authService.login(loginUser).pipe(
          tap((auth) => {
            console.log('auth : ', auth);
            patchState(store, {
              user: auth.user,
              token: auth.accessToken,
            });
          })
        );
      },
      register(registerData: RegisterDto) {
        const loginData = {
          email: registerData.email,
          password: registerData.password,
        };
        return authService.register(registerData).pipe(
          switchMap(() => authService.login(loginData)),
          tap((auth) => {
            console.log('auth : ', auth);
            patchState(store, {
              user: auth.user,
              token: auth.accessToken,
            });
          })
        );
      },
      logout(): void {
        patchState(store, initialState);
        void router.navigateByUrl('/login');
      },
    })
  ),
  withStorageSync('user'),
//   withDevtools('irriGo')
);
