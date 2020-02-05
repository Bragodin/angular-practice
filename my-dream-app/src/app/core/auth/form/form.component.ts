import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { FormGroupDirective, NgForm} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


export class FormComponent implements OnInit {
  @Input() requireAllfilds: boolean;
  @Output() onSubmit = new EventEmitter<FormGroup>();
  authForm: FormGroup;

  constructor() {}

  ngOnInit() {
    const commonValidators = this.requireAllfilds ? [Validators.required]: [];
    this.authForm = new FormGroup({
      'name': new FormControl('', [
        ...commonValidators,
        Validators.pattern("^[A-Z]{1}[a-z]{1,}$")
      ]),
      'surname': new FormControl('', [
        ...commonValidators,
        Validators.pattern("^[A-Z]{1}[a-z]{1,}$")
      ]),
      'email': new FormControl('', [
        ...commonValidators,
        Validators.required, 
        Validators.email,
        Validators.pattern("^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$")
      ]),
      'password': new FormControl('', [
        ...commonValidators,
        Validators.required,
        Validators.pattern("^[A-Za-z0-9]{6,}")
      ]),
      'passwordRepeat': new FormControl('', [
        ...commonValidators,
        Validators.pattern("^[A-Za-z0-9]{6,}")
      ]),
      'phone': new FormControl('', [
        ...commonValidators,
        Validators.pattern("^(375(29|33|25|44)|\\+375\\s\\((29|33|25|44)\\)\\s|8\\s\\(0(29|33|25|44)\\)\\s)[1-9]{1}([0-9]{6}|[0-9]{2}-[0-9]{2}-[0-9]{2})$")
      ]),
    });
  }
  submit(){
    this.onSubmit.emit(this.authForm);
  }
}
