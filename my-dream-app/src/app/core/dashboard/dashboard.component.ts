import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../features/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: Observable<User[]>;
  private id;
  private subscription: Subscription;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute) { 
  }
  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
