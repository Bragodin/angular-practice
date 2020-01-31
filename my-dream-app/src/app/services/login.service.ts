import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(data: any){
    console.log(data)
    return this.http.post('http://localhost:3000/login', data);
  }
}
