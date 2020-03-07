import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  @Input() name: string;
  @Input() sub: Subscription;
  @Input() activeUserId: string;
  @Input() activeUser: User;
  @Input() messages: any; 
  @Output() onSend = new EventEmitter<string>();
  
  constructor() { }
  ngOnInit() {
  }
  sendMessage(){
    this.onSend.emit(this.name);
  }
}
