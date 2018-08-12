/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LayoutService } from '../../services/layout.service';
import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { slideToRight } from '../../animations/router.animation';
import { intersection } from 'lodash-es';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
export class SidenavComponent {
    /**
     * @param {?} render
     * @param {?} ref
     * @param {?} router
     * @param {?} activeRoute
     * @param {?} menuService
     * @param {?} layoutService
     * @param {?} breakpointObserver
     */
    constructor(render, ref, router, activeRoute, menuService, layoutService, breakpointObserver) {
        this.render = render;
        this.ref = ref;
        this.router = router;
        this.activeRoute = activeRoute;
        this.menuService = menuService;
        this.layoutService = layoutService;
        this.breakpointObserver = breakpointObserver;
        this.nav = false;
        this.lazyLoadModule = false;
        this.pageTitle = new EventEmitter();
        this.opened = false;
        this.sidenavClass = {
            minimize: false
        };
        this.progressBar = false;
        this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
        this.router.events.subscribe(() => this.layoutService.topProgressBar.next(true));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nav === false) {
            this.menuService.sidenav.subscribe(res => {
                this.navFromRouter = res;
            });
        }
        this.layoutService.sidebarOpen.subscribe(open => {
            if (open) {
                this.sidenav.open();
            }
            else {
                this.sidenav.close();
            }
        });
        this.layoutService.topProgressBar.subscribe(progress => (this.progressBar = progress));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // const content = this.ref.nativeElement.querySelector(
        //   '.mat-sidenav-content'
        // );
        // this.layoutService.sidebarOpen.subscribe(open => {
        //   this.render.addClass(content, 'animate-content');
        //   if (open) {
        //     this.render.setStyle(content, 'margin-left', '255px');
        //   } else {
        //     this.render.setStyle(content, 'margin-left', '70px');
        //   }
        // });
        // this.isHandset.subscribe(res => {
        //     if(res) {
        //         this.render.setStyle(content, 'margin-left', '0');
        //     }
        // })
    }
    /**
     * @param {?} i
     * @return {?}
     */
    parentOpen(i) {
        if (this.nav === false) {
            if (this.navFromRouter[i].isOpen === false ||
                !this.navFromRouter[i].hasOwnProperty('isOpen')) {
                this.navFromRouter[i].isOpen = true;
            }
            else {
                this.navFromRouter[i].isOpen = false;
            }
        }
        else {
            if (this.nav[i].isOpen === false ||
                !this.nav[i].hasOwnProperty('isOpen')) {
                this.nav[i].isOpen = true;
            }
            else {
                this.nav[i].isOpen = false;
            }
        }
    }
    /**
     * @param {?} instruction
     * @return {?}
     */
    isActive(instruction) {
        return this.router.isActive(this.router.createUrlTree(instruction), false);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    childrenAndActive(level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} level
     * @return {?}
     */
    toggleChildren(level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return 'active';
        }
        else {
            return 'inactive';
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    checkPath(row) {
        if (row.path === '') {
            return { exact: true };
        }
        else {
            return { exact: false };
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.sidenav.close();
        this.layoutService.sidebarOpen.next(false);
    }
    /**
     * @param {?} navItem
     * @return {?}
     */
    checkHidden(navItem) {
        let /** @type {?} */ hidden = false;
        if (navItem.hasOwnProperty('redirectTo')) {
            hidden = true;
        }
        else {
            if (navItem.hasOwnProperty('data')) {
                if (navItem.data.hasOwnProperty('hidden')) {
                    hidden = navItem.data.hidden;
                }
            }
        }
        return hidden;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setPageToolbar(item) {
        this.pageTitle.emit(item.name);
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
SidenavComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-sidenav',
                template: `<mat-progress-bar class="loader" mode="indeterminate" *ngIf='progressBar'></mat-progress-bar>
<mat-sidenav-container>
  <mat-sidenav #sidenav fixedInViewport='true' class="m-grid__item m-aside-left m-aside-left--skin-dark" [attr.role]="isHandset
? 'dialog' : 'navigation'" [mode]="(isHandset | async)!.matches ? 'over' : 'side'" [opened]="!(isHandset | async)!.matches || opened">
    <div class="toolbar-brand">
      <div class="logo">
        <a routerLink="">
          <img [src]="titleImg">
        </a>
      </div>
      <div class="toggler" *ngIf="(isHandset | async)!.matches ? false : true" (click)='toggle()'>
        <!-- BEGIN: Left Aside Minimize Toggle -->
        <a>
          <span></span>
        </a>
        <!-- END -->
      </div>
    </div>
    <div id="m_ver_menu" class="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark" data-menu-vertical="true"
      data-menu-scrollable="false" data-menu-dropdown-timeout="500">
      <ul *ngIf="nav === false; else fromVar" class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow">
        <ng-template ngFor let-level1 [ngForOf]="navFromRouter" let-i="index">
          <ng-template [ngIf]="checkHidden(level1) === false && checkGroupAccess(level1)">
            <li hd-sidenav-item cdk-overlay-origin class="m-menu__item" routerLinkActive="m-menu__item--active" routerLinkActiveOptions="{ exact: true }"
              aria-haspopup="true" [ngClass]="{'m-menu__item--open':childrenAndActive(level1)}" [menu]='level1' [nav]='nav'
              [navFromRouter]='navFromRouter' [index]='i'>
            </li>
          </ng-template>
        </ng-template>
      </ul>
      <ng-template #fromVar>
        <ng-template ngFor let-level1 [ngForOf]="nav" let-i="index">
          <ng-template [ngIf]="checkHidden(level1) === false && checkGroupAccess(level1)">
            <li hd-sidenav-item cdk-overlay-origin class="m-menu__item" routerLinkActive="m-menu__item--active" routerLinkActiveOptions="{ exact: true }"
              aria-haspopup="true" [ngClass]="{'m-menu__item--open':childrenAndActive(level1)}" [menu]='level1' [nav]='nav'
              [index]='i'>
            </li>
          </ng-template>
        </ng-template>
      </ng-template>
    </div>
  </mat-sidenav>
  <mat-sidenav-content>
    <ng-content></ng-content>
  </mat-sidenav-content>
</mat-sidenav-container>
`,
                styles: [`mat-sidenav-container{background:#f2f3f8;position:fixed;overflow:visible}.m-aside-left.m-aside-left--skin-dark{background-color:#2c2e3e}.m-aside-menu{height:calc(100vh - 70px);overflow-y:scroll}.m-aside-menu .m-menu__nav{list-style:none;padding:30px 0}dl,ol,ul{margin-top:0;margin-bottom:1rem}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}.m-aside-menu .m-menu__nav>.m-menu__item{position:relative;margin:0}.m-aside-menu .m-menu__nav .m-menu__item{display:block;float:none;height:auto;padding:0}.m-aside-menu .m-menu__nav .m-menu__submenu{display:block;float:none;margin:0;padding:0}.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__link .m-menu__link-bullet{vertical-align:middle;text-align:left;width:20px}.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__link .m-menu__link-bullet{display:table-cell;height:100%;vertical-align:middle;line-height:0}.mat-drawer{min-width:4vw!important}.mat-sidenav{width:255px}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;width:255px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;cursor:pointer;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.loader{position:fixed;height:2px;z-index:9999;top:0}`],
                animations: [slideToRight()]
            },] },
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: Router, },
    { type: ActivatedRoute, },
    { type: MenuService, },
    { type: LayoutService, },
    { type: BreakpointObserver, },
];
SidenavComponent.propDecorators = {
    "titleImg": [{ type: Input },],
    "nav": [{ type: Input },],
    "lazyLoadModule": [{ type: Input },],
    "navFromRouter": [{ type: Input },],
    "lazyLoadPath": [{ type: Input },],
    "pageTitle": [{ type: Output },],
    "opened": [{ type: Input },],
    "sidenav": [{ type: ViewChild, args: ['sidenav',] },],
    "toggle": [{ type: Output },],
};
function SidenavComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidenavComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidenavComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidenavComponent.propDecorators;
    /** @type {?} */
    SidenavComponent.prototype.titleImg;
    /** @type {?} */
    SidenavComponent.prototype.nav;
    /** @type {?} */
    SidenavComponent.prototype.lazyLoadModule;
    /** @type {?} */
    SidenavComponent.prototype.navFromRouter;
    /** @type {?} */
    SidenavComponent.prototype.lazyLoadPath;
    /** @type {?} */
    SidenavComponent.prototype.pageTitle;
    /** @type {?} */
    SidenavComponent.prototype.moduleConfig;
    /** @type {?} */
    SidenavComponent.prototype.opened;
    /** @type {?} */
    SidenavComponent.prototype.sidenavClass;
    /** @type {?} */
    SidenavComponent.prototype.progressBar;
    /** @type {?} */
    SidenavComponent.prototype.sidenav;
    /** @type {?} */
    SidenavComponent.prototype.isHandset;
    /** @type {?} */
    SidenavComponent.prototype.render;
    /** @type {?} */
    SidenavComponent.prototype.ref;
    /** @type {?} */
    SidenavComponent.prototype.router;
    /** @type {?} */
    SidenavComponent.prototype.activeRoute;
    /** @type {?} */
    SidenavComponent.prototype.menuService;
    /** @type {?} */
    SidenavComponent.prototype.layoutService;
    /** @type {?} */
    SidenavComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=sidenav.component.js.map