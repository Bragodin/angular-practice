import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  getMyFriends(id){
    return this.http.get<User>(`http://localhost:3000/friends/${id}`);
  }
  getUsersWirhFriendRequest(id) {
    return this.http.get<any>(`http://localhost:3000/friends/requests/${id}`);
  }
  addToFriends(friends){
    return this.http.post<User>(`http://localhost:3000/friends/addFriend`, friends);
  }
  removeFromFriends(friend1, friend2){
    return this.http.delete(`http://localhost:3000/friends/delete/?friend1=${friend1}&friend2=${friend2}`);
  }
}
