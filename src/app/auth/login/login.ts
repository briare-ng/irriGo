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
import { AuthenticationStore } from '../auth.store';

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
  private authStore = inject(AuthenticationStore);
  private router = inject(Router);
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
      this.authStore
        .authenticate({
          email: this.email.value,
          password: this.password.value,
        })
        .subscribe({
          next: () => {
            console.log('logged');
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.log('not logged', err);
            this.formErrorMessage.set('Erreur de connexion');
          },
        });
    } else {
      this.formErrorMessage.set('Formulaire invalide');
    }
  }
}
