import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { UserPageHeaderComponent } from './user-page-header/user-page-header.component';
import { PaymentPageHeaderComponent } from './payment-page-header/payment-page-header.component';


@NgModule({
  declarations: [
    HomePageHeaderComponent,
    UserPageHeaderComponent,
    PaymentPageHeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports:[
    HomePageHeaderComponent,
    UserPageHeaderComponent,
    PaymentPageHeaderComponent
  ]
})
export class HeaderModule { }
