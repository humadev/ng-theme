import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { UploadFileDirective } from '../upload-file.directive';
export declare class UploadContainerComponent implements AfterViewInit {
    private render;
    placeholder: string;
    hint: string;
    uploadFile: UploadFileDirective;
    uploadInput: ElementRef;
    filename: string;
    constructor(render: Renderer2);
    onClick(e: any): void;
    ngAfterViewInit(): void;
    onDragOver(evt: any): void;
    onDragLeave(evt: any): void;
    onDrop(evt: any): void;
}
