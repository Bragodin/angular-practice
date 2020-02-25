import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  '../../models/user.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { 

  }
  login(data: any){
    return this.http.post('http://localhost:3000/login', data).pipe(map((data: any) => {
      localStorage.setItem('id', data.user._id);
      localStorage.setItem('token', data.token);
      return data;
    }));
  }
  register(user: User){
    return this.http.post<User>('http://localhost:3000/users', user);
  }
  logout(){
    this.http.post('http://localhost:3000/logout', '');
  }
}
