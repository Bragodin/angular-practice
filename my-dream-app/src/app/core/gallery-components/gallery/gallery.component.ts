import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/models/album.model';
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
  constructor(private _store: Store<IAppState>) { }
  ngOnInit() {
  }
  ngOnDestroy(){
  }
  changeAddAlbumState(){
    this.addAlbumState = !this.addAlbumState;
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
    }
    this.delete.emit();
  }
}
