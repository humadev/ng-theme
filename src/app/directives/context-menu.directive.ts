import { Directive, Input, Output, EventEmitter, HostListener, Renderer2, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { contextmenu } from './context-menu';

@Directive({
  selector: '[hdContextMenu]'
})
export class ContextMenuDirective {

      @Output() hdContextMenu = new EventEmitter();
      @Input() menuID:any; // id dari row yg diklik kanan
      @Input() menuItem:[contextmenu]; // data menu yg akan ditampikan, data ini sesuai dengan interface framework contextmenu
      panel:any;
      clickWatcher$:any;
      
      constructor(
            private ref:ElementRef,
            private render:Renderer2,
            private vc:ViewContainerRef,
            private componentFactoryResolver: ComponentFactoryResolver
      ){
            render.setStyle(ref.nativeElement, 'cursor','context-menu'); // add context-menu cursor to element used this directive
      }

      @HostListener('contextmenu',['$event'])
      onContextMenu(event:MouseEvent):void{
            event.preventDefault();
            this.render.addClass(this.ref.nativeElement, "hd-contextmenu-active"); //coloring row with class
            this.createPanel();
            this.addPanelItem();
            this.calcPosition(event);
            this.watchItemClick();
            this.outsideListener();
      }

      private createPanel():void{
            const factory = this.componentFactoryResolver.resolveComponentFactory(ContextMenuPanelComponent);
            this.vc.clear(); //clear all panel before create
            this.panel = this.vc.createComponent(factory);
      }

      private addPanelItem():void{
            this.panel.instance.menuItem = this.menuItem;
      }

      private calcPosition(event):void{
            this.panel.instance.top = event.offsetY+event.srcElement.offsetTop;
            this.panel.instance.left = event.offsetX+event.srcElement.offsetLeft;
      }

      private watchItemClick():void{
            this.clickWatcher$ = this.panel.instance.clicked.subscribe(
                  emitted => {
                        this.hdContextMenu.emit({method:emitted, menuID:this.menuID});
                  }
            );
      }

      private outsideListener():void{
            this.render.listen("document","click",(event) => {
                        this.render.removeClass(this.ref.nativeElement, "hd-contextmenu-active");
                        this.clickWatcher$.unsubscribe();
                        this.panel.destroy();
            });
            this.render.listen("document","contextmenu",(event) => {
                  if(!this.ref.nativeElement.contains(event.target)){
                        this.render.removeClass(this.ref.nativeElement, "hd-contextmenu-active");
                        this.clickWatcher$.unsubscribe();
                        this.panel.destroy();
                  }
            });
      }

}
