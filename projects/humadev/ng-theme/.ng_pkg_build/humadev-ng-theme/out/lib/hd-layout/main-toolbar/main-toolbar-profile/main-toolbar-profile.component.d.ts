import { Portal } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { OnInit, QueryList } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
export declare class MainToolbarProfileComponent implements OnInit {
    overlay: Overlay;
    private ls;
    imgProfile: string;
    name: string;
    email: string;
    menu: CdkOverlayOrigin;
    templatePortals: QueryList<Portal<any>>;
    imageProfileClass: {};
    constructor(overlay: Overlay, ls: LayoutService);
    ngOnInit(): void;
    clickMenu(e: any): void;
}
