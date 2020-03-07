import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../features/services/album.service';
import { Album } from '../../models/album.model';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  albums$: Observable<Album[]>;
  user$: Observable<User>;
  addAlbumState: boolean = false;
  id: string;
  firendRequest: boolean;
  userWithFriendRequest: any;
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private notificationsService: NotificationsService,
    // private _store: Store<IAppState>
    ) { }
  ngOnInit() {
    console.log(this.isMyProfile)
    this.getAlbums();
    // this.notificationsService.getUserNotifications(this.id).subscribe( data => {
    //   this.userWithFriendRequest = data.friendsNotification.find(elem => elem === myId);
    //   console.log(this.firendRequest);
    //   if(this.userWithFriendRequest){
    //     this.firendRequest = true;
    //   }
    // });
  }
  getAlbums(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.albums$ = this.albumService.getUserAlbums(this.id);
    });
  }
  get isMyProfile(): boolean {
      return localStorage.getItem('id') === this.id;
  }
  onDelete(){
    this.albums$ = this.albumService.getUserAlbums(this.id);
  }
}
