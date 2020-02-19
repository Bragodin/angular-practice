import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';

@Injectable()
export class WebsocketService {
  constructor(private socket: Socket) {
    this.connection();
  }
  connection(){
    this.socket.emit('id', {id: localStorage.getItem('id')});
    this.socket.on('newFriend', (data) => {
      console.log(data)
    })
  }
  sendNotification(userId, myId) {
    const data = { 
      myid: myId, 
      userid: userId
    };
    this.socket.emit('addToFriend', data);
  }
  checkNotification(){
    // this.socket.emit('addToFriend', (data) => {
    //   console.log(data)
    // });
  }
}
