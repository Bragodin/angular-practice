import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from '../models/notification.model';  

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  getUserNotifications(id){
    return this.http.get<Notification>(`http://localhost:3000/notifications/${id}`);
  }
}
