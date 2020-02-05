import { Component, OnInit,  Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;
  name: string ='';
  surname: string ='';
  login: string ='';
  phone: string = '';
  password: string = '';
  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
   }
  ngOnInit() {
     
  }
  remove(id){
    this.usersService.remove(id);
  }
  add(){
    let user = {
      name: this.name,
      surname: this.surname,
      password: this.password,
      login: this.login,
      phone: this.phone,
    } as User;
    this.usersService.addUser(user);
  }
  changeUsers(id, user){
    this.usersService.updateUsers(id, user);
  }
}
