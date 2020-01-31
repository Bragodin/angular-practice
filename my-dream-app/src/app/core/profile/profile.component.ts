import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute} from '@angular/router';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    name: 'String',
    surname: 'String',
    login: 'String',
    password: 'String',
    phone: 'String'
  };
  userPets: Pet[];
  id: string;
  buttonState: boolean = false;
  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute) { 
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.usersService.getUserById(this.id).subscribe( user => {
      this.user = user;
    });
    this.usersService.getUserPets(this.id).subscribe( user => {
      this.userPets = user[0].pets;
    });
  }
  showPets(){
    this.buttonState = !this.buttonState;
  }
  ngDoCheck(){
    
  }
}
