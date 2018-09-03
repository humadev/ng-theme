import {
    Directive,
    Input,
    Output,
    EventEmitter,
    HostListener,
    Renderer2,
    ElementRef
} from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenu } from './context-menu';
import {
    Overlay,
    OverlayConfig,
    OverlayRef,
    CdkOverlayOrigin
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ContextMenuService } from './context-menu.service';

@Directive({
    selector: '[hdContextMenu]'
})
export class ContextMenuDirective {
    @Output() hdContextMenu = new EventEmitter();
    @Input() menuID: any; // id dari row yg diklik kanan
    @Input() menuItem: [ContextMenu]; // data menu yg akan ditampikan, data ini sesuai dengan interface framework contextmenu
    @Input() contextMenuOrigin: CdkOverlayOrigin;
    panel: any;
    clickWatcher$: any;
    overlayRef: OverlayRef;
    active = false;

    constructor(
        private ref: ElementRef,
        private render: Renderer2,
        public overlay: Overlay,
        private _service: ContextMenuService
    ) {
        render.setStyle(ref.nativeElement, 'cursor', 'context-menu'); // add context-menu cursor to element used this directive
    }

    @HostListener('contextmenu', ['$event'])
    onContextMenu(event: MouseEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this._service.closeAllContextMenus();
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

    private createPanel(event): void {
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

        const config: OverlayConfig = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.overlayRef = this.overlay.create(config);
        this._service.setContextMenuOverlay(this.overlayRef);
        const contextMenu = new ComponentPortal(ContextMenuPanelComponent);
        this.panel = this.overlayRef.attach(contextMenu);

        this.active = true;
    }

    private addPanelItem(): void {
        this.panel.instance.menuItem = this.menuItem;
    }

    private watchItemClick(): void {
        this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(
            emitted => {
                emitted.callback(this.menuID);
            }
        );
    }

    private displayCallback(): void {
        this.menuItem.forEach((item, i) => {
            if (typeof item.display === 'function') {
                this.menuItem[i].displayCallback = item.display(this.menuID);
            } else if (typeof item.display === 'boolean') {
                this.menuItem[i].displayCallback = item.display;
            } else {
                this.menuItem[i].displayCallback = true;
            }
        });
    }

    private outsideListener(): void {
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
