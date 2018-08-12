import { MatDialog } from '@angular/material';
import { MenuService } from '../../../services/menu.service';
import { Portal } from '@angular/cdk/portal';
import { Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { QueryList } from '@angular/core';
export declare class MainToolbarLeftMenuComponent {
    overlay: Overlay;
    private menuService;
    private dialog;
    menu: CdkOverlayOrigin;
    templatePortals: QueryList<Portal<any>>;
    startMenus: any[];
    constructor(overlay: Overlay, menuService: MenuService, dialog: MatDialog);
    clickMenu(e: any): void;
}
