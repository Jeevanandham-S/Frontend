import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/User';
import { HttpClient } from '@angular/common/http';
import { Status } from 'src/app/Model/Status';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/Model/Feedback';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  url:string = 'http://localhost:7000/admin';

  st: any;

  constructor(private http:HttpClient) { }

  addUser(user:User):Observable<Status>{
    console.log(user);
    // console.log(this.http.post<Status>(this.url,user));
    // this.http.post<Status>(this.url,user).subscribe((msg)=>{this.st = msg});
    // console.log(this.st);
    
 
    
    
    return this.http.post<Status>(this.url,user);
    
  }

  getUsers(){
    return this.http.get<any[]>(this.url)
  }

  getFeedbacks(){
    return this.http.get<Feedback[]>('http://localhost:7000/feedback');
  }
}

