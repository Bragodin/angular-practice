import { Component, OnInit} from '@angular/core';
import { FriendsService } from 'src/app/features/services/friends.service';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyFriends } from 'src/app/features/store/actions/friends.actions';
import { selectFriends } from 'src/app/features/store/selectors/friends.selectors';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  constructor(private _store: Store<IAppState>) { }
  ngOnInit() { 
    this._store.dispatch(new GetMyFriends(localStorage.getItem('id')));
  }
}
