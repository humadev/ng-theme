import { slideToDown } from 'app/lib/animations/router.animation';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hd-layout',
  template: `
    <div [class]='class'>
        <hd-main-toolbar
                [notification]="notification"
                (sidenavToggle)="sidenav.toggle()"
                (logout)="onLogout()"
                [titleText]="titleText"
                [titleImg]="titleImg"
                (minimize)="toggleSidenav($event)">
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
    </div>
  `,
  animations: [slideToDown()]
})
export class LayoutComponent {
      @Input() titleText = 'Humadev Theme';
      @Input() titleImg: string;
      @Input() lazyLoadModule = false;
      @Input() nav: any = false;
      @Input() notification: any = false;
      @Output() logout = new EventEmitter();
      class = '';

      onLogout() {
            this.logout.emit();
      }

    toggleSidenav(e) {
        if (e) {
            this.class = 'm-brand--minimize m-aside-left--minimize';
        }else {
            this.class = '';
        }
    }
}
