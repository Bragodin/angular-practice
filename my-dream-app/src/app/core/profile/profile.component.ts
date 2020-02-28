import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../features/services/users.service';
import { ActivatedRoute} from '@angular/router';
import { Pet } from '../../models/pet.model';
import { WebsocketService } from '../../features/services/websoket.service';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { Subscription } from 'rxjs';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';
import { GetMyUser } from 'src/app/features/store/actions/user.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() myProfilePage: boolean;
  @Input() firendRequest: boolean;
  user: User = {
    _id:"Do not upload",
    name:"Do not upload",
    surname:"Do not upload",
    login:"Do not upload",
    phone:"Do not upload",
    avatar:"Do not upload"
  };
  userPets: Pet[];
  id: string;
  photoUrl: string = '';
  buttonState: boolean = false;
  sub: Subscription;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService, private _store: Store<IAppState>) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this._store.dispatch(new GetMyUser(this.id));
    this.sub = this._store.pipe(select(selectUser)).subscribe(user => {
        if(user !== null){
          this.user = user;
          this.photoUrl = `http://localhost:3000/uploads/${user.avatar}`;
        } else {
          console.log('USER DON\'T UPOLOAD')
        }
      }
    );
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
