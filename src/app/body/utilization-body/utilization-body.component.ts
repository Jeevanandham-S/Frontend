import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Call } from 'src/app/Model/Call';
import { Data } from 'src/app/Model/Data';
import { SMS } from 'src/app/Model/SMS';
import { UtilizationService } from 'src/app/Utilization service/utilization.service';

@Component({
  selector: 'app-utilization-body',
  templateUrl: './utilization-body.component.html',
  styleUrls: ['./utilization-body.component.css']
})
export class UtilizationBodyComponent {

  receivedData:any;
  callList:Call[] = [];
  dataList:Data[] = [];
  smsList:SMS[] = [];

  constructor(private utilservice:UtilizationService){

    const storedData = localStorage.getItem("userData");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }

    utilservice.getCalls(this.receivedData.number).subscribe((calls:Call[])=>{this.callList = calls});
    utilservice.getData(this.receivedData.number).subscribe((data:Data[])=>{this.dataList = data});
    utilservice.getSms(this.receivedData.number).subscribe((sms:SMS[])=>{this.smsList = sms});
    timer(3000).subscribe(()=>{
      console.log(this.dataList);
      
      console.log(this.callList);
      
    })

  }

  toggle:string = 'Data'

  toggleTo(to:string){
    this.toggle = to;
  }

//  data:Data[] = [new Data('30 KB','08:54 AM','LOCAL - 4G',0.00),
//                 new Data('490 KB','08:48 AM','LOCAL - 4G',0.00),
//                 new Data('10 KB','08:33 AM','LOCAL - 4G',0.00),
//                 new Data('100 KB','08:20 AM','LOCAL - 4G',0.00),
//                 new Data('50 KB','08:12 AM','LOCAL - 4G',0.00),
//                 new Data('200 KB','08:01 AM','LOCAL - 4G',0.00)];


//  calls:Calls[] = [new Calls(91,9999999999,'06:55 PM','LOCAL - 5G','8 minute',0.00),
//                   new Calls(91,9840956768,'11:55 AM','LOCAL - 4G',' minute 14 sec',0.00),
//                   new Calls(91,8820788805,'01:12 PM','LOCAL - 4G','15 minute 28 sec',0.00),
//                   new Calls(91,8608995060,'10:30 AM','LOCAL - 5G','20 minute 2 sec',0.00),
//                   new Calls(91,8888889999,'7:38 AM','LOCAL - 5G','2 minute 45 sec',0.00),
//                   new Calls(91,6879054678,'3:28 PM','LOCAL - 5G','5 minute',0.00)]




}



export class Calls{
  constructor(public region:number,public number:number,public time:string, public network:string, public minutes:string, public cost:number){}
}