import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../Model/Status';
import { Observable, timer } from 'rxjs';
import { UserService } from '../Model/UserService';
import { Router } from '@angular/router';
import { BillHistory } from '../Model/BillHistory';
import { Feedback } from '../Model/Feedback';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userMobileNumber!:number;

  constructor(private httpclient:HttpClient,private route:Router ) { }


  sendRegisterOtp(number:string):Observable<Status>{
    console.log(number);
    return this.httpclient.post<Status>("http://localhost:7000/user/register",number);
    
  }

  validateRegisterOtp(otp:string):Observable<Status>{
    console.log(parseInt(otp));
    console.log(typeof parseInt(otp));
    return this.httpclient.post<Status>("http://localhost:7000/user/validate-register",parseInt(otp));
    
    
  }

  sendLoginOtp(mobilenumber:string):Observable<Status>{
    console.log(mobilenumber);
    return this.httpclient.post<Status>("http://localhost:7000/user/login",parseInt(mobilenumber));
  }

  validateLoginOtp(otp:string):Observable<Status>{
    return this.httpclient.post<Status>("http://localhost:7000/user/validate-login",parseInt(otp));
  }


  setUserMobileNumber(mobilenumber:number){
    this.userMobileNumber = mobilenumber;
    console.log(this.userMobileNumber);
    
  }

  getUserMobileNumber(){
    return this.userMobileNumber;
  }
  validTo!:Date;
  userservice!:UserService;
  getUserService(mobileNumber:number){
    this.httpclient.get<UserService>(`http://localhost:7000/service/${mobileNumber}`).subscribe((service:UserService)=>{this.userservice = service});
    timer(5000).subscribe(()=>{
      localStorage.setItem("userData",JSON.stringify(this.userservice));
      this.validTo = new Date(this.userservice.validto) ;
      localStorage.setItem("validTo",this.validTo.toDateString());
      this.route.navigate(['/user']);
    })
   
  }


  recycleUserService(mobileNumber:number,validTo:string){
    console.log(mobileNumber);
    console.log(typeof mobileNumber);
    
    console.log(validTo);
    console.log(typeof validTo);

    const months: { [key: string]: number } = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    const dateParts = validTo.split(' ');
    const year = parseInt(dateParts[3]);
    const month = months[dateParts[1]];
    const day = parseInt(dateParts[2]);
    const sqlDate = new Date(year, month, day).toISOString().slice(0, 10);
   console.log(sqlDate);
   
    return this.httpclient.put('http://localhost:7000/service/recycleService?mobilenumber='+mobileNumber+'&validto='+sqlDate,0);
    
    
  }

  generateBill(number:number){
    return this.httpclient.put('http://localhost:7000/service/generatebill',number);
  }

  userBill:any;
  getBill(number:number){
    this.httpclient.get(`http://localhost:7000/service/getbill/${number}`).subscribe((service:any)=>{this.userBill = service});
    timer(5000).subscribe(()=>{
      localStorage.setItem("userBill",JSON.stringify(this.userBill));
    })
  }


  private hasbillgenerated = false;

  setHasbillgenerated(){
    this.hasbillgenerated = true;
  }

  getHasbillgenerated(){
    return this.hasbillgenerated;
  }


  payBill(number:number){

    console.log(number);
    return this.httpclient.put('http://localhost:7000/service/payBill',number);
    

  }

  billHistory(history:any){
    return this.httpclient.post('http://localhost:7000/service/billhistory',history);
  }

  getBillHistory(mobilenumber:number){
    return this.httpclient.get<BillHistory[]>(`http://localhost:7000/service/billhistory/${mobilenumber}`);
  }



  addFeedback(msg:Feedback){

    return this.httpclient.post<Status>('http://localhost:7000/feedback',msg)

  }


}
