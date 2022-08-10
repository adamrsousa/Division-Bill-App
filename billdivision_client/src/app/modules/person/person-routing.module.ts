import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from './containers/person-create/person-create.component';
import { PersonDetailsComponent } from './containers/person-details/person-details.component';
import { PersonEditComponent } from './containers/person-edit/person-edit.component';
import { PersonReadComponent } from './containers/person-read/person-read.component';

const routes: Routes = [
  {
    path: '',
    component: PersonReadComponent,
  },
  {
    path: 'create',
    component: PersonCreateComponent,
  },
  {
    path: 'edit/:id',
    component: PersonEditComponent,
  },
  {
    path: 'detail/:id',
    component: PersonDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
