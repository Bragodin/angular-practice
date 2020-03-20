import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { LoginUser } from 'src/app/features/store/actions/user.actions';
import { selectLogin } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-login-container',
  template: `<app-login [value]='value' (onSubmitEvent)='onSubmit($event)'></app-login>`,
})
export class LoginContainer implements OnInit, OnDestroy {
  value: boolean = false;
  sub: Subscription;
  constructor(private router: Router, private _store: Store<IAppState>) {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    if(token && id) {
      this.router.navigate([`/profile/${id}`]);
    }
  }
  ngOnInit() {}
  onSubmit(form): void{
    this._store.dispatch(new LoginUser(
      {
        login: form.value.email,
        password: form.value.password
      })
    );
    this.sub = this._store.pipe(select(selectLogin)).subscribe(
      data => {
        if(data !== null && localStorage.getItem('token')){
            return this.router.navigate([`/profile/${data._id}`]);
        }
      }
    )
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
