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
import { contextmenu } from './context-menu';
import { ComponentInjectionService } from './../services/component-injection.service';

@Directive({
  selector: '[hdContextMenu]'
})
export class ContextMenuDirective {

      @Output() hdContextMenu = new EventEmitter();
      @Input() menuID: any; // id dari row yg diklik kanan
      @Input() menuItem: [contextmenu]; // data menu yg akan ditampikan, data ini sesuai dengan interface framework contextmenu
      panel: any;
      clickWatcher$: any;

      constructor(
            private ref: ElementRef,
            private render: Renderer2,
            private ar: ApplicationRef,
            private cis: ComponentInjectionService,
            private vc: ViewContainerRef
      ) {
            render.setStyle(ref.nativeElement, 'cursor','context-menu'); // add context-menu cursor to element used this directive
      }

      @HostListener('contextmenu', ['$event'])
      onContextMenu(event: MouseEvent): void {
            event.preventDefault();
            if (this.panel) {
                this.ar.detachView(this.panel.hostView);
            }
            this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active'); // coloring row with class
            this.createPanel();
            this.addPanelItem();
            this.calcPosition(event);
            this.outsideListener();
            this.watchItemClick();
      }

      private createPanel(): void {
            this.panel = this.cis.appendComponent(ContextMenuPanelComponent, {menuID: this.menuID});
      }

      private addPanelItem(): void {
            this.panel.instance.menuItem = this.menuItem;
      }

      private calcPosition(event): void {
            this.panel.instance.top = event.pageY;
            this.panel.instance.left = event.pageX;
      }

      private watchItemClick(): void {
            this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(
                  (emitted, i) => {
                        this.hdContextMenu.emit({method:emitted, index:this.menuID});
                  }
            );
      }

      private outsideListener(): void {
            this.render.listen('document', 'click',(event) => {
                        this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
                        // this.clickWatcher$.unsubscribe();
                        this.ar.detachView(this.panel.hostView);
            });
            this.render.listen('document','contextmenu',(event) => {
                  if (!this.ref.nativeElement.contains(event.target)) {
                        this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
                        // this.clickWatcher$.unsubscribe();
                        this.ar.detachView(this.panel.hostView);
                  }
            });
      }

}
