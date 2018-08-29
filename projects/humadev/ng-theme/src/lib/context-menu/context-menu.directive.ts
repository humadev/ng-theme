import { LayoutService } from '../services/layout.service';
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  Renderer2,
  ElementRef,
  ApplicationRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenu } from './context-menu';
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  CdkOverlayOrigin,
  CdkScrollable,
  ScrollDispatcher
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { ContextMenuService } from './context-menu.service';

@Directive({
  selector: '[hdContextMenu]'
})
export class ContextMenuDirective {
  @Output() hdContextMenu = new EventEmitter();
  @Input() menuID: any; // id dari row yg diklik kanan
  @Input() menuItem: [ContextMenu]; // data menu yg akan ditampikan, data ini sesuai dengan interface framework contextmenu
  @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin;
    @ViewChild('cdkScrollable') scroller: CdkScrollable;
  @Input() contextMenuOrigin: CdkOverlayOrigin;
  panel: any;
  clickWatcher$: any;
  overlayRef: OverlayRef;
  active = false;
  private fakeElement: any = {
    getBoundingClientRect: (): ClientRect => ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    })
  };

  constructor(
    private ref: ElementRef,
    private render: Renderer2,
    public overlay: Overlay,
    private _service: ContextMenuService,
    private scroll: ScrollDispatcher
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

    this._service.setRef(this.ref);
    this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active'); // coloring row with class
    this.createPanel(event);
    this.addPanelItem();
    this.watchItemClick();
    this.displayCallback();
    this.outsideListener();
  }

  private createPanel(event): void {
      console.log(event);
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    this.fakeElement.getBoundingClientRect = (): ClientRect => ({
      bottom: event.clientY,
      height: 0,
      left: event.clientX,
      right: event.clientX,
      top: event.clientY,
      width: 0
    });
    let x = event.clientX;
    let y = event.clientY;
    const windowWidth = window.screen.width;
    const windowHeight = window.screen.height;
    const availWidth = windowWidth - event.clientX;
    const availHeight = windowHeight - event.clientY;
      const positionStrategy = this.overlay
          .position()
          .flexibleConnectedTo(event.target).withPositions([{
              originX: 'start',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
              offsetX: event.offsetX,
              offsetY: event.offsetY,
          }
        ]).withGrowAfterOpen(true).withViewportMargin(10).withFlexibleDimensions(true);

      const config: OverlayConfig = new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
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
    this.menuItem.forEach(item => {
        if (typeof item.display === 'function') {
            item.display = item.display(this.menuID);
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
