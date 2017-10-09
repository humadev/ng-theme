import { slideToDown } from 'app/lib/animations/router.animation';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'hd-layout',
  template: `
      <hd-main-toolbar
            [notification]="notification"
            (sidenavToggle)="sidenav.toggle()"
            (logout)="onLogout()"
            [titleText]="titleText"
            [titleImg]="titleImg">
      </hd-main-toolbar>
      <hd-sidenav #sidenav
            (pageTitle)="pagebar.changePageTitle($event)"
            [lazyLoadModule]="lazyLoadModule"
            [nav]="nav">
            <hd-page-toolbar #pagebar [@slideToDown]=""></hd-page-toolbar>
            <div class='hd-page'>
                  <ng-content></ng-content>
            </div>
      </hd-sidenav>
  `,
  animations: [slideToDown()]
})
export class LayoutComponent{
      @Input() titleText = 'Humadev Theme';
      @Input() titleImg: string;
      @Input() lazyLoadModule = false;
      @Input() nav: any = false;
      @Input() notification: any = false;
      @Output() logout = new EventEmitter();

      onLogout() {
            this.logout.emit();
      }
}
