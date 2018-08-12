import { EventEmitter } from '@angular/core';
export declare class LayoutComponent {
    titleText: string;
    titleImg: string;
    lazyLoadModule: boolean;
    nav: any;
    notification: any;
    logout: EventEmitter<{}>;
    sidenavOpen: boolean;
    onLogout(): void;
}
