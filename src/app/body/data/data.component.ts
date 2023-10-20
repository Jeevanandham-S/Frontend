import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Data } from 'src/app/Model/Data';
import { Status } from 'src/app/Model/Status';
import { UtilizationService } from 'src/app/Utilization service/utilization.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  data:Data;
  receivedData:any;
  datastatus:any;


  constructor(private utilservice:UtilizationService){

    const storedData = localStorage.getItem("userData");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }
    this.data = new Data(this.receivedData.number,0,'',this.setCurrentTime(), new Date());
   


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

  onClickSubmit(){
    console.log(this.data);
    this.utilservice.addData(this.data).subscribe((msg:Status)=>{this.datastatus = msg.status});

    timer(2000).subscribe(()=>{
      if(this.datastatus == 'true'){
        alert('Data added successfully');
      }
      else{
        alert("something went wrong");
      }
    })
    
  }

}
