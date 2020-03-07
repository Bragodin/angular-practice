import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { Store, select } from '@ngrx/store';
import { GetNotifications } from '../store/actions/notifications.actions';
import { selectNotifications } from '../store/selectors/notifications.selectors';
import { IAppState } from '../store/state/app.state';
import { Subscribable, Subscription, fromEvent } from 'rxjs';
import { selectUser } from '../store/selectors/user.selectors';
import { User } from 'src/app/models/user.model';
import { selectDialogId } from '../store/selectors/dialog.selectors';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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

    //TODO переделать ! ! ! 
    
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
  sendMessage(data){
    this.socket.emit('sendMessage', data);
    return data;
  }
  checkNotification(){
    // this.socket.emit('addToFriend', (data) => {
    //   console.log(data)
    // });
  }
}
