import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../features/services/users.service';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/features/services/album.service';
import { UpdateAvatar } from 'src/app/features/store/actions/user.actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit, OnDestroy {
  name: string;
  surname: string;
  login: string;
  password: string;
  phone: String;
  file: object;
  sub: Subscription;
  imgURL: any;

  constructor(private usersService: UsersService,  private router: Router, private albumService: AlbumService, private _store: Store<IAppState>) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
  }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  addPhoto(event){
    let target = event.target || event.srcElement;
    this.file = target.files;
    var reader = new FileReader();
    reader.readAsDataURL(this.file[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  sendAvatar(){
    let id: string = localStorage.getItem('id');
    const formData = new FormData();  
    formData.append('profiles', this.file[0]);
    this.sub = this.albumService.sendAvatar(formData, id).subscribe(
      data => this._store.dispatch(new UpdateAvatar(data.avatar))
    );
  }
  changeUsers(){
    let id = localStorage.getItem('id');
    const user: any = {
      name: this.name,
      surname: this.surname,
      login: this.login,
      password: this.password,
      phone: this.phone
    }
      let userUpdate: any = {};
      for(let item in user){
        if(user[item] !== undefined){
          userUpdate[item] = user[item];
        }
      }
    if(id && user) {
      this.usersService.updateUsers(id, userUpdate);
      this.router.navigate([`/profile/${id}`]);
    }
  }
}
