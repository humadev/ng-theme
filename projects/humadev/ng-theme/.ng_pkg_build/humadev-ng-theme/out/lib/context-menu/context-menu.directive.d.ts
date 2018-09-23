import { EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { ContextMenu } from './context-menu';
import { Overlay, OverlayRef, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ContextMenuService } from './context-menu.service';
export declare class ContextMenuDirective {
    private ref;
    private render;
    overlay: Overlay;
    private _service;
    hdContextMenu: EventEmitter<{}>;
    menuID: any;
    menuItem: [ContextMenu];
    contextMenuOrigin: CdkOverlayOrigin;
    panel: any;
    clickWatcher$: any;
    overlayRef: OverlayRef;
    active: boolean;
    constructor(ref: ElementRef, render: Renderer2, overlay: Overlay, _service: ContextMenuService);
    onContextMenu(event: MouseEvent): void;
    private createPanel;
    private addPanelItem;
    private watchItemClick;
    private displayCallback;
    private outsideListener;
}
