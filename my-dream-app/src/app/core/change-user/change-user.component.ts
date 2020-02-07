import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../services/users.service';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';

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
  message: string;
  imagePath: object;
  imgURL: any;
  photoName: string;
  src: string;  //-------------------

  constructor(private usersService: UsersService,  private router: Router) { }
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
  addPhoto(event, inputFile){
    let target = event.target || event.srcElement;
    this.file = target.files;
    this.src = target.files[0];
    if (inputFile.length === 0)
      return;
    var mimeType = inputFile[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = inputFile;
    reader.readAsDataURL(inputFile[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  sendAvatar(){
    let id: string = localStorage.getItem('id');
    let avatarName: string;
    const formData = new FormData();
    let file: object = this.file;
    
    formData.append('profiles', file[0]);
    this.sub = this.usersService.addAvatar(formData).subscribe(resp => {
      avatarName = resp[0].filename;
      this.usersService.updateUsers(id, { avatar: avatarName });
    });
  }
  changeUsers(){
    let id = localStorage.getItem('id');
    const user = {
      name: this.name,
      surname: this.surname,
      login: this.login,
      password: this.password,
      phone: this.phone
    }
    if(id && user) {
      this.usersService.updateUsers(id, user);
      this.router.navigate([`/profile/${id}`]);
    }
  }
}
