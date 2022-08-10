import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./modules/person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'group-spending',
    loadChildren: () =>
      import('./modules/group-spending/group-spending.module').then(
        (m) => m.GroupSpendingModule
      ),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./modules/payments/payments.module').then(
        (m) => m.PaymentsModule
      ),
  },
  {
    path: '**',
    redirectTo: '/404',
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: `${environment.FRONT_URL}`,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
