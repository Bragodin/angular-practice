import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { FriendsService } from 'src/app/features/services/friends.service';
import { User } from 'src/app/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostFriend } from 'src/app/features/store/actions/friends.actions';
import { SetActiveUser } from 'src/app/features/store/actions/user.actions';
import { GetNotifications, DeleteNotification } from 'src/app/features/store/actions/notifications.actions';
import { selectNotifications } from 'src/app/features/store/selectors/notifications.selectors';

@Component({
  selector: 'app-request-to-friend',
  templateUrl: './request-to-friend.component.html',
  styleUrls: ['./request-to-friend.component.css']
})
export class RequestToFriendComponent implements OnInit {

  constructor(private notificationsService: NotificationsService , private friendsService: FriendsService, private _store: Store<IAppState>) { }
  users: any;
  ngOnInit() {
    const id = localStorage.getItem('id');
    this._store.dispatch(new GetNotifications());
    // this.friendsService.getUsersWirhFriendRequest(id).subscribe(
    //   data => {
    //     this.users = data
    //   }
    // );
     
    this._store.pipe(select(selectNotifications)).subscribe(
      data => this.users = data.friendsNotification
    )
  }
  accept(id, user){
    // this.friendsService.addToFriends({friend1: localStorage.getItem('id'), friend2: id}).subscribe(
    //   data => console.log(data)
    // )
    // this._store.dispatch(new DeleteNotification(user));
    this._store.dispatch(new SetActiveUser(user));
    this._store.dispatch(new PostFriend({friend1: localStorage.getItem('id'), friend2: id}))
  }
}
