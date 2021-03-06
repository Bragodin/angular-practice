import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }
  @Input() photoName: string;
  @Input() notification: boolean;
  ngOnInit() {
  }
  getMyAvatar(){
    if(this.photoName){
      return {
        'background-image': `url(http://localhost:3000/uploads/${this.photoName})`
      }
    }
  }
  get isNotification(){
    return this.notification;
  }
}
