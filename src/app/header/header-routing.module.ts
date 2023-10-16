import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageBodyComponent } from '../body/login-page-body/login-page-body.component';
import { RegsiterPageBodyComponent } from '../body/regsiter-page-body/regsiter-page-body.component';
import { PaymentPageBodyComponent } from '../body/payment-page-body/payment-page-body.component';
import { AddUserComponent } from '../admin/add-user/add-user.component';
import { CallComponent } from '../body/call/call.component';
import { DataComponent } from '../body/data/data.component';
import { SMSComponent } from '../body/sms/sms.component';

const routes: Routes = [
  {
    path: "",
    component:LoginPageBodyComponent
  },
  {
    path: "login",
    component: LoginPageBodyComponent
  },
  {
    path: "register",
    component: RegsiterPageBodyComponent
  },
  {
    path: "payment",
    component: PaymentPageBodyComponent
  },
  {
    path: "admin",
    component: AddUserComponent
  },
  {
    path: "call",
    component: CallComponent
  },
  {
    path: "data",
    component: DataComponent
  },
  {
    path: "sms",
    component: SMSComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
