import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeePayslipComponent } from './components/employee-payslip/employee-payslip.component';
import { EmployeeLeaveComponent } from './components/employee-leave/employee-leave.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: CommonPageComponent
  },
  {
    path:'customerportal',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'sales-order',
    component: SalesOrderComponent
  },
  {
    path:'delivery-order',
    component: DeliveryListComponent
  },
  {
    path:'payments-aging',
    component: PaymentsAgingComponent
  },
  {
    path:'credit',
    component: CreditDebitComponent
  },
  {
    path:'debit',
    component: CreditMemoComponent
  },
  {
    path:'vendor-login',
    component: VendorLoginComponent
  },
  {
    path:'vendor-profile',
    component: VendorProfileComponent
  },
  {
    path:'vendor-rfq',
    component: VendorRfqComponent
  },
  {
    path:'vendor-po',
    component: VendorPoComponent
  },
  {
    path:'vendor-inv',
    component: VendorInvoiceComponent
  },
  {
    path:'vendor-payage',
    component: VendorPayageComponent
  },
  {
    path:'vendor-gr',
    component: VendorGrComponent
  },
  {
    path:'vendor-credit',
    component: VendorCreditComponent
  },
  {
    path:'vendor-debit',
    component: VendorDebitComponent
  },
  {
    path:'vendor-dashboard',
    component: VendorDashboardComponent
  },
  {
    path:'employee-login',
    component: EmployeeLoginComponent
  },
  {
    path:'employee-profile',
    component: EmployeeProfileComponent
  },
  {
    path:'employee-payslip',
    component: EmployeePayslipComponent
  },
  {
    path:'employee-leave',
    component: EmployeeLeaveComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
