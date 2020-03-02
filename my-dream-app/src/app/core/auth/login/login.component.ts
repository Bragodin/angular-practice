import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../features/services/login.service';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { LoginUser } from 'src/app/features/store/actions/user.actions';
import { selectLogin } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  login: string;
  password: string;
  value: boolean = false;
  sub: Subscription;
  subs: Subscription[] = [];
  constructor(private loginService: LoginService, private router: Router, private _store: Store<IAppState>) {
    const id = localStorage.getItem('id');
    if(localStorage.getItem('token') && id){
      this.router.navigate([`/profile/${id}`]);
    }
  }
  ngOnInit() {}
  onSubmit(form){
    // this.sub = this.loginService.login({
    //   login: form.value.email,
    //   password: form.value.password
    // }).subscribe((data: any) => {
    //   this.router.navigate([`/profile/${data.user._id}`]);
    // })
    this._store.dispatch(new LoginUser(
      {
        login: form.value.email,
        password: form.value.password
      })
    );

    this.sub =  this._store.pipe(select(selectLogin)).subscribe(
      data => {
        if(data !== null){
          // console.log('select login');
          // console.log(data);
          this.router.navigate([`/profile/${data._id}`]);
        }
      }
    )
    this.subs.push(this.sub);
  }
  ngOnDestroy() {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe())
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
