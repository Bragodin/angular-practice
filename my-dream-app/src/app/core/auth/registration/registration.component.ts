import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../features/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { PostUser } from 'src/app/features/store/actions/user.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit {
  value: boolean= true;
  constructor(private loginService: LoginService,  private router: Router, 
    private _store: Store<IAppState>) { }
  register;
  sub: Subscription;
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
    this.sub = this.loginService.register(user).subscribe(
        (data: any) => {
          console.log(data)
          localStorage.setItem('id', data.user._id);
          localStorage.setItem('token', data.token);
          return  this.router.navigate([`/profile/${data.user._id}`])
        },
        error => console.log(error)
      );

    // this._store.dispatch(new PostUser(user));
    
  }
}