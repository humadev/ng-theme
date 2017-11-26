import { Component, OnInit, ViewEncapsulation, Input, HostListener, ViewChild } from '@angular/core';
import { UploadFileDirective } from '../upload-file.directive';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'hd-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadContainerComponent implements OnInit, AfterViewInit {

    @Input() placeholder = 'Upload file';
    @Input() hint = 'click to browse file';
    @ViewChild(UploadFileDirective) uploadFile: UploadFileDirective;
    @HostListener('click', ['$event'])
    onClick(e) {
        this.uploadFile.click();
    }


    constructor() {
        console.log('construct', this.uploadFile);
    }

    ngOnInit() {
        console.log('On Init', this.uploadFile);
    }

    ngAfterViewInit() {
        console.log('After View Init', this.uploadFile);
    }

}
