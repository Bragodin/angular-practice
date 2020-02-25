import { Directive, ViewContainerRef, Inject  } from '@angular/core';

@Directive({
  selector: '[appPopUp]'
})
export class PopUpDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
