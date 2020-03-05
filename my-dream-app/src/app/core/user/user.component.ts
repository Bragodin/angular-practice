import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../features/services/users.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { selectUsers } from 'src/app/features/store/selectors/user.selectors';

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
  page: number = 0;
  constructor(private usersService: UsersService, private _store: Store<IAppState>) {
    this._store.dispatch(new GetMyUsers(this.page));
    this.users = this._store.pipe(select(selectUsers));
  }
  ngOnInit() {
  }
  remove(id){
    this.usersService.remove(id);
  }
  changePage(n){
    console.log(n)
    console.log(this.page)
    if((this.page + n) >= 0){
      this.page = this.page + n
      this._store.dispatch(new GetMyUsers(this.page));
      this.users = this._store.pipe(select(selectUsers));
    }
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
