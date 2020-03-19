import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute} from '@angular/router';
import { Pet } from '../../models/pet.model';
import { WebsocketService } from '../../features/services/websoket.service';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { Subscription } from 'rxjs';
import { Friendship } from 'src/app/models/friendship.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() myProfilePage: boolean;
  @Input() user: User;
  @Input() userPets: Pet[];
  @Input() id: string;
  @Input() buttonState: boolean = false;
  @Input() sub: Subscription;
  @Output() onAdd = new EventEmitter<Friendship>();
  @Output() onAccept = new EventEmitter<any>();
  @Input() isFriend: boolean;
  @Input() friendsNotificationState: boolean;
  avatar: string;
  constructor(private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  showPets(){
    this.buttonState = !this.buttonState;
  }
  addFriend(){   
    const friend = localStorage.getItem('id');
    this.sub = this.notificationsService.addToFriends(this.id, friend).subscribe( data => {
      this.websocketService.sendNotification(this.id, localStorage.getItem('id'));
    });
    // this.onAdd.emit({friend1: this.id, friend2: friend});
  }
  accept(){
    this.friendsNotificationState = false;
    this.onAccept.emit({friend1: localStorage.getItem('id'), friend2: this.id})
  }
}
