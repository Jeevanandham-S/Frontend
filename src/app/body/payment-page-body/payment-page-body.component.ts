import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page-body',
  templateUrl: './payment-page-body.component.html',
  styleUrls: ['./payment-page-body.component.css']
})
export class PaymentPageBodyComponent {

  isFresher:any;
  receivedData:any;
  receivedBill:any;
  day:number;
  month:number;
  year:number;
  date:Date;
  duedate:string;
  paymentstatus:any;
  constructor(){
    const storedData = localStorage.getItem("userData");
    const storedBill = localStorage.getItem("userBill");
  // this.dataBal = localStorage.getItem("databal")
  // console.log(this.dataBal)
      if(storedData){
        this.receivedData = JSON.parse(storedData);
      }
      if(storedBill){
        this.receivedBill = JSON.parse(storedBill);
      }
      this.day=new Date(this.receivedData.validto).getDate();
      this.month = new Date(this.receivedData.validto).getMonth();
      this.year =  new Date(this.receivedData.validto).getFullYear();
      this.date = new Date(this.year,this.month,this.day);
      this.date.setDate(this.date.getDate()+10);
      this.duedate = this.date.toDateString();

      if(this.receivedData.isfresher){
        this.isFresher = true;
      }


      
      if(this.receivedData.paymentstatus == 'paid'){
        this.paymentstatus = true;
      }
      else{
        this.paymentstatus = false;
      }

  }

}
