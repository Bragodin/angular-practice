import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectFriends } from 'src/app/features/store/selectors/friends.selectors';
import { GetMyFriends } from 'src/app/features/store/actions/friends.actions';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }
  @Input() usersWithDialog: User[];
  ngOnInit() {
    // this._store.dispatch(new GetMyFriends(localStorage.getItem('id'))); // get users with dialog
    this._store.pipe(select(selectFriends)).subscribe(
      data => {
        if(data.friends !== null){
          return this.usersWithDialog = data.friends.map(elem => elem.friend);
          }
        }
      );
    }
  openDialog(ol){
    console.log(ol)
  }
}
