import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivePhotoComponent } from '../active-photo/active-photo.component';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() image;
  @Input() height;
  @Input() width: number;
  @Input() myProfilePage: number;
  @Output() removePhotoEvent = new EventEmitter<string>();

  constructor(private _bottomSheet:  MatDialog) { }
  ngOnInit() {
  }
  removePhoto(image){
    this.removePhotoEvent.emit(image);
  }
  openBottomSheet(): void {
    this._bottomSheet.open(ActivePhotoComponent, { data: this.image});
  }
}
