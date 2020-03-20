import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-friend-notification',
  templateUrl: './friend-notification.component.html',
  styleUrls: ['./friend-notification.component.css']
})
export class FriendNotificationComponent implements OnInit {
  @Output() onChose = new EventEmitter();
  constructor() {}
  @Input() text: string;
  @Input() user: User;
  ngOnInit() {
  }
  goToFriendsRequests(){
    this.onChose.emit(`/profile/${this.user._id}`);
  }
}
