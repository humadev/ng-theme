import { LayoutService } from '../../services/layout.service';
import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
export declare class SidenavComponent implements OnInit {
    private router;
    private menuService;
    layoutService: LayoutService;
    private breakpointObserver;
    titleImg: string;
    nav: any;
    lazyLoadModule: any;
    navFromRouter: any;
    lazyLoadPath: string;
    pageTitle: EventEmitter<{}>;
    moduleConfig: any;
    opened: boolean;
    sidenavClass: {
        minimize: boolean;
    };
    progressBar: boolean;
    sidenav: MatSidenav;
    isHandset: Observable<BreakpointState>;
    constructor(router: Router, menuService: MenuService, layoutService: LayoutService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    parentOpen(i: any): void;
    isActive(instruction: any[]): boolean;
    childrenAndActive(level: any): boolean;
    toggleChildren(level: any): "active" | "inactive";
    checkPath(row: any): {
        exact: boolean;
    };
    toggle(): void;
    checkHidden(navItem: any): boolean;
    setPageToolbar(item: any): void;
    checkGroupAccess(menu: any): boolean;
}
