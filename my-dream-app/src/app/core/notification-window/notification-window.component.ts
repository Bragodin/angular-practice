import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-window',
  templateUrl: './notification-window.component.html',
  styleUrls: ['./notification-window.component.css']
})
export class NotificationWindowComponent implements OnInit {
  @Input() notificationText: string;
  constructor() { }
  ngOnInit() {
  }

}
