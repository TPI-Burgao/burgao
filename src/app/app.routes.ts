import { Routes } from '@angular/router';
import { Menu } from './menu/menu/menu';
import { Sobre } from './menu/sobre/sobre';
import { Home } from './core/home/home';


export const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'home', component: Home},
  {path: 'menu', component: Menu},
  {path: 'sobre', component: Sobre},
];