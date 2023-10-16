import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page-header',
  templateUrl: './user-page-header.component.html',
  styleUrls: ['./user-page-header.component.css']
})
export class UserPageHeaderComponent {
  notifications = [1,2,3,4,5,6];


  constructor(private route:Router){}

  onClickLogout(){
    sessionStorage.removeItem("generateBill");
    localStorage.removeItem('userData');
    localStorage.removeItem('userBill');
    this.route.navigate(['/login']);

  }
}
