import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectNotifications } from 'src/app/features/store/selectors/notifications.selectors';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Subscription } from 'rxjs';
import { LogoutUser } from 'src/app/features/store/actions/user.actions';
import {  autorithationUsers } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  token: string;
  id: string;
  notificationState: boolean = false;
  notifications$ = this._store.pipe(select(selectNotifications));
  sub: Subscription;
  constructor(private router: Router, private _store: Store<IAppState>) { 
    this.id = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
  }
  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  ngOnInit() {
    if(this.router.url === '/login'){                  
      this._store.dispatch(new GetNotifications(this.id));    
    }
    this.sub = this.notifications$.subscribe(
      data => {
        if(data.friendsNotification.length || data.messageNotification.length){
          this.notificationState = true
        } else {
          this.notificationState = false
        }
      }
    )
  }
  get loggedIn() {
    return localStorage.getItem('token');
  }
  logOut(){
    this._store.dispatch(new LogoutUser());
    this._store.pipe(select(autorithationUsers)).subscribe(
      data => {
        if(data === null){
          this.router.navigate([`/login`]);
        }
      }
    );
  }
  getRoute(){
    return `/profile/${this.id}`
  }
}
