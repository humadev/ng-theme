import { ElementRef, Renderer2, Injector, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
export declare class UploadFileDirective implements OnInit {
    private _er;
    private inj;
    private render;
    control: NgControl;
    constructor(_er: ElementRef, inj: Injector, render: Renderer2);
    click(): void;
    ngOnInit(): void;
    setValue(value: any): void;
}
