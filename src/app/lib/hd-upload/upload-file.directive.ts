import { Directive, ElementRef, Renderer2, Injector, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[hdUploadFile]',
  exportAs: 'hdUploadFile'
})
export class UploadFileDirective implements OnInit {

    control: NgControl;

    constructor(
        private _er: ElementRef,
        private inj: Injector,
        private render: Renderer2
    ) {
        this.render.setStyle(this._er.nativeElement, 'display', 'none');
    }

    click() {
        this._er.nativeElement.click();
    }

    ngOnInit() {
        this.control = this.inj.get(NgControl);
    }

    setValue(value) {
        this.control.control.setValue(value);
    }

}