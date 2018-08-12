import { LayoutService } from './../../../services/layout.service';
import { Portal } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { OnInit, QueryList, ElementRef, Renderer2 } from '@angular/core';
export declare class MainToolbarNotificationComponent implements OnInit {
    overlay: Overlay;
    private _render;
    private _layout;
    menu: CdkOverlayOrigin;
    shake: ElementRef;
    blink: boolean;
    templatePortals: QueryList<Portal<any>>;
    constructor(overlay: Overlay, _render: Renderer2, _layout: LayoutService);
    ngOnInit(): void;
    clickMenu(e: any): void;
}
