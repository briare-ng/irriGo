import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../auth.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge, tap, catchError, throwError } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);
  user = { name: 'ugo', email: 'ugo@devid.com', password: 'ugo@Devid25' };
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');
  formErrorMessage = signal('');
  formSubmitComplete = signal('');
  hide = signal(true);

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  updateErrorMessage() {
    if (this.loginForm.invalid) {
      if (this.email.hasError('required')) {
        this.emailErrorMessage.set('Entrez votre Email');
      } else if (this.email.hasError('pattern')) {
        this.emailErrorMessage.set("Format d'email invalide");
      }
      if (this.password.hasError('required')) {
        this.passwordErrorMessage.set('Entrez un password');
      }
    } else {
      this.formSubmitComplete.set('');
      this.passwordErrorMessage.set('');
      this.emailErrorMessage.set('');
      this.formErrorMessage.set('');
    }
  }

  hideEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login() {
    if (this.loginForm.valid) {
      // this.authFacade
      //   .signin(this.email.value, this.password.value)
      //   .pipe(
      //     tap((res) => {
      //       this.formSubmitComplete.set(`${res.user.username} you're logged !`); // set timeout or notify with snackabar
      //       this.formErrorMessage.set('');
      //       console.log(res);
      //       this.router.navigate(['/']);
      //     }),
      //     catchError((err) => {
      //       this.formErrorMessage.set(
      //         'Identifiants non valide, veuillez réessayer'
      //       );
      //       return throwError(() => err);
      //     })
      //   )
      //   .subscribe();
if (
        this.password.value === this.user.password &&
        this.email.value === this.user.email
      ) {
        console.log('logged');
        this.router.navigate(['/']);
      } else { console.log("user doesn't exist");
      }
    } else {
      this.formErrorMessage.set('Formulaire invalide');
    }
  }
}
