import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),
  },

  {
    path: '**',
    redirectTo: 'country',
  },
];
