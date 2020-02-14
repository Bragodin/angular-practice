import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  imagePath: object;
  imgURL: any;
  photoName: string;
  src: string;
  files: any;
  message: string;
  usersService: any;
  sub: Subscription;
  @Output() onDelete = new EventEmitter<boolean>();
  @Input() item: any;
  @Input() myProfilePage: boolean
  private subscriptions: Subscription[] = [];
  constructor(private albumService: AlbumService) { }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscriptions.forEach( elem => {
      elem.unsubscribe();
    });
  }
  addPhoto(event, inputFile, item){
    let target = event.target || event.srcElement;
    this.files = target.files;
    this.src = target.files[0];
    if (inputFile.length === 0)
      return;
    let mimeType = inputFile[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    const reader = new FileReader();
    this.imagePath = inputFile;
    reader.readAsDataURL(inputFile[0]); 
    reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    }
  }
  sendPhotos(item){
    let photoName: string;
    const formData = new FormData();
    let files: any = this.files;
    for(let i = 0; i < files.length; i++){
      formData.append('profiles', files[i]);
    }
    this.sub = this.albumService.sendPhotos(formData).subscribe((resp: any )=> {
      // photoName = resp[0].filename;
      // item.photosName.push(photoName);
      resp.forEach(elem => {
        item.photosName.push(elem.filename);
      });
      this.uppdateAlbum(item);
      error => { console.log(error) }
    });
    this.subscriptions.push(this.sub);
  }
  uppdateAlbum(item){
    this.sub = this.albumService.updateAlbum(item._id, item).subscribe(
      data => {},
      error => { console.log(error) }
    );
    this.subscriptions.push(this.sub);
  }
  removePhoto(item, image){
    item.photosName = item.photosName.filter( elem => elem !== image);
    this.sub = this.albumService.updateAlbum(item._id, item).subscribe(
      data => {
        if(data !== null){
          item.photosName = item.photosName.filter( elem => elem !== image);
        }  
      },
      error => { console.log(error) }
    );
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
