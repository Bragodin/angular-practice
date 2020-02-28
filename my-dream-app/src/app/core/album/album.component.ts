import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Subscription, Observable } from 'rxjs';
import { AlbumService } from 'src/app/features/services/album.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})

export class AlbumComponent implements OnInit, OnDestroy {
  imagePath: object;
  urls: any[] = new Array<string>();;
  photoName: string;
  files: any;
  usersService: Observable<User[]>;
  sub: Subscription;
  @Output() onDelete = new EventEmitter<boolean>();
  @Input() item: any;
  @Input() myProfilePage: boolean;
  private subscriptions: Subscription[] = [];
  constructor(private albumService: AlbumService) { }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscriptions.forEach( elem => {
      elem.unsubscribe();
    });
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
    this.sub = this.albumService.sendPhotos(formData, item).subscribe(data => this.onDelete.emit());
    this.subscriptions.push(this.sub);
  }
  uppdateAlbum(item){
    this.sub = this.albumService.updateAlbum(item._id, item).subscribe(
      data => {this.onDelete.emit();},
      error => { console.log(error) }
    );
    this.subscriptions.push(this.sub);
  }
  removePhoto(item, image){
    item.photosName = item.photosName.filter( elem => elem !== image);
    this.sub = this.albumService.deltePhoto(image.name).subscribe( data => this.onDelete.emit());
    this.subscriptions.push(this.sub);
  }
  removeAlbum(item){
    this.sub = this.albumService.removeAlbum(item._id).subscribe( 
      data => { 
        this.onDelete.emit();
      },
      error => { console.log(error) }      
    );
    this.subscriptions.push(this.sub);
  }
}
