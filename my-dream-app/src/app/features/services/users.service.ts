import { Injectable } from '@angular/core';
import { User } from '../../models/user.model'; 
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // users: BehaviorSubject<User[]> = new BehaviorSubject(null);
  // syncUsers: any;
  constructor(private http: HttpClient) {
    // this.getUsers();
  }
  updateUsers(id, user){
  //     this.http.put<User[]>(`http://localhost:3000/users/${id}`, user).subscribe(
  //       data => console.log(data)
  //     );
  //     this.syncUsers.find((elem, i) => {
  //     if(elem._id === id){
  //       this.syncUsers.splice(i, 1, user);
  //     }
  //   });
  //  return this.users;
    return this.http.put<User[]>(`http://localhost:3000/users/${id}`, user);
  }
  // addUser(user: User){
  //   this.http.post<User[]>('http://localhost:3000/users', user).subscribe(data => {
  //     this.syncUsers.push(user);
  //     this.users.next(this.syncUsers);
  //   });
  //   return this.users;
  // }
  remove(id: string){
    // this.http.delete(`http://localhost:3000/users/${id}`).subscribe();
    // this.syncUsers = this.syncUsers.filter((user: User) => user._id !== id);
    // this.users.next(this.syncUsers);

    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  getUsers(page, count){
  //   this.http.get<User[]>(`http://localhost:3000/users/?page=${page}`).subscribe(data => {
  //     this.users.next(data);
  //     this.syncUsers = data;
  // });
  //   return this.users;
    return this.http.get<User[]>(`http://localhost:3000/users/?page=${page}&count=${count}`);
  }
  getUserPets(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}/pets`);
  }
  getUserById(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
}




