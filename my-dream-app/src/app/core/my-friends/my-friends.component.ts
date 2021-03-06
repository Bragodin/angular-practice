import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectFriends } from 'src/app/features/store/selectors/friends.selectors';
import { DeleteFriend } from 'src/app/features/store/actions/friends.actions';
import { Friends } from 'src/app/models/friend.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit, OnDestroy {
  @Input() friends: User[];
  sub: Subscription;
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this.sub = this._store.pipe(select(selectFriends)).subscribe(
      data => {
        if(data.friends !== null){
          return this.friends = data.friends.map(elem => elem.friend);
        }
      } 
    ); 
  }
  remove(userId){
    let data: Friends = {
      myId: localStorage.getItem('id'),
      userId: userId
    }
    this._store.dispatch(new DeleteFriend(data));
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
