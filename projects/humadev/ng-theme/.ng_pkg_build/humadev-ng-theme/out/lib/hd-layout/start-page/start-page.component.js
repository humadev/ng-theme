/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { intersection } from 'lodash-es';
export class StartPageComponent {
    /**
     * @param {?} menuService
     */
    constructor(menuService) {
        this.menuService = menuService;
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
            const /** @type {?} */ allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
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
StartPageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-start-page',
                template: `<div class="start-menu">
  <ng-template ngFor let-menu [ngForOf]="menus" let-i="index">
    <a class="item" [routerLink]="[menu.path]" *ngIf="menu.data.isMenu && checkGroupAccess(menu)">
      <img [src]="menu.data.icon">
      <span class='text'>{{menu.data.title}}</span>
      <span class='description'>{{menu.data.description}}</span>
    </a>
  </ng-template>
</div>
<div class='copyright'>
  <span>{{copyright}}</span>
</div>
`,
                styles: [`:host{background:#fff}:host .start-menu{position:fixed;overflow-y:scroll;bottom:20px;top:70px;padding:20px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:100vw;min-height:90vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;text-align:center}:host .start-menu .item{background-color:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;width:20%;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}`]
            },] },
];
/** @nocollapse */
StartPageComponent.ctorParameters = () => [
    { type: MenuService, },
];
StartPageComponent.propDecorators = {
    "menus": [{ type: Input },],
    "fromRouter": [{ type: Input },],
    "copyright": [{ type: Input },],
};
function StartPageComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StartPageComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StartPageComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    StartPageComponent.propDecorators;
    /** @type {?} */
    StartPageComponent.prototype.menus;
    /** @type {?} */
    StartPageComponent.prototype.fromRouter;
    /** @type {?} */
    StartPageComponent.prototype.copyright;
    /** @type {?} */
    StartPageComponent.prototype.menuService;
}
//# sourceMappingURL=start-page.component.js.map