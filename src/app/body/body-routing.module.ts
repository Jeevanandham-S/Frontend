import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageBodyComponent } from './user-page-body/user-page-body.component';
import { UtilizationBodyComponent } from './utilization-body/utilization-body.component';
import { BillSummaryPageBodyComponent } from './bill-summary-page-body/bill-summary-page-body.component';

const routes: Routes = [
  {
    path: "user",
    component: UserPageBodyComponent
  },
  {
    path: "utilization",
    component: UtilizationBodyComponent
  },
  {
    path: "summary",
    component: BillSummaryPageBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
