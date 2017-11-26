import { Directive } from '@angular/core';

@Directive({
  selector: '[hdUploadFile]'
})
export class UploadFileDirective {

  constructor() { }

  click() {
      console.log('test');
  }

}
