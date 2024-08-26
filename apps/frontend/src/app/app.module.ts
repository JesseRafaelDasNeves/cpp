import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ClientListComponent } from './pages/client/client-list/client-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { OrderCreateComponent } from './pages/order/order-create/order-create.component';
registerLocaleData(localeBr);

@NgModule({
  declarations: [AppComponent, HeaderComponent, ClientListComponent, ProductListComponent, OrderListComponent, OrderCreateComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [DatePipe, {provide: LOCALE_ID, useValue: 'pt-br'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
