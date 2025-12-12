import { Routes } from '@angular/router';
import { Menu } from './menu/menu/menu';
import { Sobre } from './menu/sobre/sobre';
import { Home } from './core/home/home';
import { ProfileComponent } from './menu/profile/profile';
import { ProdutosAdminPage } from './menu/produtos-admin/produtos-admin';
import { Auth } from './pages/auth/auth';
import { OrderHistory } from './pages/order-history/order-history';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'menu', component: Menu },
  { path: 'sobre', component: Sobre },
  { path: 'perfil', component: ProfileComponent },
  { path: 'admin/produtos', component: ProdutosAdminPage },
  { path: 'auth', component: Auth },

  {
    path: 'order-history',
    loadComponent: () =>
      import('./pages/order-history/order-history').then(m => m.OrderHistory)
  }
];
