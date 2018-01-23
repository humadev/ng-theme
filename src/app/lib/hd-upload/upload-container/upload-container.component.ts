import { FormControl } from '@angular/forms';
import {
    Component,
    ViewEncapsulation,
    Input,
    HostListener,
    AfterViewInit,
    ContentChild,
    ViewChild,
    ElementRef,
    Renderer2
} from '@angular/core';
import { UploadFileDirective } from '../upload-file.directive';

@Component({
  selector: 'hd-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadContainerComponent implements AfterViewInit {

    @Input() placeholder = 'Upload file';
    @Input() hint = '';
    @ContentChild(UploadFileDirective) uploadFile: UploadFileDirective;
    @ViewChild('filetoupload') uploadInput: ElementRef;
    filename: string;

    constructor(
        private render: Renderer2
    ) {
    }

    @HostListener('click', ['$event'])
    onClick(e) {
        this.uploadInput.nativeElement.click();
    }

    ngAfterViewInit() {
        this.render.listen(this.uploadInput.nativeElement, 'change', e => {
            if (e.target.files.length) {
                this.filename = e.target.files[0].name;
            }
            const fileList: FileList = e.target.files;
            if (fileList.length > 0) {
                const file: File = fileList[0];
                const myReader: FileReader = new FileReader();
                myReader.onloadend = (event) => {
                    const image = myReader.result;
                    this.uploadFile.setValue(image);
                }
                myReader.readAsDataURL(file);
            }
        });
    }

    @HostListener('dragover', ['$event']) public onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#999';
    }
    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#eee'
    }
    @HostListener('drop', ['$event']) public onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.dataTransfer.files.length) {
            this.filename = evt.dataTransfer.files[0].name;
        }
        const fileList: FileList = evt.dataTransfer.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            const myReader: FileReader = new FileReader();
            myReader.onloadend = (event) => {
                const image = myReader.result;
                this.uploadFile.setValue(image);
            }
            myReader.readAsDataURL(file);
        }
    }
}
