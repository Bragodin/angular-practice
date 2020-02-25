import { Component, OnInit, Input } from '@angular/core';
import { PopUpComponent } from 'src/app/core/pop-up/pop-up.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notificationState: boolean;
  constructor(private _bottomSheet:  MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(PopUpComponent);
  }
  ngOnInit(){

  }
}
