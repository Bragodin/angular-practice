import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectFriends } from 'src/app/features/store/selectors/friends.selectors';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {
  @Input() friends: User[];
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.pipe(select(selectFriends)).subscribe(
      data => {
        if(data.friends !== null){
          return this.friends = data.friends.map(elem => elem.friend);
        }
      }
    ); // узнать о правильности
  }
}
