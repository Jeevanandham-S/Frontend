// import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from 'src/app/Model/UserService';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bill-summary-page-body',
  templateUrl: './bill-summary-page-body.component.html',
  styleUrls: ['./bill-summary-page-body.component.css']
})
export class BillSummaryPageBodyComponent {

  receivedData:any;
  receivedBill:any;
  paymentstatus:any;
  // getduedate:any ;
  // duedate:Date;
  day:number;
  month:number;
  year:number;
  date:Date;
  duedate:string;
  isFresher:any;

 

  constructor(private uservice:UserServiceService){
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
      else{
        this.isFresher = false;
      }
      
      if(this.receivedData.paymentstatus == 'paid'){
        this.paymentstatus = true;
      }
      else{
        this.paymentstatus = false;
      }


      // this.month = new Date(this.receivedData.validto)
      // this.getduedate = new Date(this.receivedData.validto);

  
  }


  onClickPay(){
    this.uservice.payBill(this.receivedData.number).subscribe();
    Swal.fire("Payment Successfull","","success");
  }
}
