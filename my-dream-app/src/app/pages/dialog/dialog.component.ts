import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from 'src/app/features/services/websoket.service';
import { IAppState } from 'src/app/features/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/features/store/selectors/user.selectors';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/features/services/dialog.service';
import { GetMyDialog } from 'src/app/features/store/actions/dialog.actions';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() name: string;
  @Input() sub: Subscription;
  @Input() activeUserId: string;
  @Input() activeUser: User;
  @Input() messages: any;
  constructor(private websocketService: WebsocketService) { }
  ngOnInit() {
  }
  sendMessage(){
    this.websocketService.sendMessage(localStorage.getItem('id'), this.activeUser._id, this.name);
  }
}
