import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../models/user.model';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit, OnDestroy {
  value: boolean= true;
  constructor(private usersService: UsersService, private loginService: LoginService,  private router: Router) { }
  register;
  ngOnInit() {

  }
  // ngOnDestroy() {
  //   if (this.register) {
  //     console.log('sssss'+this.register.unsubscribe());
  //     this.register.unsubscribe();
  //     this.register = null;
  //   }
  // }
  onSubmit(form){
    let user = {
      name: form.value.name,
      surname: form.value.surname,
      password: form.value.password,
      login: form.value.email,
      phone: form.value.phone
    } as User;
    this.register = this.loginService.register(user);
    this.register.subscribe(
      data => this.router.navigate([`/profile`]),
      error => console.log(error)
    );
  }
}