import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';
import { Store, select } from '@ngrx/store';
import { GetNotifications } from '../store/actions/notifications.actions';
import { selectNotifications } from '../store/selectors/notifications.selectors';
import { IAppState } from '../store/state/app.state';
import { selectDialogId } from '../store/selectors/dialog.selectors';
import { GetMessage } from '../store/actions/dialog.actions';
import { Subscription } from 'rxjs';

@Injectable()
export class WebsocketService {
  dialogId: string;
  private subs: Subscription[] = [];
  constructor(private socket: Socket, private _store: Store<IAppState>) {
    this.connection();
    this.subs.push(this._store.pipe(select(selectNotifications)).subscribe());
    this.subs.push(this._store.pipe(select(selectDialogId)).subscribe(
      data => this.dialogId = data
    ));
  }
  connection(){
    this.socket.emit('id', {id: localStorage.getItem('id')});
    //TODO переделать ! ! ! 
    
    this.socket.on('newFriend', (data) => {
      this._store.dispatch(new GetNotifications());
      // this._store.pipe(select(selectFriendsNotification));
      });
      this.socket.on('showMessage', (data) => {
        this._store.dispatch(new GetMessage({dialogId: this.dialogId, message: data.msg}))
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
  ngOnDestroy(){
    this.subs.forEach(elem => elem.unsubscribe());
  }
}
