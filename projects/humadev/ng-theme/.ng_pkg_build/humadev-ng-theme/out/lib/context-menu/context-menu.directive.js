/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, Renderer2, ElementRef } from '@angular/core';
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
        /** @type {?} */
        const refs = this._service.getRef();
        if (refs) {
            refs.forEach((ref, index) => {
                this.render.removeClass(ref.nativeElement, 'hd-contextmenu-active');
            });
        }
        this._service.destroyAllRef();
        this.displayCallback();
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
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(event.target).withPositions([{
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
                offsetX: event.offsetX,
                offsetY: event.offsetY
            }, {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: event.offsetX,
                offsetY: event.offsetY
            }, {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                offsetX: event.offsetX,
                offsetY: event.offsetY
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                offsetX: event.offsetX,
                offsetY: event.offsetY
            }
        ]).withGrowAfterOpen(true).withViewportMargin(10).withFlexibleDimensions(true);
        /** @type {?} */
        const config = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.overlayRef = this.overlay.create(config);
        this._service.setContextMenuOverlay(this.overlayRef);
        /** @type {?} */
        const contextMenu = new ComponentPortal(ContextMenuPanelComponent);
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
    displayCallback() {
        this.menuItem.forEach((item, i) => {
            if (typeof item.display === 'function') {
                this.menuItem[i].displayCallback = item.display(this.menuID);
            }
            else if (typeof item.display === 'boolean') {
                this.menuItem[i].displayCallback = item.display;
            }
            else {
                this.menuItem[i].displayCallback = true;
            }
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
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: ContextMenuService }
];
ContextMenuDirective.propDecorators = {
    hdContextMenu: [{ type: Output }],
    menuID: [{ type: Input }],
    menuItem: [{ type: Input }],
    contextMenuOrigin: [{ type: Input }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ContextMenuDirective.prototype.hdContextMenu;
    /** @type {?} */
    ContextMenuDirective.prototype.menuID;
    /** @type {?} */
    ContextMenuDirective.prototype.menuItem;
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
    ContextMenuDirective.prototype.ref;
    /** @type {?} */
    ContextMenuDirective.prototype.render;
    /** @type {?} */
    ContextMenuDirective.prototype.overlay;
    /** @type {?} */
    ContextMenuDirective.prototype._service;
}
//# sourceMappingURL=context-menu.directive.js.map