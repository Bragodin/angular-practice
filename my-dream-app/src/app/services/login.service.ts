import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(data: any){
    return this.http.post('http://localhost:3000/login', data);
  }
  register(user: User){
    return this.http.post<User>('http://localhost:3000/users', user);
  }
}
