import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  getMyFriends(id){
    return this.http.get<any>(`http://localhost:3000/friends/${id}`);
  }
  getUsersWirhFriendRequest(id) {
    return this.http.get<any>(`http://localhost:3000/friends/requests/${id}`);
  }
  addToFriends(friends){
    return this.http.post<any>(`http://localhost:3000/friends/addFriend`, friends);
  }
}
