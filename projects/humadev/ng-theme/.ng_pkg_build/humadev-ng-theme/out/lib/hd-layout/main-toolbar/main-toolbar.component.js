/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LayoutService } from '../../services/layout.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
export class MainToolbarComponent {
    /**
     * @param {?} menuService
     * @param {?} layout
     * @param {?} breakpointObserver
     */
    constructor(menuService, layout, breakpointObserver) {
        this.menuService = menuService;
        this.layout = layout;
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
            if (open) {
                this.brandToggle = {
                    'toggler-right': false,
                    'toggler-left': true
                };
            }
            else {
                this.brandToggle = {
                    'toggler-right': true,
                    'toggler-left': false
                };
            }
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
        this.layout.sidebarOpen.next(!this.layout.sidebarOpen.value);
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
<div class="toolbar-brand">
<div class="toggler" (click)='toggleSidenav()' *ngIf='showSidenavToggle'>
    <!-- BEGIN: Left Aside Minimize Toggle -->
    <a [ngClass]="brandToggle">
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
                styles: [`@media (min-width:993px){a.toggler-right span,a.toggler-right span:after,a.toggler-right span:before{background-color:#2739c1!important}.toolbar-menu{-webkit-box-flex:1;-ms-flex:1 auto;flex:1 auto;vertical-align:top;-webkit-transition:.3s;transition:.3s}}:host{overflow:hidden;z-index:101;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;width:100%;background-color:#fff}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:.3s;transition:.3s;height:70px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:.3s;transition:.3s;line-height:0;padding:15px 0 15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 0 15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:.4s;transition:.4s}.toolbar-brand .toggler a span{background:#2a61ac;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:.4s;transition:.4s}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#2a61ac;position:absolute;display:block;left:0;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:.4s;transition:.4s}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:.4s;transition:.4s;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:.4s;transition:.4s;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s;transition:width .4s}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s;transition:width .4s}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.toolbar-brand.minimize .toggler a{text-align:center}.toggler-right:hover span:after,.toggler-right:hover span:before{width:100%;-webkit-transition:width .4s;transition:width .4s}.toggler-right.toggler-active span:before{left:auto;right:0;width:50%;-webkit-transition:width .4s;transition:width .4s}.toggler-right.toggler-active span:after{left:auto;right:0;width:75%;-webkit-transition:width .4s;transition:width .4s}.toggler-left:hover span:after,.toggler-left:hover span:before{width:100%;-webkit-transition:.4s;transition:.4s}.toggler-left.toggler--active span:before{-webkit-transition:.4s;transition:.4s;left:0;right:auto;width:50%}.toggler-left.toggler--active span:after{-webkit-transition:.4s;transition:.4s;left:0;right:auto;width:75%}:host .m-header-head{background-color:#fff}@media (min-width:993px){:host{height:70px;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:999}.m-header .m-header-head{-webkit-transition:.3s;transition:.3s}:host .m-header-head{-webkit-transition:.3s;transition:.3s;padding-left:300px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}:host.minimize .m-header-head{-webkit-transition:.3s;transition:.3s;padding-left:70px}.m-header--fixed.m-header--fixed-hidable.m-header--hide .m-header{height:70px;-webkit-transition:.3s .5s;transition:.3s .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed.m-header--fixed-hidable.m-header--show .m-header{height:70px;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(0);transform:translateY(0)}}@media (max-width:992px){:host{height:70px!important}:host .m-header__nav{top:-100%;position:relative}.m-header--fixed-mobile .m-header{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:101;position:fixed;top:0;left:0;right:0}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--hide .m-header{height:60px;-webkit-transition:.3s .5s;transition:.3s .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--show .m-header{height:70px;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(0);transform:translateY(0)}.toolbar-brand{height:70px}.toolbar-brand .toggler{cursor:pointer}}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:3px!important}`],
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
MainToolbarComponent.ctorParameters = () => [
    { type: MenuService },
    { type: LayoutService },
    { type: BreakpointObserver }
];
MainToolbarComponent.propDecorators = {
    notification: [{ type: Input }],
    notificationList: [{ type: Input }],
    profile: [{ type: Input }],
    showSidenavToggle: [{ type: Input }],
    sidenavOpen: [{ type: Input }],
    sidenavToggle: [{ type: Output }],
    logout: [{ type: Output }],
    titleText: [{ type: Input }],
    titleImg: [{ type: Input }],
    theme: [{ type: Input }],
    minimize: [{ type: Output }]
};
if (false) {
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
    MainToolbarComponent.prototype.layout;
    /** @type {?} */
    MainToolbarComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=main-toolbar.component.js.map