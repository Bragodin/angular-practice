import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';

@Injectable()
export class WebsocketService {
  constructor(private socket: Socket) {
    this.socket.on('addToFriend', (data) => {
      console.log(data)
    })
  }
  sendNotification(myId, userId) {
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
