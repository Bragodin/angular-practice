import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  constructor(private _bottomSheetRef:MatDialogRef<PopUpComponent>) {}
  openLink(event: MouseEvent): void {
    event.preventDefault();
  }

}
