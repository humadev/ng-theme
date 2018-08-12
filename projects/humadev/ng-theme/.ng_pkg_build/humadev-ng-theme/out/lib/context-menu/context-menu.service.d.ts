import { ElementRef } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
export declare class ContextMenuService {
    private contextMenu;
    private refs;
    constructor();
    setContextMenuOverlay(overlay: OverlayRef): void;
    getContextMenuOverlay(): OverlayRef[];
    closeAllContextMenus(): void;
    setRef(el: ElementRef): void;
    getRef(): ElementRef[];
    destroyAllRef(): void;
}
