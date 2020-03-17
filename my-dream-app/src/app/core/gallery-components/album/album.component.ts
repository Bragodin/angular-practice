import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Subscription, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store } from '@ngrx/store';
import { DeleteAlbums, PostPhotos, DeletePhotos } from 'src/app/features/store/actions/albums.actions';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})

export class AlbumComponent implements OnInit, OnDestroy {
  imagePath: object;
  urls: any[] = new Array<string>();
  photoName: string;
  files: any;
  usersService: Observable<User[]>;
  sub: Subscription;
  albumLength: number;
  @Input() item: Album;
  @Input() myProfilePage: boolean;
  private subscriptions: Subscription[] = [];
  constructor(private _store: Store<IAppState>) {
  }
  ngOnInit() {
    if(this.item.photosName){
      this.albumLength = this.item.photosName.length;
    }
  }
  ngOnDestroy(){
  }
  addPhoto(event){
    let target = event.target || event.srcElement;
    this.files = target.files;
    this.urls = [];
    if(this.files){
      for(let file of this.files){
        let reader = new FileReader();
        reader.onload = (_event: any) => { 
          this.urls.push(_event.target.result); 
        }
        reader.readAsDataURL(file);
      }
    }
  }
  sendPhotos(item){
    const formData = new FormData();
    let files: any = this.files;
    for(let i = 0; i < files.length; i++){
      formData.append('profiles', files[i]);
    }
    this._store.dispatch(new PostPhotos({formData: formData, item: item}));
  }
  removePhoto(image, itemId){
    console.log(itemId)
    this.item.photosName = this.item.photosName.filter( elem => elem !== image);
    this._store.dispatch(new DeletePhotos({ image: image.name, albumId: itemId}));
  }
  removeAlbum(item){
    this._store.dispatch(new DeleteAlbums(item._id));
  }
}
