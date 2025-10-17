import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register-form/register-form').then((c) => c.RegisterForm),
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home').then((c) => c.Home),
        children: [],
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'create-plan',
        loadComponent: () =>
          import('./create-form/create-form').then((c) => c.CreateForm),
        children: [],
      },
    ],
  },
];
