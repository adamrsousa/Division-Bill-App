import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsCreateComponent } from './containers/payments-create/payments-create.component';
import { PaymentsReadComponent } from './containers/payments-read/payments-read.component';

const routes: Routes = [
{
  path: '',
  component: PaymentsReadComponent,
},
{
  path: 'create',
  component: PaymentsCreateComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
