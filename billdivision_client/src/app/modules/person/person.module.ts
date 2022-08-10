import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';
import {
  DynamicDialogModule,
  DialogService,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FieldsetModule } from 'primeng/fieldset';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PanelModule } from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';
import { PersonRoutingModule } from './person-routing.module';
import { PersonCreateComponent } from './containers/person-create/person-create.component';
import { PersonDetailsComponent } from './containers/person-details/person-details.component';
import { PersonEditComponent } from './containers/person-edit/person-edit.component';
import { PersonReadComponent } from './containers/person-read/person-read.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonFacade } from './person-facade';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    PersonCreateComponent,
    PersonDetailsComponent,
    PersonEditComponent,
    PersonReadComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
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
    InputNumberModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    MessageService,
    PersonFacade
  ],
})
export class PersonModule {}
