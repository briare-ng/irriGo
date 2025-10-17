import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AuthenticationStore } from '../auth/auth.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIcon,
    NgOptimizedImage,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private authStore = inject(AuthenticationStore);
  user = this.authStore.user;
  logOut() {
    this.authStore.logout();
  }
  getUser(){
    console.log('user : ',this.authStore.user());
    console.log('token : ',this.authStore.token());
  }
}
