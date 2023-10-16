import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminServiceService } from '../Admin Service/admin-service.service';
import Swal from 'sweetalert2';
import { Observable, delay, timer } from 'rxjs';
import { Status } from 'src/app/Model/Status';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
   st: any ;
  onClickRegister(){
    // alert('Registered successfully');
    
    // alert("success")
      console.log(this.userForm.value);
  
      // Swal.fire("Registered successfully",'','success');
      this.aservice.addUser(this.userForm.value).subscribe((msg:Status)=>{this.st = msg.status});
      
      timer(10000).subscribe(()=>{
      console.log(this.st);

        if(this.st == 'success'){
          Swal.fire("Registered successfully",'','success');
          
          // alert("Registered")
        }
        else{
          // Swal.fire("You'll be Registered shortly","On successfull registration an account number will be send to the registered Email","info")
          Swal.fire("Something went wrong",'Try again later','error');
        }
      });
   
      
   
    

    // setTimeout(()=>{this.display(),10000})
  }


 





  userForm:FormGroup;
  fname:FormControl;
  lname:FormControl = new FormControl();
  dob:FormControl = new FormControl();
  email:FormControl = new FormControl();
  number:FormControl = new FormControl();
  plan:FormControl = new FormControl();
  service:FormControl = new FormControl();
  address:FormControl = new FormControl();
  state:FormControl = new FormControl();
  city:FormControl = new FormControl();
  zip:FormControl = new FormControl();


  constructor(private aservice:AdminServiceService){


    this.fname = new FormControl();
    this.userForm = new FormGroup({
                    fname: new FormControl(),
                    lname:this.lname,
                    dob:this.dob,
                    email:this.email,
                    number:this.number,
                    plan:this.plan,
                    service:this.service,
                    address:this.address,
                    state:this.state,
                    city:this.city,
                    zip:this.zip
    })
  }


  plans = [399,499,599,999,1199];
  states = ['Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
   'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand'
    ]

}
