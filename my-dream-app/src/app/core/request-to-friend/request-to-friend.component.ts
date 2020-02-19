import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-request-to-friend',
  templateUrl: './request-to-friend.component.html',
  styleUrls: ['./request-to-friend.component.css']
})
export class RequestToFriendComponent implements OnInit {

  constructor(private notificationsService: NotificationsService  ) { }

  users: any;
  ngOnInit() {
    const id = localStorage.getItem('id');
    this.notificationsService.getUserNotifications(id).subscribe(data => {
      console.log(data);
      this.users = data.friendsNotification;
    });
  }
  accept(){

  }
}
