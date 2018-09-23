import { LayoutService } from '../../services/layout.service';
import { EventEmitter, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
export declare class MainToolbarComponent implements OnInit {
    private menuService;
    private layout;
    private breakpointObserver;
    notification: boolean;
    notificationList: Array<any>;
    profile: boolean;
    showSidenavToggle: boolean;
    sidenavOpen: boolean;
    sidenavToggle: EventEmitter<{}>;
    logout: EventEmitter<{}>;
    titleText: string;
    titleImg: string;
    theme: 'default' | 'dark' | 'light';
    active: any;
    accountOpen: boolean;
    notificationOpen: boolean;
    messageOpen: boolean;
    topMenuOpen: boolean;
    brandClass: {
        minimize: boolean;
        hide: boolean;
    };
    brandBackground: string;
    brandToggle: {
        'toggler-right': boolean;
        'toggler-left': boolean;
    };
    sidenav: boolean;
    minimize: EventEmitter<{}>;
    isHandset: Observable<BreakpointState>;
    constructor(menuService: MenuService, layout: LayoutService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    toggleSidenav(): void;
    onSidenavToggle(): void;
    onLogout(): void;
    onChange(e: any): void;
}
