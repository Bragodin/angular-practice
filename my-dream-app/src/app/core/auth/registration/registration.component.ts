import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit {
  value: boolean= true;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }
  onSubmit(form){
    let user = {
      name: form.value.name,
      surname: form.value.surname,
      password: form.value.password,
      login: form.value.email,
      phone: form.value.phone
    } as User;
    this.usersService.addUser(user);
  }
  
}
