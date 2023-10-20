import { Component } from '@angular/core';
import { AdminServiceService } from '../Admin Service/admin-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  users:any[] = [];
  constructor(private adminservice:AdminServiceService){

    adminservice.getUsers().subscribe((user:any[])=>{this.users = user})
    console.log(this.users);
    

  }

}
