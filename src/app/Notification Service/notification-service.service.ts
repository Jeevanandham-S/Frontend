import { Injectable } from '@angular/core';
import { Notification } from '../Model/Notification';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private httpClient:HttpClient) { }


  url:string = 'http://localhost:7000/notification';

  addNotification(not:Notification){

    return this.httpClient.post(this.url,not);

  }

  getNotifications(mobilenumber:number){

    return this.httpClient.get<Notification[]>(this.url+`/${mobilenumber}`)

  }

  deleteNotification(id:number){

    return this.httpClient.delete(this.url+`/${id}`);
  }
}
