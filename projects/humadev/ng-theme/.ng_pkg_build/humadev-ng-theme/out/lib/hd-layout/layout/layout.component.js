/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class LayoutComponent {
    constructor() {
        this.titleText = 'Humadev Theme';
        this.lazyLoadModule = false;
        this.nav = false;
        this.notification = false;
        this.logout = new EventEmitter();
        this.sidenavOpen = true;
    }
    /**
     * @return {?}
     */
    onLogout() {
        this.logout.emit();
    }
}
LayoutComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-layout',
                template: `
        <hd-main-toolbar
                [notification]="notification"
                (sidenavToggle)="sidenav.toggle()"
                (logout)="onLogout()"
                [titleText]="titleText"
                [titleImg]="titleImg">
        </hd-main-toolbar>
        <hd-sidenav #sidenav
                [opened]='sidenavOpen'
                (pageTitle)="pagebar.changePageTitle($event)"
                [lazyLoadModule]="lazyLoadModule"
                [nav]="nav">
                <hd-page-toolbar #pagebar></hd-page-toolbar>
                <div class='hd-page'>
                    <ng-content></ng-content>
                </div>
        </hd-sidenav>
    `
            },] },
];
/** @nocollapse */
LayoutComponent.propDecorators = {
    "titleText": [{ type: Input },],
    "titleImg": [{ type: Input },],
    "lazyLoadModule": [{ type: Input },],
    "nav": [{ type: Input },],
    "notification": [{ type: Input },],
    "logout": [{ type: Output },],
};
function LayoutComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LayoutComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LayoutComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LayoutComponent.propDecorators;
    /** @type {?} */
    LayoutComponent.prototype.titleText;
    /** @type {?} */
    LayoutComponent.prototype.titleImg;
    /** @type {?} */
    LayoutComponent.prototype.lazyLoadModule;
    /** @type {?} */
    LayoutComponent.prototype.nav;
    /** @type {?} */
    LayoutComponent.prototype.notification;
    /** @type {?} */
    LayoutComponent.prototype.logout;
    /** @type {?} */
    LayoutComponent.prototype.sidenavOpen;
}
//# sourceMappingURL=layout.component.js.map