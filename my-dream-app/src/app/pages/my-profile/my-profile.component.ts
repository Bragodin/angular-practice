import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../features/services/album.service';
import { Album } from '../../models/album.model';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { NotificationsService } from 'src/app/features/services/notifications.service';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetAlbums } from 'src/app/features/store/actions/albums.actions';
import { selectAlbums } from 'src/app/features/store/selectors/albums.selectors';
import { GetMyUser } from 'src/app/features/store/actions/user.actions';

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
    private route: ActivatedRoute,
    private notificationsService: NotificationsService,
    private _store: Store<IAppState>
    ) { }
  ngOnInit() {
    this.albums$ = this._store.pipe(select(selectAlbums));
    this.getAlbums();
  }
  getAlbums(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this._store.dispatch(new GetMyUser(this.id));
      this._store.dispatch(new GetAlbums(this.id));
    });
  }
  get isMyProfile(): boolean {
    return localStorage.getItem('id') === this.id;
  }
}
