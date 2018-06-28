import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: '[hd-profile-button]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
        display: block;
        padding: 20px 20px;
        padding-top:0;
    }
  `]
})
export class ProfileButtonComponent implements OnInit {

  constructor(
      private render: Renderer2,
      private el: ElementRef,
      private ls: LayoutService
  ) { }

    ngOnInit() {
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', () => {
                this.ls.closeOverlay.next(true);
            });
        }
    }

}
