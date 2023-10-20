import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Notification } from 'src/app/Model/Notification';
import { NotificationServiceService } from 'src/app/Notification Service/notification-service.service';

@Component({
  selector: 'app-user-page-header',
  templateUrl: './user-page-header.component.html',
  styleUrls: ['./user-page-header.component.css']
})
export class UserPageHeaderComponent {
  notifications:Notification[] = [];


  receivedData:any;
  // not!:Notification;
  constructor(private route:Router, private notifyservice:NotificationServiceService){
   
    const storedData = localStorage.getItem("userData");
    const sendNotification = sessionStorage.getItem("sendNotification");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }


    timer(1000).subscribe(()=>{
      notifyservice.getNotifications(this.receivedData.number).subscribe((not:Notification[])=>{this.notifications = not;
      });
      console.log(this.notifications);
      
    })

    if(sendNotification == 'true'){

      if(this.receivedData.dataused >= 50 && this.receivedData.dataused<90){
        const newnotification = new Notification(0,this.receivedData.number,'Alert!50%','Alert 50% of your data is consumed',new Date());
        // this.not.header = 'Alert!50%';
        // this.not.body = 'Alert 50% of your data is consumed'
        // this.not.date = new Date();
      notifyservice.addNotification(newnotification).subscribe();
      // this.notifications.push(newnotification);
      // console.log(this.not);
      
      }
      else if(this.receivedData.dataused >= 90 && this.receivedData.dataused <100){
        const newnotification = new Notification(0,this.receivedData.number,'Alert!90%','Alert 90% of your data is consumed',new Date());
        notifyservice.addNotification(newnotification).subscribe();
      }
      else if(this.receivedData.dataused >= 100){
        const newnotification = new Notification(0,this.receivedData.number,'Alert!100%','Alert 100% of your data is consumed',new Date());
        notifyservice.addNotification(newnotification).subscribe();
      }

      sessionStorage.setItem("sendNotification","false");

    }
     
    }
  

  onClickLogout(){
    sessionStorage.removeItem("generateBill");
    sessionStorage.removeItem("sendNotification");
    localStorage.removeItem('userData');
    localStorage.removeItem('userBill');
    this.route.navigate(['/login']);

  }

  onClickDelete(msg:Notification){

    console.log(msg.id);
    this.notifyservice.deleteNotification(msg.id).subscribe();
    

  }
}
