import { MatDialogRef } from '@angular/material';
import { OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
export declare class StartPageDialogComponent implements OnInit {
    private menuService;
    private dialog;
    menus: any;
    fromRouter: boolean;
    copyright: string;
    constructor(menuService: MenuService, dialog: MatDialogRef<StartPageDialogComponent>);
    ngOnInit(): void;
    checkGroupAccess(menu: any, asal?: string): boolean;
    onClick(e: any): void;
}
