import { Component, HostBinding, Output, EventEmitter, Input } from '@angular/core';
import { contextmenu } from './context-menu';

@Component({
  selector: '[hdMenuPanel]',
  template: `
    <div class="hd-context-menu-panel" [style.top.px]="top" [style.left.px]="left" fxLayout="column">
      <a md-button fxFlex *ngFor="let item of menuItem" (click)="onClick(item.method)"><md-icon>{{item.icon}}</md-icon> {{item.title}}</a>
    </div>
  `,
  styles: [`
      
  `]
})
export class ContextMenuPanelComponent{
      @HostBinding('style.top.px') top = 0;
      @HostBinding('style.left.px') left = 0;
      @Output() clicked = new EventEmitter();
      @Input() menuItem:[contextmenu];

  onClick(method){
        this.clicked.emit(method);
  }

}
