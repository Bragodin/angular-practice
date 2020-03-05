import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { Store, select } from '@ngrx/store';
import { GetNotifications } from '../store/actions/notifications.actions';
import { selectNotifications } from '../store/selectors/notifications.selectors';
import { IAppState } from '../store/state/app.state';
import { Subscribable, Subscription } from 'rxjs';
import { selectUser } from '../store/selectors/user.selectors';
import { User } from 'src/app/models/user.model';
import { selectDialogId } from '../store/selectors/dialog.selectors';

@Injectable()
export class WebsocketService {
  dialogId: string;
  constructor(private socket: Socket, private _store: Store<IAppState>) {
    this.connection();
  }
  connection(){
    this.socket.emit('id', {id: localStorage.getItem('id')});
    this._store.pipe(select(selectDialogId)).subscribe(
      data => this.dialogId = data
    );
    this.socket.on('newFriend', (data) => {
      this._store.dispatch(new GetNotifications());
      // this._store.pipe(select(selectFriendsNotification));
      this._store.select(selectNotifications).subscribe();
      });
      this.socket.on('showMessage', (data) => {
        console.log('Message: ')
        console.log(data)
        
      })
  }
  sendNotification(userId, myId) {
    const data = { 
      myid: myId, 
      userid: userId
    };
    this.socket.emit('addToFriend', data);
  }
  sendMessage(myId, userId, message){
    const data = { 
      myid: myId, 
      userid: userId,
      message: message,
      dialogId: this.dialogId
    };
    console.log(message)
    this.socket.emit('sendMessage', data);
  }
  checkNotification(){
    // this.socket.emit('addToFriend', (data) => {
    //   console.log(data)
    // });
  }
}
