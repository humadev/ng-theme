/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { intersection } from 'lodash-es';
export class ContextMenuPanelComponent {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.menuItemClicked = new EventEmitter();
        this.height = new BehaviorSubject(null);
        this.width = new BehaviorSubject(null);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.menuItemClicked.emit(item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.height.next(this._el.nativeElement.offsetHeight);
        this.width.next(this._el.nativeElement.offsetWidth);
    }
    /**
     * @param {?} groupAccess
     * @return {?}
     */
    checkGroupAccess(groupAccess) {
        if (groupAccess && groupAccess.permissions && groupAccess.groups) {
            const /** @type {?} */ allowed = intersection(groupAccess.permissions, groupAccess.groups).length > 0
                ? true
                : false;
            if (allowed) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
}
ContextMenuPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-menu-panel',
                template: `
    <div class="hd-context-menu-panel"
      fxLayout="column">
        <ng-template ngFor let-item [ngForOf]="menuItem">
            <a mat-button *ngIf="item.display !== false && checkGroupAccess(item.groupPermission)"
                (click)='onClick(item)'>
                    <mat-icon style="width:15%; font-size: 16px; height: auto">{{item.icon}}</mat-icon>
                    <div style="display: inline-block; width:75%">{{item.title}}</div>
                    <mat-icon style="width:10%" *ngIf='item.children && item.children.length'>keyboard_arrow_right</mat-icon>
            </a>
        </ng-template>
    </div>
  `,
                styles: [
                    `
        :host{
            max-height: 500px;
            overflow-y: scroll;
            position: fixed !important;
            min-width: 200px;
            display: block;
            z-index:10;
            box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }

        :host div a{
            display: block;
            text-align: left;
            padding:4px 10px;
            font-size:12px;
            md-icon{
                font-size:12px !important;
                height: 16px;
            }
        }

        :host div a md-icon{
            font-size:12px !important;
            height: 16px;
        }
    `
                ]
            },] },
];
/** @nocollapse */
ContextMenuPanelComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ContextMenuPanelComponent.propDecorators = {
    "menuItemClicked": [{ type: Output },],
    "menuItem": [{ type: Input },],
    "onContextMenu": [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};
function ContextMenuPanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ContextMenuPanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ContextMenuPanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ContextMenuPanelComponent.propDecorators;
    /** @type {?} */
    ContextMenuPanelComponent.prototype.menuItemClicked;
    /** @type {?} */
    ContextMenuPanelComponent.prototype.menuItem;
    /** @type {?} */
    ContextMenuPanelComponent.prototype.height;
    /** @type {?} */
    ContextMenuPanelComponent.prototype.width;
    /** @type {?} */
    ContextMenuPanelComponent.prototype._el;
}
//# sourceMappingURL=context-menu-panel.component.js.map