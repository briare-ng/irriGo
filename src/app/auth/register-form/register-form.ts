import { AuthFacade } from '../auth.facade';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-form',
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
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private router = inject(Router);
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W).{1,}$'),
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('', [Validators.required]),
  });
  usernameErrorMessage = signal('');
  emailErrorMessage = signal('');
  pwdErrorMessage = signal('');

  pwdConfirmErrorMessage = signal('');
  formErrorMessage = signal('');
  formSubmitComplete = signal('');
  emailValidatedMsg = signal('');
  isEmailValidated = signal(false);
  hidePwd = signal(true);
  hideConfirmPwd = signal(true);
  user = { name: 'ugo', email: 'ugo@devid.com', password: 'ugo@Devid25' };

  // isPasswordConfirm = new FormControl('12', Validators.minLength(5));

  constructor(private route: ActivatedRoute, private authFacade: AuthFacade) {}

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get username() {
    return this.registerForm.get('username') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm') as FormControl;
  }
  hidePwdEvent(event: MouseEvent) {
    this.hidePwd.set(!this.hidePwd());
    event.stopPropagation();
  }
  hideConfirmPwdEvent(event: MouseEvent) {
    this.hideConfirmPwd.set(!this.hideConfirmPwd());
    event.stopPropagation();
  }

  submitRegister() {
    console.log('errors : ', this.registerForm.errors);

    if (this.registerForm.valid) {
      console.log('valid');
      // this.authFacade
      //   .signup(this.username.value, this.email.value, this.password.value)
      //   .pipe(
      //     tap((res) => {
      //       this.formSubmitComplete.set(`${res.user.username} you're logged !`);
      //       this.formErrorMessage.set('');
      //       console.log(res);
      //     }),
      //     catchError((err) => {
      //       this.formErrorMessage.set(
      //         'Un problème est survenu, veuillez réessayer'
      //       );
      //       return throwError(() => err);
      //     })
      //   )
      //   .subscribe();
      if (
        this.password.value === this.user.password &&
        this.username.value === this.user.name &&
        this.email.value === this.user.email
      ) {
        console.log('inscrit');
        this.router.navigate(['/']); // => navigate to setting a plan
      }
    } else {
      // this.updateErrorMessage();
      this.formErrorMessage.set('une erreur est survenue, veuillez réessayer');
      console.log('form-invalid');
    }
  }
}
