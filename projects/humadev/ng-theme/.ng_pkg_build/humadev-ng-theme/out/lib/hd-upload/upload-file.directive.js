/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';
export class UploadFileDirective {
    /**
     * @param {?} _er
     * @param {?} inj
     * @param {?} render
     */
    constructor(_er, inj, render) {
        this._er = _er;
        this.inj = inj;
        this.render = render;
        this.render.setStyle(this._er.nativeElement, 'display', 'none');
    }
    /**
     * @return {?}
     */
    click() {
        this._er.nativeElement.click();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.control = this.inj.get(NgControl);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.control.control.setValue(value);
    }
}
UploadFileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hdUploadFile]',
                exportAs: 'hdUploadFile'
            },] },
];
/** @nocollapse */
UploadFileDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    UploadFileDirective.prototype.control;
    /** @type {?} */
    UploadFileDirective.prototype._er;
    /** @type {?} */
    UploadFileDirective.prototype.inj;
    /** @type {?} */
    UploadFileDirective.prototype.render;
}
//# sourceMappingURL=upload-file.directive.js.map