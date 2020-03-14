import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { selectNotifications } from 'src/app/features/store/selectors/notifications.selectors';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(private _bottomSheetRef: MatDialogRef<PopUpComponent>, private _store: Store<IAppState>, private router: Router) {}
  friendsNotifications;
  messagesNotifications;
  onChose(value){
    this.router.navigate([value]);
    this._bottomSheetRef.close();
  }

  ngOnInit(){
    this._store.pipe(select(selectNotifications)).subscribe( 
      data => {
        this.friendsNotifications = data.friendsNotification;
        this.messagesNotifications = data.messageNotification;
      }
    );
  }
}

