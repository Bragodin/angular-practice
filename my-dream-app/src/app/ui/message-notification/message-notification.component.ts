import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['./message-notification.component.css']
})
export class MessageNotificationComponent implements OnInit {
  @Output() onChose = new EventEmitter();
  constructor() { }
  @Input() text: string;
  @Input() user: User;
  ngOnInit() {
  }
  goToMessage(){
    this.onChose.emit();
  }
}
