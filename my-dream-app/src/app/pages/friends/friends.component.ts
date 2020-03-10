import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class FriendsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private friendsService: FriendsService, private _store: Store<IAppState>) { }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  ngOnInit() { 
    // this._store.pipe(select(selectFriends)).subscribe(
    //   data => console.log(data)
    // );
    // this.sub = this.friendsService.getMyFriends(id).subscribe(
    //   data => console.log(data)
    // );
  }
}
