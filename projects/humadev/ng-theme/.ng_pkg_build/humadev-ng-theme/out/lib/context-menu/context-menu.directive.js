/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { Overlay, OverlayConfig, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ContextMenuService } from './context-menu.service';
export class ContextMenuDirective {
    /**
     * @param {?} ref
     * @param {?} render
     * @param {?} overlay
     * @param {?} _service
     */
    constructor(ref, render, overlay, _service) {
        this.ref = ref;
        this.render = render;
        this.overlay = overlay;
        this._service = _service;
        this.hdContextMenu = new EventEmitter();
        this.active = false;
        this.fakeElement = {
            getBoundingClientRect: () => ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            })
        };
        render.setStyle(ref.nativeElement, 'cursor', 'context-menu'); // add context-menu cursor to element used this directive
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        this._service.closeAllContextMenus();
        const /** @type {?} */ refs = this._service.getRef();
        if (refs) {
            refs.forEach((ref, index) => {
                this.render.removeClass(ref.nativeElement, 'hd-contextmenu-active');
            });
        }
        this._service.destroyAllRef();
        this._service.setRef(this.ref);
        this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active'); // coloring row with class
        this.createPanel(event);
        this.addPanelItem();
        this.watchItemClick();
        this.outsideListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    createPanel(event) {
        const /** @type {?} */ offsetX = event.offsetX;
        const /** @type {?} */ offsetY = event.offsetY;
        this.fakeElement.getBoundingClientRect = () => ({
            bottom: event.clientY,
            height: 0,
            left: event.clientX,
            right: event.clientX,
            top: event.clientY,
            width: 0
        });
        const /** @type {?} */ positionStrategy = this.overlay
            .position()
            .connectedTo(new ElementRef(this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
            .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
        const /** @type {?} */ config = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'contextmenu-overlay'
        });
        this.overlayRef = this.overlay.create(config);
        this._service.setContextMenuOverlay(this.overlayRef);
        const /** @type {?} */ contextMenu = new ComponentPortal(ContextMenuPanelComponent);
        this.panel = this.overlayRef.attach(contextMenu);
        this.active = true;
    }
    /**
     * @return {?}
     */
    addPanelItem() {
        this.panel.instance.menuItem = this.menuItem;
    }
    /**
     * @return {?}
     */
    watchItemClick() {
        this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(emitted => {
            emitted.callback(this.menuID);
        });
    }
    /**
     * @return {?}
     */
    outsideListener() {
        this.render.listen('document', 'click', event => {
            if (event.type === 'click' && event.button === 2) {
                return;
            }
            this._service.closeAllContextMenus();
            this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
            this.active = false;
        });
    }
}
ContextMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hdContextMenu]'
            },] },
];
/** @nocollapse */
ContextMenuDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: Overlay, },
    { type: ContextMenuService, },
];
ContextMenuDirective.propDecorators = {
    "hdContextMenu": [{ type: Output },],
    "menuID": [{ type: Input },],
    "menuItem": [{ type: Input },],
    "_overlayOrigin": [{ type: ViewChild, args: [CdkOverlayOrigin,] },],
    "contextMenuOrigin": [{ type: Input },],
    "onContextMenu": [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};
function ContextMenuDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ContextMenuDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ContextMenuDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ContextMenuDirective.propDecorators;
    /** @type {?} */
    ContextMenuDirective.prototype.hdContextMenu;
    /** @type {?} */
    ContextMenuDirective.prototype.menuID;
    /** @type {?} */
    ContextMenuDirective.prototype.menuItem;
    /** @type {?} */
    ContextMenuDirective.prototype._overlayOrigin;
    /** @type {?} */
    ContextMenuDirective.prototype.contextMenuOrigin;
    /** @type {?} */
    ContextMenuDirective.prototype.panel;
    /** @type {?} */
    ContextMenuDirective.prototype.clickWatcher$;
    /** @type {?} */
    ContextMenuDirective.prototype.overlayRef;
    /** @type {?} */
    ContextMenuDirective.prototype.active;
    /** @type {?} */
    ContextMenuDirective.prototype.fakeElement;
    /** @type {?} */
    ContextMenuDirective.prototype.ref;
    /** @type {?} */
    ContextMenuDirective.prototype.render;
    /** @type {?} */
    ContextMenuDirective.prototype.overlay;
    /** @type {?} */
    ContextMenuDirective.prototype._service;
}
//# sourceMappingURL=context-menu.directive.js.map