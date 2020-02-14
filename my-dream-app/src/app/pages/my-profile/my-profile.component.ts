import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

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
  constructor(
    private albumService: AlbumService,
    // private usersService: UsersService,
    private route: ActivatedRoute,
    ) { }
  ngOnInit() {
    this.getAlbums();
  }
  getAlbums(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.albums$ = this.albumService.getUserAlbums(this.id);
      // this.user$ = this.usersService.getUserById(this.id);
    });
  }
  get isMyProfile(): boolean {
      return localStorage.getItem('id') === this.id;
  }
  onDelete(){
    this.albums$ = this.albumService.getUserAlbums(this.id);
  }
}
