/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MatDialogRef } from '@angular/material';
import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { intersection } from 'lodash-es';
export class StartPageDialogComponent {
    /**
     * @param {?} menuService
     * @param {?} dialog
     */
    constructor(menuService, dialog) {
        this.menuService = menuService;
        this.dialog = dialog;
        this.fromRouter = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    }
    /**
     * @param {?} menu
     * @param {?=} asal
     * @return {?}
     */
    checkGroupAccess(menu, asal = '') {
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            /** @type {?} */
            const allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
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
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.dialog.close();
    }
}
StartPageDialogComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-start-page-dialog',
                template: `<button mat-icon-button color='warn' mat-dialog-close>
    <mat-icon aria-label="tutup menu ini">cancel</mat-icon>
</button>
<div
    class="start-menu"
    fxLayout='row wrap'
    fxLayout.xs="column"
    fxLayoutAlign="start start"
    fxLayoutAlign.xs="stretch start"
    fxLayoutGap.xs="10px">
    <ng-template ngFor let-menu [ngForOf]="menus" let-i="index">
        <a  class="item"
            [routerLink]="[menu.path]"
            *ngIf="menu.data.isMenu && checkGroupAccess(menu)"
            (click)="onClick($event)"
            fxFlex.xl="15"
            fxFlex.lg="20"
            fxFlex.md="25"
            fxFlex.sm="33"
            fxFlex.xs="100"
            fxFlexAlign="start"
            fxFlexAlign.xs="center">
        <img [src]="menu.data.icon">
        <span class='text'>{{menu.data.title}}</span>
        <span class='description'>{{menu.data.description}}</span>
        </a>
    </ng-template>
</div>`,
                styles: [`:host{background:#fff}:host .start-menu{padding:20px;text-align:center}:host .start-menu .item{display:inline-block;background-color:none;color:none;outline:0;border:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{color:none;background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}button{position:fixed}button .mat-icon{font-size:20px}`]
            },] },
];
/** @nocollapse */
StartPageDialogComponent.ctorParameters = () => [
    { type: MenuService },
    { type: MatDialogRef }
];
StartPageDialogComponent.propDecorators = {
    menus: [{ type: Input }],
    fromRouter: [{ type: Input }],
    copyright: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StartPageDialogComponent.prototype.menus;
    /** @type {?} */
    StartPageDialogComponent.prototype.fromRouter;
    /** @type {?} */
    StartPageDialogComponent.prototype.copyright;
    /** @type {?} */
    StartPageDialogComponent.prototype.menuService;
    /** @type {?} */
    StartPageDialogComponent.prototype.dialog;
}
//# sourceMappingURL=start-page-dialog.component.js.map