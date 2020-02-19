import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websoket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private websocketService: WebsocketService){
    this.websocketService.connection();
  }
  ngOnInit() { 
  }
}
