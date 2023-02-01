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

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
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
