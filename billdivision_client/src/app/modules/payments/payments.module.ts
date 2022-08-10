import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsReadComponent } from './containers/payments-read/payments-read.component';
import { PaymentsCreateComponent } from './containers/payments-create/payments-create.component';
import { PaymentsFacade } from './payments-facade';
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
import { DynamicDialogModule, DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
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
import {ListboxModule} from 'primeng/listbox';
import {OrderListModule} from 'primeng/orderlist';

@NgModule({
  declarations: [
    PaymentsReadComponent,
    PaymentsCreateComponent,
  ],
  imports: [
    ListboxModule,
    CommonModule,
    PaymentsRoutingModule,
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
    OrderListModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    MessageService,
    PaymentsFacade
  ]
})
export class PaymentsModule { }
