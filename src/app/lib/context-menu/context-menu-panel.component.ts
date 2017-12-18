import {
    Component,
    Output,
    EventEmitter,
    Input,
    HostListener,
    HostBinding,
      ElementRef,
      AfterViewInit} from '@angular/core';
import { ContextMenu } from './context-menu';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'hd-menu-panel',
  template: `
    <div class="hd-context-menu-panel"
      fxLayout="column">
        <ng-template ngFor let-item [ngForOf]="menuItem">
            <a mat-button *ngIf="item.display !== false"
                (click)='onClick(item)'>
                    <mat-icon>{{item.icon}}</mat-icon> {{item.title}}
            </a>
        </ng-template>
    </div>
  `,
    styles: [`
        :host{
            max-height: 500px;
            overflow-y: scroll;
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

export class ContextMenuPanelComponent implements AfterViewInit{
      @Output() menuItemClicked = new EventEmitter();
      @Input() menuItem: [ContextMenu];
      height = new BehaviorSubject<number>(null);
      width = new BehaviorSubject<number>(null);

      constructor(
            private _el: ElementRef
      ) {}

      onClick(item) {
            this.menuItemClicked.emit(item);
      }

      @HostListener('contextmenu', ['$event'])
      onContextMenu(event: MouseEvent): void {
            event.preventDefault();
      }

      ngAfterViewInit() {
            this.height.next(this._el.nativeElement.offsetHeight);
            this.width.next(this._el.nativeElement.offsetWidth);
      }
}
