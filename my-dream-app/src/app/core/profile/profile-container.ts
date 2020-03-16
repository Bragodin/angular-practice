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
import { GetMyUser, SetActiveUser } from 'src/app/features/store/actions/user.actions';
import { PostFriend } from 'src/app/features/store/actions/friends.actions';
import { selectFriendsNotifications } from 'src/app/features/store/selectors/notifications.selectors';


@Component({
  selector: 'app-profile-container',
  template: `<app-profile (onAccept)='accept($event)' (onAdd)='addFriend($event)' [user]='user' [userPets]='userPets' [id]='id' [myProfilePage]='myProfilePage' [friendsNotificationState] ='friendsNotificationState' [buttonState]='buttonState'  [sub]='sub'></app-profile>`,
})
export class ProfileContainerComponent implements OnInit {
  @Input() myProfilePage: boolean;
  user: User;
  userPets: Pet[];
  friends: User[];
  id: string;
  buttonState: boolean = false;
  sub: Subscription;
  subs: Subscription[] = [];
  friendsNotification: string[];
  friendsNotificationState: boolean;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute, private websocketService: WebsocketService, private notificationsService: NotificationsService, private _store: Store<IAppState>) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnChanges(){
   this.friendsNotificationState = this.friendsNotificationState
  }
  ngOnInit() {
    this._store.dispatch(new GetMyUser(this.id));
    
    this.sub = this._store.pipe(select(selectUser)).subscribe(user => {
        if(user !== null && user){
          this.user = user;
        } else {
          console.log('USER DON\'T UPOLOAD');
        }
      }
    );
    this.subs.push(this.sub);
    this.sub = this._store.pipe(select(selectFriendsNotifications)).subscribe(friendsNotification => {
      this.friendsNotification = friendsNotification;
      this.isfHaveFriendNotification();
    });
    this.subs.push(this.sub);
    // this._store.pipe(select(selectFriends)).subscribe(
    //   data => {
    //     this.friends = data
    //     console.log(this.isAddToFriends())
    //   }
    // );
    // this.usersService.getUserPets(this.id).subscribe( user => {
    //   this.userPets = user[0].pets 
    // });
    
    // if(this.friends){
    //   this.isAddToFriends();
    //   console.log(this.isAddToFriends())
    // }
    // console.log('freiend req state button')
    // console.log(this.friendsNotificationState)
  }
  isfHaveFriendNotification(){
    let isHaveReq = this.friendsNotification.find((elem: any) => { 
      return elem._id === this.id
    });
    if(isHaveReq){
      this.friendsNotificationState = true;
    } else {
      this.friendsNotificationState = false;
    }
  }
  ngOnDestroy(){
    this.subs.forEach(elem => elem.unsubscribe());
  }
  addFriend(friends){
    this._store.dispatch(new PostFriend(friends));
  }
  // isAddToFriends(){
  //   if(this.user._id !== localStorage.getItem('id')){
  //     const isFriends = this.friends.find(elem => elem._id === this.user._id);
  //     if(!isFriends){
  //       return true; 
  //     } 
  //     else return false;
  //   } else {
  //     return false;
  //   }
  // }
  accept(friends){
    this._store.dispatch(new PostFriend(friends));
  }
}
