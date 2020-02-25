import { Component, OnInit, Input } from '@angular/core';
import { FriendsService } from 'src/app/features/services/friends.service';

@Component({
  selector: 'app-friend-item-in-list',
  templateUrl: './friend-item-in-list.component.html',
  styleUrls: ['./friend-item-in-list.component.css']
})
export class FriendItemInListComponent implements OnInit {

  constructor(private friendsService: FriendsService) { }
  @Input() user;
  ngOnInit() {
  }
  accept(id){
    this.friendsService.addToFriends({friend1: localStorage.getItem('id'), friend2: id}).subscribe(
      data => console.log(data)
    )
  }
}
