/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LayoutService } from '../../../services/layout.service';
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
export class ProfileItemComponent {
    /**
     * @param {?} render
     * @param {?} el
     * @param {?} ls
     */
    constructor(render, el, ls) {
        this.render = render;
        this.el = el;
        this.ls = ls;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', () => {
                this.ls.closeOverlay.next(true);
            });
        }
    }
}
ProfileItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-item]',
                template: `
    <span class="link">
        <i [class]="icon"></i>
        <span class="title">
            <span class="wrap">
                <span class="text">
                    <ng-content></ng-content>
                </span>
                <span class="link-badge" *ngIf="badge">
                    <span class="badge badge-success">
                        {{badge}}
                    </span>
                </span>
            </span>
        </span>
    </span>
  `,
                styles: [`:host{display:block;padding:0 20px}:host .link{display:table;table-layout:fixed;width:100%;height:100%;text-decoration:none;position:relative;outline:0!important;vertical-align:middle;padding:9px 0;-ms-touch-action:manipulation;touch-action:manipulation;color:#6f727d}:host .link .icon{display:table-cell;height:100%;vertical-align:middle;text-align:left;width:35px;font-size:1.4rem;line-height:0}:host .link .title{display:table-cell;height:100%;padding:0;margin:0;vertical-align:middle}:host .link .title .wrap{display:table;height:100%;margin:0;width:100%;padding:0;vertical-align:middle}:host .link .title .wrap .text{font-weight:400;display:table-cell;height:100%;width:100%;margin:0;padding:0;vertical-align:middle;font-size:1rem}:host .link .title .wrap .link-badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}:host .link .title .wrap .link-badge .badge{border-radius:10px;background:#eaeaea;color:#444;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px}:host .link .title .wrap .link-badge .badge.badge-success{background-color:#34bfa3;color:#fff}:host .link:hover{color:#2a61ac!important}:host:hover{background-color:rgba(113,106,202,.1);color:#2a61ac!important;cursor:pointer}`]
            },] },
];
/** @nocollapse */
ProfileItemComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LayoutService }
];
ProfileItemComponent.propDecorators = {
    badge: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProfileItemComponent.prototype.badge;
    /** @type {?} */
    ProfileItemComponent.prototype.icon;
    /** @type {?} */
    ProfileItemComponent.prototype.render;
    /** @type {?} */
    ProfileItemComponent.prototype.el;
    /** @type {?} */
    ProfileItemComponent.prototype.ls;
}
//# sourceMappingURL=profile-item.component.js.map