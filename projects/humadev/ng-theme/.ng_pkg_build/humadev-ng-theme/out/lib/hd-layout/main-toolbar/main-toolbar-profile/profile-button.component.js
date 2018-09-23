/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
export class ProfileButtonComponent {
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
ProfileButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-button]',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`
    :host{
        display: block;
        padding: 20px 20px;
        padding-top:0;
    }
  `]
            },] },
];
/** @nocollapse */
ProfileButtonComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LayoutService }
];
if (false) {
    /** @type {?} */
    ProfileButtonComponent.prototype.render;
    /** @type {?} */
    ProfileButtonComponent.prototype.el;
    /** @type {?} */
    ProfileButtonComponent.prototype.ls;
}
//# sourceMappingURL=profile-button.component.js.map