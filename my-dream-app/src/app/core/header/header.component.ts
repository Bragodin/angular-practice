import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router} from '@angular/router';
import { GeneralStateService } from '../../services/general-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: String = 'Vasia';
  surname: String = 'Grishkovets';
  users: User[];
  token: string = localStorage.getItem('token');
  notificationState: boolean = false;
  constructor(private loginService: LoginService, private router: Router, private generalStateService: GeneralStateService) { 
  }
  ngOnInit() {
    this.generalStateService.notificationsState.subscribe(data =>{
      this.notificationState = true;
    })
  }
  get loggedIn() {
    return localStorage.getItem('token');
  }
  logOut(){
    this.loginService.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate([`/login`]);
  }
  ngDoCheck(){
    this.token = localStorage.getItem('token');
  }
  getRoute(){
    return `/profile/${localStorage.getItem('id')}`
  }
}
