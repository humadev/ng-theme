import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ContextMenu } from './context-menu';
import { BehaviorSubject } from 'rxjs';
export declare class ContextMenuPanelComponent implements AfterViewInit {
    private _el;
    menuItemClicked: EventEmitter<{}>;
    menuItem: [ContextMenu];
    height: BehaviorSubject<number>;
    width: BehaviorSubject<number>;
    constructor(_el: ElementRef);
    onClick(item: any): void;
    onContextMenu(event: MouseEvent): void;
    ngAfterViewInit(): void;
    checkGroupAccess(groupAccess: any): boolean;
}
