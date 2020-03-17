import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() value: boolean = false;
  @Output() onSubmitEvent = new EventEmitter()
  constructor() {
  }
  ngOnInit() {}
  onSubmit(form){
    this.onSubmitEvent.emit(form);
  }
}
