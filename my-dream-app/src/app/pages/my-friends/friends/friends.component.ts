import { Component, OnInit, OnDestroy } from '@angular/core';
import { FriendsService } from 'src/app/features/services/friends.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private friendsService: FriendsService) { }
  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  ngOnInit() {
    const id = localStorage.getItem('id');
    this.sub = this.friendsService.getMyFriends(id).subscribe();
  }
}
