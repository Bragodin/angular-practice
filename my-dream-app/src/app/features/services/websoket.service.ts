import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { Store, select } from '@ngrx/store';
import { GetNotifications } from '../store/actions/notifications.actions';
import { selectNotifications } from '../store/selectors/notifications.selectors';
import { IAppState } from '../store/state/app.state';

@Injectable()
export class WebsocketService {
  constructor(private socket: Socket, private _store: Store<IAppState>) {
    this.connection();
  }
  connection(){
    this.socket.emit('id', {id: localStorage.getItem('id')});
    this.socket.on('newFriend', (data) => {
      this._store.dispatch(new GetNotifications());
      // this._store.pipe(select(selectFriendsNotification));
      this._store.select(selectNotifications).subscribe(d => 
        console.log(d));
    })
  }
  sendNotification(userId, myId) {
    const data = { 
      myid: myId, 
      userid: userId
    };
    this.socket.emit('addToFriend', data);
  }
  checkNotification(){
    // this.socket.emit('addToFriend', (data) => {
    //   console.log(data)
    // });
  }
}
