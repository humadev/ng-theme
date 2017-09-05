import { Component, HostBinding, Output, EventEmitter, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { contextmenu } from './context-menu';

@Component({
  selector: 'hd-menu-panel',
  template: `
    <div class="hd-context-menu-panel" [style.top.px]="top" [style.left.px]="left" fxLayout="column">
      <a md-button fxFlex *ngFor="let item of menuItem" (click)="onClick(item.method)"><md-icon>{{item.icon}}</md-icon> {{item.title}}</a>
    </div>
  `,
  styles:[`
      :host{
            position: fixed !important;
            min-width: 200px;
            display: block;
            z-index:9999;
            box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }

      :host div a{
            display: block;
            text-align: left;
            padding:4px 10px;
            font-size:12px;
            md-icon{
                  font-size:14px !important;
                  height: 16px;
            }
      }

      :host div a md-icon{
            font-size:14px !important;
            height: 16px;
      }
  `]
})
export class ContextMenuPanelComponent{
      @HostBinding('style.top.px') top = 0;
      @HostBinding('style.left.px') left = 0;
      @Output() menuItemClicked = new EventEmitter();
      @Input() menuItem:[contextmenu];
      @Input() menuID:any;

  onClick(method){
        this.menuItemClicked.emit(method);
  }

  constructor(
        public el:ElementRef
  ){}

   @HostListener('contextmenu',['$event'])
      onContextMenu(event:MouseEvent):void{
            event.preventDefault();
      }
}
