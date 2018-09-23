import { LayoutService } from '../../../services/layout.service';
import { Router } from '@angular/router';
import { OnInit, QueryList, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
export declare class SidenavItemComponent implements OnInit {
    private router;
    private overlay;
    private ref;
    private layout;
    menu: any;
    index: any;
    nav: any;
    navFromRouter: any;
    templatePortals: QueryList<Portal<any>>;
    sidenavOpen: {
        minimize: boolean;
    };
    children: boolean;
    overlayRef: OverlayRef;
    onMinHover: boolean;
    hasAttached: boolean;
    listHover: boolean;
    constructor(router: Router, overlay: Overlay, ref: ElementRef, layout: LayoutService);
    ngOnInit(): void;
    parentOpen(i: any): void;
    isActive(instruction: any[]): boolean;
    toggleChildren(level: any): "active" | "inactive";
    childrenAndActive(level: any): boolean;
    onHover(e: MouseEvent): void;
    onLeave(e: any): void;
    onMinLeave(e: any): void;
}
