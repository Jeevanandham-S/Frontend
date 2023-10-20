import { Injectable } from '@angular/core';
import { Call } from '../Model/Call';
import { HttpClient } from '@angular/common/http';
import { Status } from '../Model/Status';
import { Data } from '../Model/Data';
import { SMS } from '../Model/SMS';
import { SmsCycle } from '../Model/Smscycle';

@Injectable({
  providedIn: 'root'
})
export class UtilizationService {

  constructor(private httpClient:HttpClient) { }

  callurl:string = 'http://localhost:7000/call';
  dataurl:string = 'http://localhost:7000/data';
  smsurl:string = 'http://localhost:7000/sms';


  addCall(call:Call){

    return this.httpClient.post<Status>(this.callurl,call);

  }

  getCalls(mobilenumber:number){

    return this.httpClient.get<Call[]>(this.callurl+`/${mobilenumber}`);

  }

  addData(data:Data){

    console.log(data);
    

    return this.httpClient.post<Status>(this.dataurl,data);

  }

  getData(mobilenumber:number){

    return this.httpClient.get<Data[]>(this.dataurl+`/${mobilenumber}`);

  }

  addSms(sms:SMS){

    console.log(sms);
    
    return this.httpClient.post<Status>(this.smsurl,sms);

  }

  getSms(mobilenumber:number){

    return this.httpClient.get<SMS[]>(this.smsurl+`/${mobilenumber}`);

  }


  getSmsAvailable(mobilenumber:number){
    return this.httpClient.get<SmsCycle>(`http://localhost:7000/smscycle/${mobilenumber}`);
  }

  updateSmsCycle(mobilenumber:number){

    return this.httpClient.put("http://localhost:7000/smscycle/recyclesms",mobilenumber);

  }

  reduceSms(mobilenumber:number){
    
    return this.httpClient.put("http://localhost:7000/smscycle/reducesms",mobilenumber);

  }
}
