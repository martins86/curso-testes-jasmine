import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../core/guard/auth.guard';

import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./../../pages/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./../../pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'extract',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./../../pages/extract/extract.module').then(
            (module) => module.ExtractModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./../../pages/login/login.module').then(
            (module) => module.LoginModule
          ),
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./../../pages/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
