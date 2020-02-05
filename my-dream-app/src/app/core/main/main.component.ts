import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, DoCheck {
  name: String = 'Vasia';
  surname: String = 'Grishkovets';
  users: User[];
  token: string = localStorage.getItem('token');
  constructor(private loginService: LoginService, private router: Router) { 
  }
  ngOnInit() {
  }
  get loggedIn() {
    return localStorage.getItem('token');
  }
  logOut(){
    this.loginService.logout();
    localStorage.removeItem('token');
    this.router.navigate([`/login`]);
  }
  ngDoCheck(){
    this.token = localStorage.getItem('token');
  }
  getRoute(){
    return `/profile/${localStorage.getItem('id')}`
  }
}
