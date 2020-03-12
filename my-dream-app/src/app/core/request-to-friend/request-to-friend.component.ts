import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostFriend } from 'src/app/features/store/actions/friends.actions';
import { SetActiveUser } from 'src/app/features/store/actions/user.actions';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { selectNotifications } from 'src/app/features/store/selectors/notifications.selectors';

@Component({
  selector: 'app-request-to-friend',
  templateUrl: './request-to-friend.component.html',
  styleUrls: ['./request-to-friend.component.css']
})
export class RequestToFriendComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }
  users: any;
  ngOnInit() {
    const id = localStorage.getItem('id');
    this._store.dispatch(new GetNotifications()); 
    this._store.pipe(select(selectNotifications)).subscribe(
      data => this.users = data.friendsNotification
    )
  }
  accept(id, user){
    this._store.dispatch(new SetActiveUser(user));
    this._store.dispatch(new PostFriend({friend1: localStorage.getItem('id'), friend2: id}))
  }
}
