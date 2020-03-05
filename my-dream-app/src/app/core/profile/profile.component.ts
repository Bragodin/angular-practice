import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute} from '@angular/router';
import { Pet } from '../../models/pet.model';
import { WebsocketService } from '../../features/services/websoket.service';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() myProfilePage: boolean;
  @Input() firendRequest: boolean;
  @Input() user: User;
  @Input() userPets: Pet[];
  @Input() id: string;
  @Input() buttonState: boolean = false;
  @Input() sub: Subscription;
  constructor(private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {}
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  showPets(){
    this.buttonState = !this.buttonState;
  }
  addToFriends(){
    const friend = localStorage.getItem('id');
    this.sub = this.notificationsService.addToFriends(this.id, friend).subscribe( data => {
      this.websocketService.sendNotification(this.id, localStorage.getItem('id'));
    });
  }
}
