/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LayoutService {
    constructor() {
        this.pageTitle = new BehaviorSubject('');
        this.topProgressBar = new BehaviorSubject(false);
        this.lockScroll = new BehaviorSubject(false);
        this.sidebarOpen = new BehaviorSubject(true);
        this.closeOverlay = new BehaviorSubject(false);
        this.showNotification = new BehaviorSubject(false);
        this.closeOverlay.subscribe((res) => {
            if (res) {
                this.closeOverlay.next(false);
            }
        });
    }
}
LayoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LayoutService.ctorParameters = () => [];
/** @nocollapse */ LayoutService.ngInjectableDef = i0.defineInjectable({ factory: function LayoutService_Factory() { return new LayoutService(); }, token: LayoutService, providedIn: "root" });
function LayoutService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LayoutService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LayoutService.ctorParameters;
    /** @type {?} */
    LayoutService.prototype.pageTitle;
    /** @type {?} */
    LayoutService.prototype.topProgressBar;
    /** @type {?} */
    LayoutService.prototype.lockScroll;
    /** @type {?} */
    LayoutService.prototype.sidebarOpen;
    /** @type {?} */
    LayoutService.prototype.closeOverlay;
    /** @type {?} */
    LayoutService.prototype.showNotification;
}
//# sourceMappingURL=layout.service.js.map