import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (module) => module.HomeModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'extract',
    loadChildren: () =>
      import('./pages/extract/extract.module').then(
        (module) => module.ExtractModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
