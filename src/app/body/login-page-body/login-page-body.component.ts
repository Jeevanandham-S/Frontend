import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Status } from 'src/app/Model/Status';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page-body',
  templateUrl: './login-page-body.component.html',
  styleUrls: ['./login-page-body.component.css']
})
export class LoginPageBodyComponent {
  enableLogin:boolean=false;

  mobileNumber:FormControl;

  constructor(private route:Router,private uservice:UserServiceService){
    this.mobileNumber = new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[6-9][0-9]*$")]);
  }
 st:any;
sendOTP(bool:boolean){
  this.enableLogin = bool;
  this.uservice.sendLoginOtp(this.mobileNumber.value).subscribe((msg:Status)=>{this.st = msg.status});
}

@Output() changeDirectTo = new EventEmitter<string>();

LoginStatus:any;
onClickLogin(){
// this.changeDirectTo.emit('logged');
// console.log("onLogin");
  // this.service.setLocateTo('userPage');
  sessionStorage.setItem('generateBill','true');
  this.uservice.validateLoginOtp(this.otp).subscribe((msg:Status)=>{this.LoginStatus = msg.status});
  timer(5000).subscribe(()=>{
    if(this.LoginStatus == 'true'){
      // this.uservice.setUserMobileNumber(this.mobileNumber.value);
      this.uservice.getBill(this.mobileNumber.value);
      this.uservice.getUserService(this.mobileNumber.value);
      
    }
    else{
      Swal.fire("Invalid OTP","","error");
    }
  })
  
}

otp!: string;
inputDigitLeft: string = "Verify code";
btnStatus: string = "btn-light";

public configOptions = {
  length: 4,
  inputClass: 'digit-otp',
  containerClass: 'd-flex justify-content-between'
}

ngOnInit() {
    
}

onOtpChange(event: any) {
  this.otp = event;
  if(this.otp.length < this.configOptions.length) {
    this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
    this.btnStatus = 'btn-light';
  }

  if(this.otp.length == this.configOptions.length) {
    this.inputDigitLeft = "Let's go!";
    this.btnStatus = 'btn-primary';
  }
}



}



