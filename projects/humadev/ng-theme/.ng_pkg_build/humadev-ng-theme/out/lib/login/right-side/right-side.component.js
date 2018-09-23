/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
export class RightSideComponent {
    /**
     * @param {?} _render
     * @param {?} _ref
     */
    constructor(_render, _ref) {
        this._render = _render;
        this._ref = _ref;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._render.setStyle(this._ref.nativeElement, 'background-image', 'url(' + this.background + ')'); // coloring row with class
    }
}
RightSideComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-right-side',
                template: `<ng-content></ng-content>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;border:none;height:100vh;background-attachment:fixed;background-size:cover;overflow:hidden}`]
            },] },
];
/** @nocollapse */
RightSideComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
RightSideComponent.propDecorators = {
    background: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RightSideComponent.prototype.background;
    /** @type {?} */
    RightSideComponent.prototype._render;
    /** @type {?} */
    RightSideComponent.prototype._ref;
}
//# sourceMappingURL=right-side.component.js.map