import { FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, Input, HostListener, AfterViewInit, ContentChild } from '@angular/core';
import { UploadFileDirective } from '../upload-file.directive';

@Component({
  selector: 'hd-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadContainerComponent implements AfterViewInit {

    @Input() placeholder = 'Upload file';
    @Input() hint = 'click to browse file';
    @ContentChild(UploadFileDirective) uploadFile: UploadFileDirective;

    constructor() {
    }

    @HostListener('click', ['$event'])
    onClick(e) {
        this.uploadFile.click();
    }

    ngAfterViewInit() {
        this.uploadFile.filename.subscribe(e => {
            this.placeholder = e;
        });
        this.uploadFile.base64.subscribe(e => {
            console.log(e);
        });
    }
}
