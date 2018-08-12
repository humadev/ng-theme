/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Component, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';
import { LayoutService } from '../../../services/layout.service';
export class MainToolbarProfileComponent {
    /**
     * @param {?} overlay
     * @param {?} ls
     */
    constructor(overlay, ls) {
        this.overlay = overlay;
        this.ls = ls;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        const /** @type {?} */ config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(this.menu.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }).withOffsetX(-265)
        });
        const /** @type {?} */ overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
        this.ls.closeOverlay.subscribe((res) => {
            if (res) {
                overlayRef.dispose();
            }
        });
    }
}
MainToolbarProfileComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-main-toolbar-profile]',
                template: `<a cdk-overlay-origin class="right-menu-item-link" #profile="cdkOverlayOrigin" (click)="clickMenu($event)">
<span class="right-menu-link-picture m--img-rounded m--marginless m--img-centered">
        <img [src]="imgProfile"/>
    </span>
    <span class="m-topbar__username hide">
        Nick
    </span>
</a>
<ng-template cdk-portal>
    <div class="profile-dropdown" [@fadeUp]="">
        <span class="arrow" style="left: 88%"></span>
        <div class="inner">
            <div class="header" style="background: url(./assets/profile.jpg); background-size: cover;">
                <div class="user-pic">
                    <img [src]="imgProfile"/>
                </div>
                <div class="details">
                    <span class="name">
                        {{name}}
                    </span>
                    <a [href]="'mail:'+email" class="email">
                        {{email}}
                    </a>
                </div>
            </div>
            <div class='content'>
                <ng-content></ng-content>
            </div>
        </div>
    </div>
</ng-template>`,
                styles: [`:host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link .right-menu-link-picture{display:table-cell;vertical-align:middle;text-align:center;margin:0 auto}.right-menu-item-link .right-menu-link-picture img{display:block;vertical-align:middle;max-width:41px!important;text-align:center;margin:0!important;border-radius:50%;border-style:none}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=" flaticon-"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.hide{display:none!important}.header{padding:20px;border-radius:6px 6px 0 0;margin:0;display:table;table-layout:fixed}.header .user-pic{display:table-cell;text-align:right;padding:0 5px 0 0;vertical-align:middle;width:70px}.header .user-pic img{max-width:70px!important;margin:0!important;border-radius:100%}.header .details{display:table-cell;width:100%;text-align:left;vertical-align:middle;padding:0 0 0 15px}.header .details .name{color:#fff;display:block;padding:0;font-size:1.3rem;font-weight:400;line-height:1}.header .details .email{color:#d9d9d9;display:inline-block;padding:6px 0 0;font-size:1rem;text-decoration:none;position:relative}`],
                animations: [fadeUp()]
            },] },
];
/** @nocollapse */
MainToolbarProfileComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: LayoutService, },
];
MainToolbarProfileComponent.propDecorators = {
    "imgProfile": [{ type: Input },],
    "name": [{ type: Input },],
    "email": [{ type: Input },],
    "menu": [{ type: ViewChild, args: ['profile',] },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};
function MainToolbarProfileComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MainToolbarProfileComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MainToolbarProfileComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MainToolbarProfileComponent.propDecorators;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.imgProfile;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.name;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.email;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.menu;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.templatePortals;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.overlay;
    /** @type {?} */
    MainToolbarProfileComponent.prototype.ls;
}
//# sourceMappingURL=main-toolbar-profile.component.js.map