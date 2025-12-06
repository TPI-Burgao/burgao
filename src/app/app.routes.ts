import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent}
];