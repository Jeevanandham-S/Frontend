import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

const routes: Routes = [
  {
    path: "viewuser",
    component: ViewUserComponent
  },
  {
    path: "adduser",
    component: AddUserComponent
  },
  {
    path: "feedback",
    component: ViewFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
