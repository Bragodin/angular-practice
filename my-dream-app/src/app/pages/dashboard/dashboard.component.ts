import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() users: User[];
  count: number = 5;
  constructor() {}
  ngOnInit() {
  }
}
