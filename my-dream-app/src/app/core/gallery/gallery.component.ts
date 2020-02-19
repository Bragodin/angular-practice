import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from 'src/app/models/album.model';
import { Photo } from '../../models/photo.model';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  constructor(private albumService: AlbumService) { }
  ngOnInit() {
    console.log(this.myProfilePage);
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
      this.albumService.addAlbum(album).subscribe(
        data => {
          console.log(album)
          console.log(data)
        },
        error => {
          console.log(error)
        }
      );
    }
    this.delete.emit();
  }
}
