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
             <app-pagination (onChangePage)='onChangePage($event)' [totalCount]='totalCount'></app-pagination>`
})
export class DashboardContainerComponent implements OnInit, OnDestroy {
  users: User[];
  totalCount: number;
  private sub: Subscription;
  constructor(private _store: Store<IAppState>) {}
  ngOnInit() {
    this._store.dispatch(new GetMyUsers({page: 1, count: 5}));
    this._store.pipe(select(selectUser)).subscribe(); // unsub
    this._store.pipe(select(selectUsers)).subscribe(
      data => {
        this.totalCount = +data[0].totalCount;      
        return this.users = data;
      }
    )

  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  onChangePage(page){
    console.log(page)
    this._store.dispatch(new GetMyUsers({page: page.page, count: page.count}));
  }
}
