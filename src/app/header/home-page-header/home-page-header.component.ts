import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent {

 onClickPayBill(){
  Swal.fire("Please login to pay your bills","","info")
 }

}
