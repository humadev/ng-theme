import { LayoutService } from '../../services/layout.service';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { EventEmitter, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
export declare class MainToolbarComponent implements OnInit {
    private menuService;
    private renderer;
    private elRef;
    private layout;
    private router;
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
    menu: CdkOverlayOrigin;
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
    constructor(menuService: MenuService, renderer: Renderer2, elRef: ElementRef, layout: LayoutService, router: Router, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    toggleSidenav(): void;
    onSidenavToggle(): void;
    onLogout(): void;
    onChange(e: any): void;
}
