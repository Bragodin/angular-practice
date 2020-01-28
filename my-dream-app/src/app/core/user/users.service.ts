import { Injectable } from '@angular/core';
import { User } from './user.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: BehaviorSubject<User[]> = new BehaviorSubject(null);
  syncUsers: User[];
  constructor(private http: HttpClient) { }
  updateUsers(id, user){
    this.http.put<User[]>(`http://localhost:3000/users/${id}`, user).subscribe(data => {
      this.getUsers();    //  change  
    });
    return this.getUsers();
  }
  addUser(user: User){
    this.http.post<User[]>('http://localhost:3000/users', user).subscribe(data => {
      this.getUsers();//  change 
    });
    return this.getUsers();
  }
  remove(id: string){
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe();
    this.syncUsers = this.syncUsers.filter((user: User) => user._id !== id);
    this.users.next(this.syncUsers);
  }
  getUsers()
  {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(data => {
      this.users.next(data);
      this.syncUsers = data;
  });
    return this.users;
  }
}




