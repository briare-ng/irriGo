import { AuthFacade } from '../auth/auth.facade';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatIcon, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private authFacade: AuthFacade, private router: Router) {}
  logOut() {
    this.authFacade.logout();
    this.router.navigate(['/login']);
  }
}
