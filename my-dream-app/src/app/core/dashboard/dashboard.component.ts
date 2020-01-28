import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user/users.service';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private usersService: UsersService) { 
    this.users = usersService.getUsers();
  }

  ngOnInit() {
  }

}
