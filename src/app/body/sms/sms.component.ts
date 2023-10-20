import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SMS } from 'src/app/Model/SMS';
import { SmsCycle } from 'src/app/Model/Smscycle';
import { Status } from 'src/app/Model/Status';
import { UtilizationService } from 'src/app/Utilization service/utilization.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit{

  count:any = 0;
  sms:SMS;
  receivedData:any;
  smsavailable:any;
  smsleft:any;


  constructor(private utilservice:UtilizationService){
    const storedData = localStorage.getItem("userData");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }
    this.sms = new SMS(this.receivedData.number,0,this.setCurrentTime(),new Date());

    utilservice.getSmsAvailable(this.receivedData.number).subscribe((details:SmsCycle)=>{
      this.smsavailable = details;
    })

    timer(3000).subscribe(()=>{
      console.log(this.smsavailable);
      
      if(new Date(this.smsavailable.dbdate) == new Date(this.smsavailable.currentdate)){
        console.log(this.smsavailable.dbdate);
        this.smsleft = this.smsavailable.smsavailable;
        console.log(this.smsleft);
        
        
      }
      else if(new Date(this.smsavailable.dbdate) < new Date(this.smsavailable.currentdate)){

        utilservice.updateSmsCycle(this.receivedData.number).subscribe();
        console.log('true');
        
      }
    })
  }

  ngOnInit() {
    // Schedule the resetCount method to run at 11:59 PM
    this.scheduleReset();
  }

  resetCount() {
    this.count = 0;
    console.log('Count has been reset to 100.');
    
    // Schedule the reset for the next day
    this.scheduleReset();
  }

  scheduleReset() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // Set to tomorrow
      0, // Hours
      0, // Minutes
      0 // Seconds
    );
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => this.resetCount(), timeUntilMidnight);
  }



  setCurrentTime():string{
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zero for minutes if necessary
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
    
  }

  smsStatus:any;
  onClickSubmit(){

    this.count = this.count+1;

    if(this.smsavailable.smsavailable <= 0){
      alert("You have exceed the daily limit");
    }
    else{

      console.log(this.sms);

      this.utilservice.addSms(this.sms).subscribe((msg:Status)=>{this.smsStatus = msg.status});
      this.utilservice.reduceSms(this.receivedData.number).subscribe();


      timer(3000).subscribe(()=>{
        if(this.smsStatus == 'true'){
          alert("Message added successfully");
        }
        else{
          alert("something went wrong");
        }
      })
      
      
      
      console.log(this.count);
      
    }
    


  }

}
