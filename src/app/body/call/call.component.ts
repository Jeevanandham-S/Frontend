
import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';
import { Call } from 'src/app/Model/Call';
import { Status } from 'src/app/Model/Status';
import { UtilizationService } from 'src/app/Utilization service/utilization.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent {

  receivedData:any;
  CallLogs: Call;

  min:any;
  sec:any;


  setTime(time:string){
    console.log(time);
    

  }

  constructor(private utilservice:UtilizationService){
    const storedData = localStorage.getItem("userData");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }

    this.CallLogs = new Call(this.receivedData.number,this.setCurrentTime(),new Date(),0, '');
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


  callstatus:any;
  onClickSubmit(){

    this.CallLogs.duration = this.min+' minute '+this.sec+' sec';
    console.log(this.CallLogs);
    this.utilservice.addCall(this.CallLogs).subscribe((msg:Status)=>{this.callstatus = msg.status});
    

    timer(2000).subscribe(()=>{
      if(this.callstatus == 'true'){
        alert('Call added successfully');
      }
      else{
        alert('Something went wrong, your call has not placed');
      }
    })
  }

}
