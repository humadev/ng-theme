/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.state = localStorage.getItem('humadev-theme');
        this.sidebarOpen.subscribe(isOpen => {
            /** @type {?} */
            const s = {
                sidebarOpen: isOpen
            };
            localStorage.setItem('humadev-theme', JSON.stringify(s));
        });
        if (this.state) {
            /** @type {?} */
            const s = JSON.parse(this.state);
            this.sidebarOpen.next(s.sidebarOpen);
        }
        else {
            /** @type {?} */
            const s = {
                sidebarOpen: true
            };
            localStorage.setItem('humadev-theme', JSON.stringify(s));
        }
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
if (false) {
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
    /** @type {?} */
    LayoutService.prototype.state;
}
//# sourceMappingURL=layout.service.js.map