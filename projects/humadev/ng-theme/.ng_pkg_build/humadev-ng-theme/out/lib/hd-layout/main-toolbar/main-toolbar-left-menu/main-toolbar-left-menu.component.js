/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { MatDialog } from '@angular/material';
import { MenuService } from '../../../services/menu.service';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';
import { StartPageDialogComponent } from '../../start-page-dialog/start-page-dialog.component';
export class MainToolbarLeftMenuComponent {
    /**
     * @param {?} overlay
     * @param {?} menuService
     * @param {?} dialog
     */
    constructor(overlay, menuService, dialog) {
        this.overlay = overlay;
        this.menuService = menuService;
        this.dialog = dialog;
        this.startMenus = this.menuService.startMenu;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        this.dialog.open(StartPageDialogComponent, {
            width: '90vw',
            height: '90vh'
        });
        //   const config = new OverlayConfig({
        //     hasBackdrop: true,
        //     backdropClass: 'menu-overlay-backdrop',
        //     scrollStrategy: this.overlay.scrollStrategies.block(),
        //     positionStrategy: this.overlay
        //       .position()
        //       .connectedTo(
        //         this.menu.elementRef,
        //         { originX: 'start', originY: 'bottom' },
        //         { overlayX: 'start', overlayY: 'top' }
        //       )
        //   });
        //   const overlayRef = this.overlay.create(config);
        //   overlayRef.attach(this.templatePortals.first);
        //   overlayRef.backdropClick().subscribe(() => {
        //     overlayRef.dispose();
        //   });
    }
}
MainToolbarLeftMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-main-toolbar-left-menu',
                template: `<ul class="left-menu-list">
  <li class="left-menu-item" (click)="clickMenu($event)" cdk-overlay-origin #mainMenu="cdkOverlayOrigin">
    <a class="left-menu-link">
      <i class="icon flaticon-squares-3"></i>
      <span class="text">
        Main Menu
      </span>
      <!-- <i class="arrow la la-angle-down"></i> -->
      <!-- <i class="arrow la la-angle-right"></i> -->
    </a>
    <ng-template cdk-portal>
      <div class="left-menu-dropdown" [@fadeUp]="">
        <span class="arrow"></span>
        <ul class="left-dropdown-list">
          <li hd-left-menu-item *ngFor="let menu of startMenus">
            <a routerLink="/{{menu.path}}" class="left-dropdown-link">
              <i class="left-dropdown-link-icon">
                <img [src]="menu.data.icon">
              </i>
              <span class="left-dropdown-link-text">
                {{menu.data.title}}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </ng-template>
  </li>
</ul>
`,
                styles: [`@media (min-width:993px){:host{width:auto;float:left;display:table;height:100%;margin:0 0 0 10px;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list{list-style:none;margin:0;padding:0;display:table-row;height:100%;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list .left-menu-item{position:relative;height:100%;display:table-cell;vertical-align:middle;padding:0 10px}.left-menu-list .left-menu-item .left-menu-link{padding:0;display:table;position:relative;vertical-align:middle;height:100%;outline:0!important;cursor:pointer;text-decoration:none!important}.left-menu-list .left-menu-item .left-menu-link .text{color:#676c7b;font-weight:400;font-size:14px;text-transform:initial;width:auto;display:table-cell;height:100%;padding:0;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .text:hover{color:#214e8d!important}.left-menu-list .left-menu-item .left-menu-link .icon{color:#b8bece;font-size:18px;width:30px;text-align:left;padding:0;line-height:0;display:table-cell;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .arrow{color:#b9c1d4;font-size:14px;width:25px;text-align:right;vertical-align:middle;display:table-cell}.left-menu-list .left-menu-item .left-menu-link .arrow:hover{color:#214e8d!important}}`],
                animations: [fadeUp()]
            },] },
];
/** @nocollapse */
MainToolbarLeftMenuComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: MenuService, },
    { type: MatDialog, },
];
MainToolbarLeftMenuComponent.propDecorators = {
    "menu": [{ type: ViewChild, args: ['mainMenu',] },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};
function MainToolbarLeftMenuComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MainToolbarLeftMenuComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MainToolbarLeftMenuComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MainToolbarLeftMenuComponent.propDecorators;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.menu;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.templatePortals;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.startMenus;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.overlay;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.menuService;
    /** @type {?} */
    MainToolbarLeftMenuComponent.prototype.dialog;
}
//# sourceMappingURL=main-toolbar-left-menu.component.js.map