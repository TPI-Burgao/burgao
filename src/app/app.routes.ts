import { Routes } from '@angular/router';
import { Menu } from './menu/menu/menu';
import { Sobre } from './menu/sobre/sobre';


export const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'menu', component: Menu},
  {path: 'sobre', component: Sobre}
];