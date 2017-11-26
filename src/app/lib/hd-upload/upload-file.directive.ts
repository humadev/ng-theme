import { Directive, ElementRef, HostListener, Output, Renderer2 } from '@angular/core';
import { EventEmitter } from 'events';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[hdUploadFile]',
  exportAs: 'hdUploadFile'
})
export class UploadFileDirective {

    filename = new BehaviorSubject('');
    base64 = new BehaviorSubject('');

  constructor(
      private _er: ElementRef,
      private control: NgControl,
      private render: Renderer2
  ) { }

  click() {
      this._er.nativeElement.click();
  }

  @HostListener('change', ['$event'])
  onChange(e) {
    this.filename.next(e.target.files[0].name);
    const fileList: FileList = e.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (event) => {
            const image = myReader.result;
            this.base64.next(image);
            this.render.setValue(this._er, image);
        }
        myReader.readAsDataURL(file);
    }
  }

}