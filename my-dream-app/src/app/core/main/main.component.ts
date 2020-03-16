import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Store } from '@ngrx/store';
import { GetMyUser, GetAutorizationUser, GetMyUsers } from 'src/app/features/store/actions/user.actions';
import { Router } from '@angular/router';
import { GetMyFriends } from 'src/app/features/store/actions/friends.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private _store: Store<any>, private router: Router){
    const id = localStorage.getItem('id');
    if(id){
      this._store.dispatch(new GetMyUser(id));
      this._store.dispatch(new GetNotifications());
      this._store.dispatch(new GetAutorizationUser(id));
      this._store.dispatch(new GetMyFriends(id));
    } else {
      this.router.navigate([`/login`]);
    }
  }
  ngOnInit() { 
  }
}


