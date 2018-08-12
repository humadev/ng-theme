/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
export class PageToolbarComponent {
    /**
     * @param {?} _ls
     */
    constructor(_ls) {
        this._ls = _ls;
        this.pageTitle = '';
        _ls.pageTitle.subscribe(res => (this.pageTitle = res));
    }
    /**
     * @param {?} title
     * @return {?}
     */
    changePageTitle(title) {
        this.pageTitle = title;
    }
}
PageToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-page-toolbar',
                template: `
        <h3 class="title">
            {{pageTitle}}
        </h3>
        <hd-breadcrumb></hd-breadcrumb>
    `,
                styles: [
                    `
      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 0;
        vertical-align: middle;
      }
      .title {
        padding: 7px 25px 7px 0;
        font-family: Roboto;
        font-weight: 300;
        font-size: 1.55rem;
        font-weight: 500;
        vertical-align: middle;
        color: #3f4047;
      }
    `
                ]
            },] },
];
/** @nocollapse */
PageToolbarComponent.ctorParameters = () => [
    { type: LayoutService, },
];
function PageToolbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageToolbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageToolbarComponent.ctorParameters;
    /** @type {?} */
    PageToolbarComponent.prototype.pageTitle;
    /** @type {?} */
    PageToolbarComponent.prototype._ls;
}
//# sourceMappingURL=page-toolbar.component.js.map