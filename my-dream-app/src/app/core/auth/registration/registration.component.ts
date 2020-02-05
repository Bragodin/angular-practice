import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit {
  value: boolean= true;
  constructor(private loginService: LoginService,  private router: Router) { }
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
      phone: form.value.phone
    } as User;

    this.sub = this.loginService.register(user).subscribe(
        (data: any) => {
          localStorage.setItem('id', data.user._id);
          localStorage.setItem('token', data.token);
          return  this.router.navigate([`/profile/${data.user._id}`])
        },
        error => console.log(error)
      );
  }
}


// ngOnDestroy() {
//   if (this.sub) {
//     this.sub.unsubscribe();
//   }
// }
// onSubmit(form){
//   let user = {
//     name: form.value.name,
//     surname: form.value.surname,
//     password: form.value.password,
//     login: form.value.email,
//     phone: form.value.phone
//   } as User;
//   this.sub = this.loginService.register(user).subscribe(
//     data => this.router.navigate([`/profile/${data.user._id}`]),
//     error => console.log(error)
//   );
// }