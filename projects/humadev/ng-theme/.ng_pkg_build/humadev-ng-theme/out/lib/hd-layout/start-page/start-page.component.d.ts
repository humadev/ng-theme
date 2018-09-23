import { OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
export declare class StartPageComponent implements OnInit {
    private menuService;
    menus: any;
    fromRouter: boolean;
    copyright: string;
    constructor(menuService: MenuService);
    ngOnInit(): void;
    checkGroupAccess(menu: any, asal?: string): boolean;
}
