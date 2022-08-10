import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupSpendingRoutingModule } from './group-spending-routing.module';
import { GroupSpendingCreateComponent } from './containers/group-spending-create/group-spending-create.component';
import { GroupSpendingReadComponent } from './containers/group-spending-read/group-spending-read.component';
import { GroupSpendingDetailsComponent } from './containers/group-spending-details/group-spending-details.component';
import { GroupSpendingEditComponent } from './containers/group-spending-edit/group-spending-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {
  DynamicDialogModule,
  DialogService,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeModule } from 'primeng/tree';
import { GroupSpendingFacade } from './group-spending-facade';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    GroupSpendingCreateComponent,
    GroupSpendingReadComponent,
    GroupSpendingDetailsComponent,
    GroupSpendingEditComponent,
  ],
  imports: [
    CommonModule,
    GroupSpendingRoutingModule,
    HttpClientModule,
    SelectButtonModule,
    OrganizationChartModule,
    AutoCompleteModule,
    ToolbarModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TreeModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    BreadcrumbModule,
    InputSwitchModule,
    FieldsetModule,
    ContextMenuModule,
    PanelModule,
    InputMaskModule,
    MultiSelectModule,
    InputNumberModule,
    CheckboxModule,
  ],
  providers: [
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    MessageService,
    GroupSpendingFacade,
  ],
})
export class GroupSpendingModule {}
