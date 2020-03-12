import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUser, selectUsers } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-dashboard-container',
  template: `<app-dashboard [users]='users'></app-dashboard>
             <app-pagination (onChangePage)='onChangePage($event)'></app-pagination>`
})
export class DashboardContainerComponent implements OnInit, OnDestroy {
  users: Observable<User[]>;
  private sub: Subscription;
  constructor(private _store: Store<IAppState>) {}
  ngOnInit() {
    this._store.dispatch(new GetMyUsers({page: 0, count: 5}));
    this._store.pipe(select(selectUser)).subscribe(); // unsub
    this.users = this._store.pipe(select(selectUsers));
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  onChangePage(page){
    this._store.dispatch(new GetMyUsers({page: page.page, count: page.count}));
  }
}
