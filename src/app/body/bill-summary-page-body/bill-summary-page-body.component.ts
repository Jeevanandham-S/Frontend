// import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { window } from 'rxjs';
import { BillHistory } from 'src/app/Model/BillHistory';
import { UserService } from 'src/app/Model/UserService';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bill-summary-page-body',
  templateUrl: './bill-summary-page-body.component.html',
  styleUrls: ['./bill-summary-page-body.component.css']
})
export class BillSummaryPageBodyComponent implements AfterViewInit {


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
  billhistory:BillHistory[] = [];

  @ViewChild('paymentRef',{static: true}) paymentRef!: ElementRef;

 

  constructor(private uservice:UserServiceService){
    
    console.log(paypal);
   
    
    
    
    
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


      uservice.getBillHistory(this.receivedData.number).subscribe((history:BillHistory[])=>{this.billhistory = history})
      // this.month = new Date(this.receivedData.validto)
      // this.getduedate = new Date(this.receivedData.validto);

  
  }

  a:number = 10;
  ngAfterViewInit(): void {
    if(this.paymentRef){
      const bool = true;
      if(this.receivedData.paymentstatus !== 'paid'){
        paypal.Buttons(
          {
            style:{
              layout: 'horizontal',
              color: 'blue',
              shape: 'rect',
              label: 'paypal',
              
            },
            
            createOrder:(data:any, actions:any)=>{
              return actions.order.create({
                purchase_units:[
                  {
                    amount:{
                      value: (this.receivedBill.totalamount/83.27).toFixed(2),
                      currency_code: 'USD'
                    }
                  }
                ]
              })
            },
            onApprove:(data:any, actions:any)=>{
              return actions.order.capture().then((details:any)=>{
                if(details.status === 'COMPLETED'){
  
                  this.uservice.payBill(this.receivedData.number).subscribe();
                  this.uservice.billHistory(this.receivedBill).subscribe();
                  Swal.fire("Payment successfull",'Transaction ID: '+details.id,'success')
                }
                
              })
            },
            onError:(error:any)=>{
              console.log(error);
              
            }
          }
        ).render(this.paymentRef.nativeElement)

      }
      
    }
    else{
      console.error('paymentRef is not defined or has not been initialized.');
    }
  }
  


  onClickPay(){
    this.uservice.payBill(this.receivedData.number).subscribe();
    this.uservice.billHistory(this.receivedBill).subscribe();
    // this.billhistory.mobilenumber = this.receivedData.number;
    // this.billhistory.date = new Date();
    // this.billhistory.billnumber = this.receivedBill.billnumber;
    // this.billhistory.amount = this.receivedBill.totalamount;
    // this.billhistory.previousbalance = this.receivedBill.previousbal;

    // console.log(this.billhistory);
    
    
    Swal.fire("Payment Successfull","","success");
  }


  paydetailsbool:boolean = false;

  onClickPaydetails(){
    if(this.paydetailsbool){
      this.paydetailsbool = false;
    }
    else{
      this.paydetailsbool = true;
    }
  }

  billstatementbool:boolean = false;

  onClickBillStatement(){

    if(this.billstatementbool){
      this.billstatementbool = false;
    }
    else{
      this.billstatementbool = true;
    }

  }

}
