import { Injectable } from '@angular/core';
import { User } from '../../models/user.model'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }
  updateUsers(id, user){
    return this.http.put<User[]>(`http://localhost:3000/users/${id}`, user);
  }

  remove(id: string){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  getUsers(page, count){
    return this.http.get<User[]>(`http://localhost:3000/users/?page=${page}&count=${count}`);
  }
  getUserPets(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}/pets`);
  }
  getUserById(id){
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
}




