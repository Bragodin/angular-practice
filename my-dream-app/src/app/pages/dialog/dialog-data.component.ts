import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/features/services/dialog.service';
import { GetMyDialog, PostMessage } from 'src/app/features/store/actions/dialog.actions';
import { User } from 'src/app/models/user.model';
import { selectMessages } from 'src/app/features/store/selectors/dialog.selectors';


@Component({
  selector: 'app-dialog-container',
  template: `<app-dialog [name]='name' (onSend)='sendMessage($event)' [sub] = 'sub' [activeUser]='activeUser' [messages]='messages'></app-dialog>`,
})
export class DialogDataComponent implements OnInit {
  name: string;
  sub: Subscription;
  activeUser: User;
  messages: any;

  constructor(private _store: Store<IAppState>, private dialogService: DialogService) { }

  ngOnInit() {
    this._store.pipe(select(selectMessages)).subscribe(
        data => this.messages = data
    );
    this._store.pipe(select(selectUser)).subscribe(
      data => {
        this.activeUser = data;
        this._store.dispatch(new GetMyDialog([localStorage.getItem('id'), this.activeUser._id]))
        }
      );
  }
  sendMessage(name){
    console.log(name)
    this._store.dispatch(new PostMessage(localStorage.getItem('id'), this.activeUser._id, name));
  }
}
