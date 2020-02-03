import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name: String = 'Vasia';
  surname: String = 'Grishkovets';
  users: User[];
  token: string = localStorage.getItem('token');
  constructor() { 
  }
  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem('token');
  }
}
