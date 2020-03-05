import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUser, selectUsers } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-dashboard-container',
  template: `<app-dashboard [users]='users'></app-dashboard>`
})
export class DashboardContainerComponent implements OnInit, OnDestroy {
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
