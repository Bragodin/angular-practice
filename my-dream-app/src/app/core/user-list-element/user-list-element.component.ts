import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store } from '@ngrx/store';
import { SetActiveUser } from 'src/app/features/store/actions/user.actions';
import { Router } from '@angular/router';
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
  @Input() rejectRequest: boolean;
  @Output() onRejectRequest = new EventEmitter<string>();
  constructor(private _store: Store<IAppState>) {
  }
  ngOnInit() {     
  }
  sendButtonEvent(user){
    this.onChanged.emit(user._id);
  }

  rejectRequestClick(id){
    this.onRejectRequest.emit(id);
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
  openDialog(){
    this._store.dispatch(new SetActiveUser(this.user));
  }
}
