/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LayoutService } from '../../services/layout.service';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
export class MainToolbarComponent {
    /**
     * @param {?} menuService
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} layout
     * @param {?} router
     * @param {?} breakpointObserver
     */
    constructor(menuService, renderer, elRef, layout, router, breakpointObserver) {
        this.menuService = menuService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.layout = layout;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.notification = false;
        this.profile = true;
        this.showSidenavToggle = true;
        this.sidenavOpen = true;
        this.sidenavToggle = new EventEmitter();
        this.logout = new EventEmitter();
        this.titleText = 'Humadev Theme';
        this.theme = 'dark';
        this.accountOpen = false;
        this.notificationOpen = false;
        this.messageOpen = false;
        this.topMenuOpen = false;
        this.brandClass = {
            minimize: false,
            hide: false
        };
        this.brandBackground = '#282a3c';
        this.brandToggle = {
            'toggler-right': false,
            'toggler-left': true
        };
        this.sidenav = true;
        this.minimize = new EventEmitter();
        this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.layout.sidebarOpen.subscribe(open => {
            this.sidenavOpen = open;
        });
        this.menuService.moduleActive.subscribe(res => {
            this.active = res;
        });
        if (this.theme === 'dark') {
            this.brandBackground = '#282a3c';
        }
        else {
            this.brandBackground = '#ffffff';
        }
    }
    /**
     * @return {?}
     */
    toggleSidenav() {
        // if (this.sidenav) {
        //   this.brandToggle['toggler-right'] = true;
        //   this.brandToggle['toggler-left'] = false;
        // } else {
        //   this.brandToggle['toggler-right'] = false;
        //   this.brandToggle['toggler-left'] = true;
        // }
        // this.sidenav = !this.sidenav;
        this.layout.sidebarOpen.next(this.sidenav);
        // this.brandClass.minimize = false;
    }
    /**
     * @return {?}
     */
    onSidenavToggle() {
        this.sidenavToggle.emit();
    }
    /**
     * @return {?}
     */
    onLogout() {
        this.logout.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        this.menuService.navigate(e.value);
    }
}
MainToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-main-toolbar',
                template: `<!-- BEGIN: Header -->
<!-- BEGIN: Brand -->
<div class="toolbar-brand" *ngIf="!sidenavOpen || (isHandset | async).matches || !showSidenavToggle">
  <div class="toggler" (click)='toggleSidenav()' *ngIf='showSidenavToggle'>
    <!-- BEGIN: Left Aside Minimize Toggle -->
    <a>
      <span></span>
    </a>
    <!-- END -->
  </div>
  <div class="logo" *ngIf="!(isHandset | async)!.matches">
    <a routerLink="">
      <img [src]="titleImg">
    </a>
  </div>
</div>
<!-- END: Brand -->
<div class="toolbar-menu">
  <ng-content></ng-content>
</div>
<!-- END: Header -->
`,
                styles: [`@media (min-width:993px){a.toggler-right span,a.toggler-right span:after,a.toggler-right span:before{background-color:#2739c1!important}.toolbar-menu{-webkit-box-flex:1;-ms-flex:1 auto;flex:1 auto;vertical-align:top;-webkit-transition:all .3s ease;transition:all .3s ease}}:host{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);overflow:hidden;z-index:101;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 0 15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.toolbar-brand.minimize .toggler a{text-align:center}.toggler-right:hover span:after,.toggler-right:hover span:before{width:100%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:before{left:auto;right:0;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:after{left:auto;right:0;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-left:hover span:after,.toggler-left:hover span:before{width:100%;-webkit-transition:all .4s ease;transition:all .4s ease}.toggler-left.toggler--active span:before{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:50%}.toggler-left.toggler--active span:after{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:75%}:host .m-header-head{background-color:#fff}@media (min-width:993px){.m-header .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease}:host .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:300px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}:host.minimize .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:70px}.m-header--fixed.m-header--fixed-hidable.m-header--hide .m-header{height:70px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed.m-header--fixed-hidable.m-header--show .m-header{height:70px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}:host{height:70px;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:999;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}@media (max-width:992px){:host{height:60px!important}:host .m-header__nav{top:-100%;position:relative}.m-header--fixed-mobile .m-header{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:101;position:fixed;top:0;left:0;right:0}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--hide .m-header{height:60px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--show .m-header{height:60px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}.m-header--fixed-mobile .m-header .m-header-head{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:3px!important}`],
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
MainToolbarComponent.ctorParameters = () => [
    { type: MenuService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LayoutService, },
    { type: Router, },
    { type: BreakpointObserver, },
];
MainToolbarComponent.propDecorators = {
    "notification": [{ type: Input },],
    "notificationList": [{ type: Input },],
    "profile": [{ type: Input },],
    "showSidenavToggle": [{ type: Input },],
    "sidenavOpen": [{ type: Input },],
    "sidenavToggle": [{ type: Output },],
    "logout": [{ type: Output },],
    "titleText": [{ type: Input },],
    "titleImg": [{ type: Input },],
    "theme": [{ type: Input },],
    "menu": [{ type: ViewChild, args: ['mainMenu',] },],
    "minimize": [{ type: Output },],
};
function MainToolbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MainToolbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MainToolbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MainToolbarComponent.propDecorators;
    /** @type {?} */
    MainToolbarComponent.prototype.notification;
    /** @type {?} */
    MainToolbarComponent.prototype.notificationList;
    /** @type {?} */
    MainToolbarComponent.prototype.profile;
    /** @type {?} */
    MainToolbarComponent.prototype.showSidenavToggle;
    /** @type {?} */
    MainToolbarComponent.prototype.sidenavOpen;
    /** @type {?} */
    MainToolbarComponent.prototype.sidenavToggle;
    /** @type {?} */
    MainToolbarComponent.prototype.logout;
    /** @type {?} */
    MainToolbarComponent.prototype.titleText;
    /** @type {?} */
    MainToolbarComponent.prototype.titleImg;
    /** @type {?} */
    MainToolbarComponent.prototype.theme;
    /** @type {?} */
    MainToolbarComponent.prototype.menu;
    /** @type {?} */
    MainToolbarComponent.prototype.active;
    /** @type {?} */
    MainToolbarComponent.prototype.accountOpen;
    /** @type {?} */
    MainToolbarComponent.prototype.notificationOpen;
    /** @type {?} */
    MainToolbarComponent.prototype.messageOpen;
    /** @type {?} */
    MainToolbarComponent.prototype.topMenuOpen;
    /** @type {?} */
    MainToolbarComponent.prototype.brandClass;
    /** @type {?} */
    MainToolbarComponent.prototype.brandBackground;
    /** @type {?} */
    MainToolbarComponent.prototype.brandToggle;
    /** @type {?} */
    MainToolbarComponent.prototype.sidenav;
    /** @type {?} */
    MainToolbarComponent.prototype.minimize;
    /** @type {?} */
    MainToolbarComponent.prototype.isHandset;
    /** @type {?} */
    MainToolbarComponent.prototype.menuService;
    /** @type {?} */
    MainToolbarComponent.prototype.renderer;
    /** @type {?} */
    MainToolbarComponent.prototype.elRef;
    /** @type {?} */
    MainToolbarComponent.prototype.layout;
    /** @type {?} */
    MainToolbarComponent.prototype.router;
    /** @type {?} */
    MainToolbarComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=main-toolbar.component.js.map