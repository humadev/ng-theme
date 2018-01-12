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
    ViewContainerRef } from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenu } from './context-menu';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayOrigin } from '@angular/cdk/overlay';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Directive({
  selector: '[hdContextMenu]'
})
export class ContextMenuDirective {

      @Output() hdContextMenu = new EventEmitter();
      @Input() menuID: any; // id dari row yg diklik kanan
      @Input() menuItem: [ContextMenu]; // data menu yg akan ditampikan, data ini sesuai dengan interface framework contextmenu
      panel: any;
      clickWatcher$: any;
      overlayRef: OverlayRef;
      active = false;

      constructor(
            private ref: ElementRef,
            private render: Renderer2,
            private ar: ApplicationRef,
            private vc: ViewContainerRef,
            public overlay: Overlay,
            public layoutService: LayoutService
      ) {
            render.setStyle(ref.nativeElement, 'cursor', 'context-menu'); // add context-menu cursor to element used this directive
      }

      @HostListener('contextmenu', ['$event'])
      onContextMenu(event: MouseEvent): void {
            event.preventDefault();
        if (!this.active) {
            this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active'); // coloring row with class
            this.createPanel(event);
            this.addPanelItem();
            // this.calcPosition(event);
            this.watchItemClick();
            this.outsideListener();
        }
      }

        private createPanel(event): void {
            let offsetX = event.offsetX;
            let offsetY = event.offsetY;
            if (event.path[0].nodeName === 'MAT-CELL') {
                offsetX = event.offsetX + event.path[0].offsetLeft;
                offsetY = event.offsetY + event.path[0].offsetHeight;
            }
            console.log(event.path);
            const positionStrategy = this.overlay.position()
                .connectedTo(
                this.ref,
                { originX: 'start', originY: 'top' },
                { overlayX: 'start', overlayY: 'top' });
            const config = new OverlayConfig({
                positionStrategy: positionStrategy.withOffsetX(offsetX).withOffsetY(offsetY),
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                panelClass: 'contextmenu-overlay'
            });
            this.overlayRef = this.overlay.create(config);
            const contextMenu = new ComponentPortal(ContextMenuPanelComponent);
            this.panel = this.overlayRef.attach(contextMenu);
            this.active = true;
      }

      private addPanelItem(): void {
            this.panel.instance.menuItem = this.menuItem;
      }

      private calcPosition(event): void {
            Observable.zip(this.panel.instance.width, this.panel.instance.height)
            .subscribe((dimension) => {
                  if (dimension[0] !== 0 && dimension[1] !== 0) {
                        const windowHeight = window.screen.availHeight;
                        const menuHeight = dimension[1];
                        const clickHeight = event.pageY;
                        const windowWidth = window.screen.availWidth;
                        const menuWidth = dimension[0];
                        const clickWidth = event.pageX;
                        const sisaHeight = windowHeight - clickHeight;
                        const sisaWidth = windowWidth - clickWidth;
                        let posisiTop = 0;
                        let posisiLeft = 0;
                        if (sisaHeight > menuHeight) {
                              posisiTop = clickHeight;
                        } else {
                              posisiTop = clickHeight - menuHeight;
                        }

                        if (sisaWidth > menuWidth) {
                              posisiLeft = clickWidth;
                        } else {
                              posisiLeft = clickWidth - menuWidth;
                        }
                        this.panel.instance.top = posisiTop;
                        this.panel.instance.left = posisiLeft;
                  }
            });
      }

      private watchItemClick(): void {
            this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(
                  (emitted) => {
                      emitted.callback(this.menuID);
                  }
            );
      }

      private outsideListener(): void {
            this.render.listen('document', 'click', (event) => {
                        this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
                        this.overlayRef.dispose();
                        this.active = false;
            });
            this.render.listen('document', 'contextmenu', (event) => {
                  if (!this.ref.nativeElement.contains(event.target)) {
                        this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
                        this.overlayRef.dispose();
                        this.active = false;
                  }
            });
      }
}
