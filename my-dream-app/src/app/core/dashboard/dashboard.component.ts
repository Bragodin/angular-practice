import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UsersService } from '../../features/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FriendsService } from 'src/app/features/services/friends.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { map } from 'rxjs/operators';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUser, selectUsers } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: User[];
  private sub: Subscription;
  constructor(private _store: Store<IAppState>
    ) {}
  ngOnInit() {
    this._store.dispatch(new GetMyUsers());
    this._store.pipe(select(selectUser)).subscribe(); // unsub
    this._store.dispatch(new GetMyUsers());
    this.sub = this._store.pipe(select(selectUsers)).subscribe(
      data => {
        this.users = data;
      }
    );
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
