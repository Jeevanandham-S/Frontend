import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SmsCycle } from 'src/app/Model/Smscycle';
import { UserService } from 'src/app/Model/UserService';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import { UtilizationService } from 'src/app/Utilization service/utilization.service';

@Component({
  selector: 'app-user-page-body',
  templateUrl: './user-page-body.component.html',
  styleUrls: ['./user-page-body.component.css']
})
export class UserPageBodyComponent implements OnInit{
 
  
  receivedData:any;
  dataBal:any
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
   
    console.log('from init');
    // switch(this.receivedData.plan){
    //   case '399':{
    //     this.gb = 40;
    //     break;
    //   }
    //   case '499':{
    //     this.gb = 75;
    //     break;
    //   }
    //   case '599':{
    //     this.gb = 75;
    //     break;
    //   }
    //   case '999':{
    //     this.gb = 100;
    //     break;
    //   }
    //   case '1199':{
    //     this.gb = 150;
    //     break;
    //   }
    // }
    // localStorage.setItem("databal",this.gb);
    console.log(this.gb);
    this.staticgb = this.gb;
    
    this.reducegb();
  }

gb:any;
staticgb:any
width:any;
validTo:any;
smsavailable:any;
constructor(private uservice:UserServiceService, private utilservice:UtilizationService){


  // this.userMobileNumber = uservice.getUserMobileNumber();
  // this.uservice.getUserService(this.userMobileNumber).subscribe((service:UserService)=>{this.userservice = service});
 console.log('from constructor');
 const storedData = localStorage.getItem("userData");
 this.validTo = localStorage.getItem("validTo");
  this.dataBal = localStorage.getItem("databal")
  console.log(this.dataBal)
 if(storedData){
   this.receivedData = JSON.parse(storedData);
 }

//  timer(3000).subscribe(()=>{
//   this.uservice.getUserService(this.receivedData.number);
//  })

 const generateBill = sessionStorage.getItem('generateBill');
 if(this.receivedData.daysleft<=1){
        // console.log(this.receivedData.validTo);
        
        // this.validTo = this.receivedData.validTo;
        // console.log(this.validTo.toDateString());
        console.log(new Date(this.validTo));

        if(generateBill == 'true'){
          console.log('generate bill');
          
          uservice.generateBill(this.receivedData.number).subscribe();
        
          timer(5000).subscribe(()=>{
            uservice.recycleUserService(this.receivedData.number,this.validTo).subscribe();
          })

          sessionStorage.setItem('generateBill','false');

          // uservice.setHasbillgenerated();

  }

    
 }
 

 
  const storedSms = localStorage.getItem("smsAvailable");
  if(storedSms){
    this.smsavailable = JSON.parse(storedSms);
  }

}


reducegb(){
  timer(500).subscribe(()=>{
    this.gb = (this.gb-0.3).toFixed(1);
    this.width = (this.dataBal/this.staticgb)*100;
    this.reducegb();
    localStorage.setItem("databal",this.gb);
  })
}



}



