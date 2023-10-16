import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page-header',
  templateUrl: './payment-page-header.component.html',
  styleUrls: ['./payment-page-header.component.css']
})
export class PaymentPageHeaderComponent {
  receivedData:any;
  constructor(){
    const storedData = localStorage.getItem("userData");
    if(storedData){
      this.receivedData = JSON.parse(storedData);
    }
  }
}
