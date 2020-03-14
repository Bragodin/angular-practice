import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../features/services/users.service';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/features/services/album.service';
import { UpdateAvatar, UpdateMyUser } from 'src/app/features/store/actions/user.actions';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/features/store/state/app.state';
import { autorithationUsers } from 'src/app/features/store/selectors/user.selectors';

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
  phone: string;
  file: object;
  sub: Subscription;
  imgURL: any;

  constructor(private router: Router, private albumService: AlbumService, private _store: Store<IAppState>) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
    this._store.pipe(select(autorithationUsers)).subscribe(
      data => {
        this.name = data.name;
        this.surname = data.surname;
        this.login = data.login;
        this.phone = data.phone;
        this.imgURL = `http://localhost:3000/uploads/${data.avatar}`
      }
    )
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
      data => {
        this._store.dispatch(new UpdateAvatar(data.avatar))
        alert('Photo is update')
      }
    );
  }
  changeUsers(){
    let id = localStorage.getItem('id');
    const user: User = {
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
      // this.usersService.updateUsers(id, userUpdate);
      // this.router.navigate([`/profile/${id}`]);
      this._store.dispatch(new UpdateMyUser(userUpdate));
      this.router.navigate([`/profile/${id}`]);
    }
  }
}
