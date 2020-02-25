import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { FriendsService } from 'src/app/features/services/friends.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-request-to-friend',
  templateUrl: './request-to-friend.component.html',
  styleUrls: ['./request-to-friend.component.css']
})
export class RequestToFriendComponent implements OnInit {

  constructor(private notificationsService: NotificationsService , private friendsService: FriendsService) { }
  users: User[];
  ngOnInit() {
    const id = localStorage.getItem('id');
    this.notificationsService.getUserNotifications(id).subscribe(data => {
      // return this.users = data.friendsNotification;
    });
    this.friendsService.getUsersWirhFriendRequest(id).subscribe(
      data => {
        console.log(data)
        this.users = data
      }
    );
  }
}
