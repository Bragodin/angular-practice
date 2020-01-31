import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  login: string;
  password: string;
  value: boolean = false;
  token: string;
  sub: any;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {}
  onSubmit(form){
    this.sub = this.loginService.login({
      login: form.value.email,
      password: form.value.password
    }).subscribe((data: any) => {
      this.token = data.token;
      localStorage.setItem('token', this.token);
      this.router.navigate([`/dashboard/profile/${data.user._id}`]);
    });
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
