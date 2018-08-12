import { Portal } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
export declare class MainToolbarProfileComponent {
    overlay: Overlay;
    private ls;
    imgProfile: string;
    name: string;
    email: string;
    menu: CdkOverlayOrigin;
    templatePortals: QueryList<Portal<any>>;
    constructor(overlay: Overlay, ls: LayoutService);
    clickMenu(e: any): void;
}
