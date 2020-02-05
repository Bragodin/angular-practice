import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: BehaviorSubject<User[]> = new BehaviorSubject(null);
  syncUsers: User[];
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  updateUsers(id, user){
      this.http.put<User[]>(`http://localhost:3000/users/${id}`, user).subscribe(
        data => console.log(data)
      );
      this.syncUsers.find((elem, i) => {
      if(elem._id === id){
        this.syncUsers.splice(i, 1, user);
      }
    });
   return this.users;
  }
  addUser(user: User){
    this.http.post<User[]>('http://localhost:3000/users', user).subscribe(data => {
      this.syncUsers.push(user);
      this.users.next(this.syncUsers);
    });
    return this.users;
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
  getUserPets(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}/pets`);
  }
  getUserById(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
  addAvatar(avatar: object){
    return this.http.post('http://localhost:3000/files', avatar);
  }
}




