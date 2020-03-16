import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostUser, GetMyUser, GetAutorizationUser, LoginUser } from 'src/app/features/store/actions/user.actions';
import { selectPostUser } from 'src/app/features/store/selectors/user.selectors';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { GetMyFriends } from 'src/app/features/store/actions/friends.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit, OnDestroy {
  value: boolean= true;
  constructor( private router: Router, private _store: Store<IAppState>) { }
  sub: Subscription;
  id: string = localStorage.getItem('id');
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  onSubmit(form){
    let user = {
      name: form.value.name,
      surname: form.value.surname,
      password: form.value.password,
      login: form.value.email,
      phone: form.value.phone,
      avatar: 'no_avatar.jpg'
    } as User;
      this._store.dispatch(new PostUser(user));
      this._store.dispatch(new LoginUser(
        {
          login: user.login,
          password: user.password
        })
      );
      this.sub = this._store.pipe(select(selectPostUser)).subscribe(data => {
        if(data !== null && localStorage.getItem('token')){
          return this.router.navigate([`/profile/${data._id}`])
        }
      });
  }
}