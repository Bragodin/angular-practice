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
import { PostFriend } from 'src/app/features/store/actions/friends.actions';

@Component({
  selector: 'app-profile-container',
  template: `<app-profile (onAdd)='addFriend($event)' [user]='user' [userPets]='userPets' [id]='id' [buttonState]='buttonState' [sub]='sub'></app-profile>`,
})
export class ProfileContainerComponent implements OnInit {
  @Input() myProfilePage: boolean;
  @Input() firendRequest: boolean;
  user: User;
  userPets: Pet[];
  id: string;
  buttonState: boolean = false;
  sub: Subscription;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService, private _store: Store<IAppState>) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this._store.dispatch(new GetMyUser(this.id));
    this.sub = this._store.pipe(select(selectUser)).subscribe(user => {
        if(user !== null && user){
          this.user = user;
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
  addFriend(friends){
    this._store.dispatch(new PostFriend(friends));
  }
}
