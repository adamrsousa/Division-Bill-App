import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AutoCompleteModule,
    ToolbarModule,
    CardModule,
    TableModule,
    ButtonModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: 'DINNER_BILL_API_ENDPOINT',
      useValue: environment.BASE_API_URL,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
