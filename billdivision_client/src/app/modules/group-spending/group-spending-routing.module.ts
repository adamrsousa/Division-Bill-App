import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupSpendingCreateComponent } from './containers/group-spending-create/group-spending-create.component';
import { GroupSpendingDetailsComponent } from './containers/group-spending-details/group-spending-details.component';
import { GroupSpendingEditComponent } from './containers/group-spending-edit/group-spending-edit.component';
import { GroupSpendingReadComponent } from './containers/group-spending-read/group-spending-read.component';

const routes: Routes = [
  {
    path: '',
    component: GroupSpendingReadComponent,
  },
  {
    path: 'create',
    component: GroupSpendingCreateComponent,
  },
  {
    path: 'edit/:id',
    component: GroupSpendingEditComponent,
  },
  {
    path: 'detail/:id',
    component: GroupSpendingDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupSpendingRoutingModule {}
