import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
// enum buttonStates {
//   Accept,
//   Add,
//   Remove
// }

@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
  styleUrls: ['./user-list-element.component.css']
})

export class UserListElementComponent implements OnInit {
  name: string ='';
  surname: string ='';
  login: string ='';
  phone: string = '';
  password: string = '';
  @Input() index: number;
  @Input() user: User;
  @Input() buttonState: string;
  @Output() onChanged = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit() {     
  }
  sendButtonEvent(user){
    this.onChanged.emit(user._id);
  }
  getBackground(){
    if(this.index % 2 == 0){
      return {
        'background': `#D3D3D3`
      } 
    } else {
      return {
        'background': `#778899`
      }
    }
  }
}
