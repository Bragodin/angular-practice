import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectNotifications } from 'src/app/features/store/selectors/notifications.selectors';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Subscription } from 'rxjs';
import { LogoutUser } from 'src/app/features/store/actions/user.actions';
import { selectLogout } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, DoCheck {
  token: string = localStorage.getItem('token');
  notificationState: boolean = false;
  notifications$ = this._store.pipe(select(selectNotifications));
  sub: Subscription;
  constructor(private router: Router, private _store: Store<IAppState>) { 
  }
  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  ngOnInit() {
    if(this.router.url === '/login'){                   //     переделать условие
      this._store.dispatch(new GetNotifications());    
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
    this.router.navigate([`/login`]);
    this._store.pipe(select(selectLogout)).subscribe(
      data => {
          this.router.navigate([`/login`]);
      }
    );
    // this.loginService.logout();
    // localStorage.removeItem('token');
    // localStorage.removeItem('id');
    // this.router.navigate([`/login`]);
  }
  ngDoCheck(){
    // this.token = localStorage.getItem('token');
  }
  getRoute(){
    return `/profile/${localStorage.getItem('id')}`
  }
}
