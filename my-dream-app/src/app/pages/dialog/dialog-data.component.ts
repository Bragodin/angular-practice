import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';
import { Subscription } from 'rxjs';
import { GetMyDialog, PostMessage } from 'src/app/features/store/actions/dialog.actions';
import { User } from 'src/app/models/user.model';
import { selectMessages } from 'src/app/features/store/selectors/dialog.selectors';
import { ActivatedRoute } from '@angular/router';
import { selectMessageNotifications } from 'src/app/features/store/selectors/notifications.selectors';
import { DeleteMessageNotification } from 'src/app/features/store/actions/notifications.actions';
import { GetMyUser } from 'src/app/features/store/actions/user.actions';


@Component({
  selector: 'app-dialog-container',
  template: `<app-dialog [name]='name' (onSend)='sendMessage($event)' [sub]='sub' [activeUser]='activeUser' [messages]='messages'></app-dialog>`,
})
export class DialogDataComponent implements OnInit {
  name: string;
  sub: Subscription;
  activeUser: User;
  messages: any;
  id: string;
  constructor(private _store: Store<IAppState>, private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
      this._store.pipe(select(selectMessageNotifications)).subscribe(
      data => {
        if(data){
          const isNaveNotification = data.find((elem: any) => {
            return elem._id === this.id
          });
          if(isNaveNotification){
            let data = { myId: localStorage.getItem('id'), userId: this.id };
            this._store.dispatch(new DeleteMessageNotification(data));
          }
        }
      });
    this._store.pipe(select(selectMessages)).subscribe(
        data => this.messages = data
    );
    this._store.pipe(select(selectUser)).subscribe(
      data => {
        this.activeUser = data;
        this._store.dispatch(new GetMyDialog([localStorage.getItem('id'), this.id]));
        }
      );
    this._store.dispatch(new GetMyUser(this.id))
  }
  sendMessage(name){
    let message = {
      myid: localStorage.getItem('id'), 
      userid: this.id,
      message: name,
    }
    this._store.dispatch(new PostMessage(message));
  }
}
