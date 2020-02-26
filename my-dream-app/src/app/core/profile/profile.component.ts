import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../features/services/users.service';
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
  user: User = {
    name: 'String',
    surname: 'String',
    login: 'String',
    password: 'String',
    phone: 'String'
  };
  @Input() myProfilePage: boolean;
  @Input() firendRequest: boolean;
  userPets: Pet[];
  id: string;
  photoUrl: string = '';
  buttonState: boolean = false;
  sub: Subscription;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.usersService.getUserById(this.id).subscribe( user => {
      this.user = user;
      this.photoUrl = `http://localhost:3000/uploads/${user.avatar}`;
    });
    this.usersService.getUserPets(this.id).subscribe( user => {
      this.userPets = user[0].pets 
    });

  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  showPets(){
    this.buttonState = !this.buttonState;
  }
  ngDoCheck(){
  }
  getMyAvatar(){
    return {
      'background-image': `url(${this.photoUrl})`
    }
  }
  addToFriends(){
    const friend = localStorage.getItem('id');
    this.sub = this.notificationsService.addToFriends(this.id, friend).subscribe( data => {
      this.websocketService.sendNotification(this.id, localStorage.getItem('id'));
    });
  }
}
