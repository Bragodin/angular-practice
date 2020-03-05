import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Store } from '@ngrx/store';
import { GetMyUser, GetAutorizationUser } from 'src/app/features/store/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private websocketService: WebsocketService, private _store: Store<any>, private router: Router){
    if(localStorage.getItem('token')){
      // this.websocketService.connection();
      this._store.dispatch(new GetMyUser(localStorage.getItem('id')));
      this._store.dispatch(new GetNotifications());
      this._store.dispatch(new GetAutorizationUser(localStorage.getItem('id')));
    } else {
      this.router.navigate([`/login`]);
    }
  }
  ngOnInit() { 
  }
}


