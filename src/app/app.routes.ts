import { Routes } from '@angular/router';
import { Menu } from './menu/menu/menu';
import { Sobre } from './menu/sobre/sobre';
import { Home } from './core/home/home';
import { ProfileComponent } from './menu/profile/profile';


export const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'home', component: Home},
  {path: 'menu', component: Menu},
  {path: 'sobre', component: Sobre},
  {path: 'perfil', component: ProfileComponent},
];