import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Feedback } from 'src/app/Model/Feedback';
import { Status } from 'src/app/Model/Status';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us-body',
  templateUrl: './contact-us-body.component.html',
  styleUrls: ['./contact-us-body.component.css']
})
export class ContactUsBodyComponent {

  feedback:Feedback;

  constructor(private service:UserServiceService){
    this.feedback = new Feedback('','',91,'');
  }

  feedstatus:any;
  onClickSend(){
    console.log(this.feedback);
    this.service.addFeedback(this.feedback).subscribe((msg:Status)=>{this.feedstatus = msg.status});

    timer(1000).subscribe(()=>{
      if(this.feedstatus == 'true'){
        Swal.fire("Feedback submitted successfully","","success");
      }
      else{
        Swal.fire("Sorry we couldn't add your feedback","please try again later","error");
      }
    })
    
  }

}
