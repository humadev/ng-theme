/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LayoutService } from './../../../services/layout.service';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Component, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2, Input } from '@angular/core';
import { fadeUp, ringing } from '../../../animations/router.animation';
export class MainToolbarNotificationComponent {
    /**
     * @param {?} overlay
     * @param {?} _render
     * @param {?} _layout
     */
    constructor(overlay, _render, _layout) {
        this.overlay = overlay;
        this._render = _render;
        this._layout = _layout;
        this.blink = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._layout.showNotification.subscribe(res => {
            if (res) {
                this.blink = true;
                this._render.addClass(this.shake.nativeElement, 'm-animate-shake');
            }
            else {
                this.blink = false;
                this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        this.blink = false;
        this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
        const /** @type {?} */ config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay
                .position()
                .connectedTo(this.menu.elementRef, { originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' })
                .withOffsetX(-30)
        });
        const /** @type {?} */ overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
    }
}
MainToolbarNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-main-toolbar-notification]',
                template: `<a cdk-overlay-origin class="right-menu-item-link" #notification="cdkOverlayOrigin" (click)="clickMenu($event)">
    <span *ngIf='blink' class="notification-dot-blink m-animate-blink"></span>
    <span #shake class="right-menu-link-icon">
        <i class="flaticon-music-2"></i>
    </span>
</a>
<ng-template cdk-portal>
    <div class="notification-dropdown" [@fadeUp]="">
        <span class="arrow" style="left: 58%"></span>
        <div class="inner">
            <div class="header" style="background: url(./assets/notification.jpg); background-size: cover;">
                <span class="header-title">
                    9 New
                </span>
                <span class="header-subtitle">
                    User Notifications
                </span>
            </div>
            <ng-content></ng-content>
        </div>
    </div>
</ng-template>`,
                styles: [`:host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=" flaticon-"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.notification-dot-blink{left:50%;margin-left:-2px;position:absolute;top:11px;background-color:#f4516c;color:#fff;padding:0;line-height:4px;min-height:4px;min-width:4px;height:4px;width:4px;border-radius:100%;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}@-webkit-keyframes m-animate-blink{50%{opacity:0}}@keyframes m-animate-blink{50%{opacity:0}}@-webkit-keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}@keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}.m-animate-blink{-webkit-animation:1s step-start infinite m-animate-blink;animation:1s step-start infinite m-animate-blink;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.m-animate-shake{-webkit-animation:.1s ease-in .1s infinite alternate m-animate-shake;animation:.1s ease-in .1s infinite alternate m-animate-shake;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}`],
                animations: [fadeUp(), ringing()]
            },] },
];
/** @nocollapse */
MainToolbarNotificationComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: Renderer2, },
    { type: LayoutService, },
];
MainToolbarNotificationComponent.propDecorators = {
    "menu": [{ type: ViewChild, args: ['notification',] },],
    "shake": [{ type: ViewChild, args: ['shake',] },],
    "blink": [{ type: Input },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};
function MainToolbarNotificationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MainToolbarNotificationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MainToolbarNotificationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MainToolbarNotificationComponent.propDecorators;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype.menu;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype.shake;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype.blink;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype.templatePortals;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype.overlay;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype._render;
    /** @type {?} */
    MainToolbarNotificationComponent.prototype._layout;
}
//# sourceMappingURL=main-toolbar-notification.component.js.map