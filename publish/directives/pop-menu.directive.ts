import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hdPopMenu]',
  exportAs: 'hdPopMenu',
})
export class PopMenuDirective {

  constructor(
      public _el: ElementRef
  ) { }

}
