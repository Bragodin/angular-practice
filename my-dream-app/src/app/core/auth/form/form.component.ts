import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() requireAllfilds: boolean;
  @Output() onSubmit = new EventEmitter<FormGroup>();
  authForm: FormGroup;
  constructor() {}
  ngOnInit() {
    this.authForm = new FormGroup({
      'name': new FormControl('', [

        Validators.pattern("^[A-Z]{1}[a-z]{1,}$")
      ]),
      'surname': new FormControl('', [
        Validators.pattern("^[A-Z]{1}[a-z]{1,}$")
      ]),
      'email': new FormControl('', [
        Validators.required, 
        Validators.email,
        Validators.pattern("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$")
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9]{6,}")
      ]),
      'passwordRepeat': new FormControl('', [
        Validators.pattern("^[A-Za-z0-9]{6,}")
      ]),
      'phone': new FormControl('', [
        Validators.pattern("^(375(29|33|25|44)|\\+375\\s\\((29|33|25|44)\\)\\s|8\\s\\(0(29|33|25|44)\\)\\s)[1-9]{1}([0-9]{6}|[0-9]{2}-[0-9]{2}-[0-9]{2})$")
      ]),
    });
  }
  submit(){
    this.onSubmit.emit(this.authForm);
  }
}
