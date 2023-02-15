import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { SalesOrderComponent } from './components/sales-order/sales-order.component';
import { DeliveryListComponent } from './components/delivery-list/delivery-list.component';
import { PaymentsAgingComponent } from './components/payments-aging/payments-aging.component';
import { CreditDebitComponent } from './components/credit-debit/credit-debit.component';
import { CreditMemoComponent } from './components/credit-memo/credit-memo.component';
import { CommonPageComponent } from './components/common-page/common-page.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { VendorProfileComponent } from './components/vendor-profile/vendor-profile.component';
import { VendorRfqComponent } from './components/vendor-rfq/vendor-rfq.component';
import { VendorPoComponent } from './components/vendor-po/vendor-po.component';
import { VendorInvoiceComponent } from './components/vendor-invoice/vendor-invoice.component';
import { VendorPayageComponent } from './components/vendor-payage/vendor-payage.component';
import { VendorGrComponent } from './components/vendor-gr/vendor-gr.component';
import { VendorCreditComponent } from './components/vendor-credit/vendor-credit.component';
import { VendorDebitComponent } from './components/vendor-debit/vendor-debit.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    MainComponent,
    SalesOrderComponent,
    DeliveryListComponent,
    PaymentsAgingComponent,
    CreditDebitComponent,
    CreditMemoComponent,
    CommonPageComponent,
    VendorLoginComponent,
    VendorProfileComponent,
    VendorRfqComponent,
    VendorPoComponent,
    VendorInvoiceComponent,
    VendorPayageComponent,
    VendorGrComponent,
    VendorCreditComponent,
    VendorDebitComponent,
    VendorDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
