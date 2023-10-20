import { Component } from '@angular/core';
import { AdminServiceService } from '../Admin Service/admin-service.service';
import { Feedback } from 'src/app/Model/Feedback';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent {

  feedbacks:Feedback[] = [];
  constructor(private service:AdminServiceService){
    service.getFeedbacks().subscribe((feed:Feedback[])=>{this.feedbacks = feed});
  }

}
