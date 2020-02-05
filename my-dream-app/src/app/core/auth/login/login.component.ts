import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

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
  constructor(private loginService: LoginService, private router: Router) {
    const id = localStorage.getItem('id');
    if(localStorage.getItem('token') && id){
      this.router.navigate([`/profile/${id}`]);
    }
  }
  ngOnInit() {}
  onSubmit(form){
    this.sub = this.loginService.login({
      login: form.value.email,
      password: form.value.password
    }).subscribe((data: any) => {
      this.router.navigate([`/profile/${data.user._id}`]);
    })
    this.subs.push(
    );
  }
  ngOnDestroy() {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe())
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
