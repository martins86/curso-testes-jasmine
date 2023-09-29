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
        path: '',
        loadChildren: () =>
          import('./../../pages/home/home.module').then(
            (module) => module.HomeModule
          ),
        canActivate: [AuthGuard],
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./../../pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
        canActivate: [AuthGuard]
      },
      {
        path: 'extract',
        loadChildren: () =>
          import('./../../pages/extract/extract.module').then(
            (module) => module.ExtractModule
          ),
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./../../pages/login/login.module').then(
            (module) => module.LoginModule
          ),
        canActivate: [AuthGuard]
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
