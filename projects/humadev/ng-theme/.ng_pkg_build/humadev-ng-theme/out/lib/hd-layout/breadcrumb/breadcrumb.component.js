/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
/**
 * @record
 */
export function IBreadcrumb() { }
/** @type {?} */
IBreadcrumb.prototype.label;
/** @type {?|undefined} */
IBreadcrumb.prototype.params;
/** @type {?} */
IBreadcrumb.prototype.url;
/** @type {?|undefined} */
IBreadcrumb.prototype.class;
export class BreadcrumbComponent {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let root = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        // used when navigate trough angular router
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
            // set breadcrumbs
            root = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
        });
    }
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const ROUTE_DATA_BREADCRUMB = 'name';
        /** @type {?} */
        const children = route.children;
        // return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        // iterate over each children
        for (const child of children) {
            // verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            // verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            /** @type {?} */
            const routeURL = child.snapshot.url
                .map(segment => segment.path)
                .join('/');
            // append route URL to URL
            url += `/${routeURL}`;
            /** @type {?} */
            const breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            if (child.snapshot.component) {
                breadcrumb.class = 'link';
            }
            else {
                breadcrumb.class = 'non-link';
            }
            breadcrumbs.push(breadcrumb);
            // recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-breadcrumb',
                template: `
            <ul class="hd-breadcrumb">
                  <li><a routerLink="">Home</a></li>
                  <li *ngFor="let breadcrumb of breadcrumbs">
                        <a
                        [routerLink]="[breadcrumb.url]"
                        *ngIf="breadcrumb.class == 'link'; else nonLink">
                              {{breadcrumb.label}}
                        </a>
                        <ng-template #nonLink>
                              <span>{{breadcrumb.label}}</span>
                        </ng-template>
                  </li>
            </ul>
      `
            },] },
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    BreadcrumbComponent.prototype.router;
    /** @type {?} */
    BreadcrumbComponent.prototype.activatedRoute;
}
//# sourceMappingURL=breadcrumb.component.js.map