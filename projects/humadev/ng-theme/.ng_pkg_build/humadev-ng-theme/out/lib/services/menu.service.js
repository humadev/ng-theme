/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { LayoutService } from './layout.service';
import { map, filter, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./layout.service";
export class MenuService {
    /**
     * @param {?} router
     * @param {?} activeRoute
     * @param {?} loc
     * @param {?} _ls
     */
    constructor(router, activeRoute, loc, _ls) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.loc = loc;
        this._ls = _ls;
        this.pageTitle = new BehaviorSubject('');
        this.lazyLoad = true;
        this.sidenav = new BehaviorSubject([]);
        this.moduleIndex = new Subject();
        this.startMenu = [];
        this.moduleActive = new Subject();
        this.router.events
            .pipe(map(event => {
            if (loc.path() !== '') {
                const /** @type {?} */ modulePath = loc.path().split('/')[1];
                this.moduleActive.next(modulePath);
                this.router.config.forEach((el, i) => {
                    if (el.path === modulePath) {
                        this.moduleIndex.next(i);
                    }
                });
            }
            return event;
        }), filter(event => event instanceof NavigationEnd), map(() => this.activeRoute), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), filter(route => route.outlet === 'primary'), switchMap(route => route.data))
            .subscribe(res => {
            this._ls.pageTitle.next(res["name"]);
            this.pageTitle.next(res["name"]);
        });
        if (this.lazyLoad) {
            this.moduleIndex.subscribe(res => {
                if (this.router.config[res]['_loadedConfig']) {
                    this.sidenav.next(this.router.config[res]['_loadedConfig'].routes[0].children);
                }
            });
        }
        else {
            this.sidenav.next(this.router.config);
        }
        this.startMenu = this.router.config;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        this.router.navigate(['/' + url]);
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: Location, },
    { type: LayoutService, },
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i1.Router), i0.inject(i1.ActivatedRoute), i0.inject(i2.Location), i0.inject(i3.LayoutService)); }, token: MenuService, providedIn: "root" });
function MenuService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuService.ctorParameters;
    /** @type {?} */
    MenuService.prototype.pageTitle;
    /** @type {?} */
    MenuService.prototype.lazyLoad;
    /** @type {?} */
    MenuService.prototype.sidenav;
    /** @type {?} */
    MenuService.prototype.moduleIndex;
    /** @type {?} */
    MenuService.prototype.startMenu;
    /** @type {?} */
    MenuService.prototype.moduleActive;
    /** @type {?} */
    MenuService.prototype.router;
    /** @type {?} */
    MenuService.prototype.activeRoute;
    /** @type {?} */
    MenuService.prototype.loc;
    /** @type {?} */
    MenuService.prototype._ls;
}
//# sourceMappingURL=menu.service.js.map