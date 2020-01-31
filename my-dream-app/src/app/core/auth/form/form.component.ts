import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() requireAllfilds: boolean;
  @Output() onSubmit = new EventEmitter<NgForm>();
  // form: FormGroup;
  constructor() {}
  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.email,
    //     Validators.required
    //   ]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(6),
    //   ])
    // });
  }
  submit(form: NgForm){
    this.onSubmit.emit(form);
  }
}
