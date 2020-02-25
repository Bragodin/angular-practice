import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/features/services/users.service';

@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
  styleUrls: ['./user-list-element.component.css']
})
export class UserListElementComponent implements OnInit {
  users: Observable<User[]>;
  name: string ='';
  surname: string ='';
  login: string ='';
  phone: string = '';
  password: string = '';
  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }
  @Input() user: User;
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
    let updateUser = {
      name: user.name,
      surname: user.surname,
      login: user.login,
      phone: user.phone,
    }
    this.usersService.updateUsers(id, updateUser);
  }
}
