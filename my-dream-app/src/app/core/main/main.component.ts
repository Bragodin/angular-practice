import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Store } from '@ngrx/store';
import { GetUser } from 'src/app/features/store/actions/user.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private websocketService: WebsocketService, private _store: Store<any>){
    this.websocketService.connection();
  }
  ngOnInit() { 
    this._store.dispatch(new GetNotifications());
    this._store.dispatch(new GetUser());
  }
}


