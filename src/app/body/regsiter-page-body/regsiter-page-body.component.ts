import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Status } from 'src/app/Model/Status';
import { UserServiceService } from 'src/app/UserService/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regsiter-page-body',
  templateUrl: './regsiter-page-body.component.html',
  styleUrls: ['./regsiter-page-body.component.css']
})
export class RegsiterPageBodyComponent {
  onClickRegister(){
    alert('Registered successfully');
    // Swal.fire("Registered successfully",'','success');
    // alert("success")
  }


  enableLogin:boolean=false;

  mobileNumber:FormControl;

  constructor(private route:Router, private uservice:UserServiceService){
    this.mobileNumber = new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]);
  }
 st:any;
sendOTP(bool:boolean){
  this.enableLogin = bool;
  this.uservice.sendRegisterOtp(this.mobileNumber.value).subscribe((msg:Status)=>{this.st = msg.status});
}

// @Output() changeDirectTo = new EventEmitter<string>();
RegisterStatus:any;
onClickLogin(){
// this.changeDirectTo.emit('logged');
// console.log("onLogin");
  // this.service.setLocateTo('userPage');
  // this.route.navigate(['/user']);
  this.uservice.validateRegisterOtp(this.otp).subscribe((msg:Status)=>{this.RegisterStatus = msg.status
  });
  timer(10000).subscribe(()=>{
    
    console.log(this.RegisterStatus); 
    if(this.RegisterStatus == 'true'){
      Swal.fire("Registered Successfully","","success");
      this.route.navigate(['/login']);
    }
    else if(this.RegisterStatus == 'false'){
      Swal.fire("Invalid OTP","","error")
    }
    else{
      Swal.fire("Something went wrong","sorry for the inconvenience please try again later","error");
    }
  });
  
  
}

otp!: any;
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
