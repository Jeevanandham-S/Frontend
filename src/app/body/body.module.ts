import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { LoginPageBodyComponent } from './login-page-body/login-page-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RegsiterPageBodyComponent } from './regsiter-page-body/regsiter-page-body.component';
import { UserPageBodyComponent } from './user-page-body/user-page-body.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { UtilizationBodyComponent } from './utilization-body/utilization-body.component';
import { PaymentPageBodyComponent } from './payment-page-body/payment-page-body.component';
import { BillSummaryPageBodyComponent } from './bill-summary-page-body/bill-summary-page-body.component';
import { DataComponent } from './data/data.component';
import { CallComponent } from './call/call.component';
import { SMSComponent } from './sms/sms.component';
import { ViewPlansBodyComponent } from './view-plans-body/view-plans-body.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactUsBodyComponent } from './contact-us-body/contact-us-body.component';



@NgModule({
  declarations: [
    LoginPageBodyComponent,
    RegsiterPageBodyComponent,
    UserPageBodyComponent,
    UtilizationBodyComponent,
    PaymentPageBodyComponent,
    BillSummaryPageBodyComponent,
    DataComponent,
    CallComponent,
    SMSComponent,
    ViewPlansBodyComponent,
    ProfilePageComponent,
    ContactUsBodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    NgOtpInputModule,
    FormsModule,
    
  ],
  exports:[ProfilePageComponent]

})
export class BodyModule { }
