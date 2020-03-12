import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../../../features/services/album.service';
import { Album } from 'src/app/models/album.model';
import { Photo } from '../../../models/photo.model';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store } from '@ngrx/store';
import { PostAlbum } from 'src/app/features/store/actions/albums.actions';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() albums: Album[];
  @Input() myProfilePage: boolean;
  @Output() delete = new EventEmitter<boolean>();
  albumName = new FormControl('', []);
  addAlbumState: boolean = false;
  constructor(private albumService: AlbumService, private _store: Store<IAppState>) { }
  ngOnInit() {
  }
  ngOnDestroy(){
  }
  changeAddAlbumState(){
    this.addAlbumState = !this.addAlbumState;
  }
  onDelete(){
    this.delete.emit();
  }
  submit(){
    const id = localStorage.getItem('id');
    if(id){
      const album: Album = {
        name: this.albumName.value.toString(),
        userId: id,
        photosName: []
    }
    this._store.dispatch(new PostAlbum(album));
    console.log('POST ALBUMMMMMMM')
    //   this.albumService.addAlbum(album).subscribe(
    //     data => {
    //       console.log(album)
    //       console.log(data)
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   );
    }
    this.delete.emit();
  }
}
