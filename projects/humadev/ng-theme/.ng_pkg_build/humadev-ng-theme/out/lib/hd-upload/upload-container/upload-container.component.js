/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, HostListener, ContentChild, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { UploadFileDirective } from '../upload-file.directive';
export class UploadContainerComponent {
    /**
     * @param {?} render
     */
    constructor(render) {
        this.render = render;
        this.placeholder = 'Upload file';
        this.hint = '';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.uploadInput.nativeElement.click();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.render.listen(this.uploadInput.nativeElement, 'change', e => {
            if (e.target.files.length) {
                this.filename = e.target.files[0].name;
            }
            /** @type {?} */
            const fileList = e.target.files;
            if (fileList.length > 0) {
                /** @type {?} */
                const file = fileList[0];
                /** @type {?} */
                const myReader = new FileReader();
                myReader.onloadend = (event) => {
                    /** @type {?} */
                    const image = myReader.result;
                    this.uploadFile.setValue(image);
                };
                myReader.readAsDataURL(file);
            }
        });
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#999';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#eee'
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.dataTransfer.files.length) {
            this.filename = evt.dataTransfer.files[0].name;
        }
        /** @type {?} */
        const fileList = evt.dataTransfer.files;
        if (fileList.length > 0) {
            /** @type {?} */
            const file = fileList[0];
            /** @type {?} */
            const myReader = new FileReader();
            myReader.onloadend = (event) => {
                /** @type {?} */
                const image = myReader.result;
                this.uploadFile.setValue(image);
            };
            myReader.readAsDataURL(file);
        }
    }
}
UploadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-upload-container',
                template: `<ng-content></ng-content>
<div class='hd-upload-container'>
    <input type='file' #filetoupload style='display:none;'>
    <mat-icon>file_upload</mat-icon>
    <span class='hd-upload-placeholder'>{{placeholder}}</span>
    <span class='hd-upload-filename'>{{filename}}</span>
    <span class='hd-upload-hint'>{{hint}}</span>
</div>`,
                styles: [`.hd-upload-container{margin:15px 0;cursor:pointer;border:thin dashed #676c7b;color:#676c7b;padding:20px;text-align:center}.hd-upload-container .mat-icon{vertical-align:middle}.hd-upload-container .hd-upload-hint{text-align:center;display:block;font-size:10px}.hd-upload-container .hd-upload-filename{display:block;text-align:center;font-size:12px;min-height:18px}input[type=file]{display:none}`],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
UploadContainerComponent.ctorParameters = () => [
    { type: Renderer2 }
];
UploadContainerComponent.propDecorators = {
    placeholder: [{ type: Input }],
    hint: [{ type: Input }],
    uploadFile: [{ type: ContentChild, args: [UploadFileDirective,] }],
    uploadInput: [{ type: ViewChild, args: ['filetoupload',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    UploadContainerComponent.prototype.placeholder;
    /** @type {?} */
    UploadContainerComponent.prototype.hint;
    /** @type {?} */
    UploadContainerComponent.prototype.uploadFile;
    /** @type {?} */
    UploadContainerComponent.prototype.uploadInput;
    /** @type {?} */
    UploadContainerComponent.prototype.filename;
    /** @type {?} */
    UploadContainerComponent.prototype.render;
}
//# sourceMappingURL=upload-container.component.js.map