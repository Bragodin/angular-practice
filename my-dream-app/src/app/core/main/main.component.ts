import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { GetNotifications } from 'src/app/features/store/actions/notifications.actions';
import { Store, select } from '@ngrx/store';
import { GetUser } from 'src/app/features/store/actions/user.actions';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';
import { selectFriendsNotification } from 'src/app/features/store/selectors/notifications.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private websocketService: WebsocketService, private _store: Store<any>){
    this.websocketService.connection();
  }
  user$ = this._store.pipe(select(selectUser));
  notif$ = this._store.select(selectFriendsNotification)
  ngOnInit() { 
    this._store.dispatch(new GetNotifications());
    this._store.dispatch(new GetUser());
    this.user$.subscribe(
      data => console.log(data)
    );
  }
}


