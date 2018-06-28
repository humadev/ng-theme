import { slideToDown } from '../../animations/router.animation';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
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
                [opened]='sidenavOpen'
                (pageTitle)="pagebar.changePageTitle($event)"
                [lazyLoadModule]="lazyLoadModule"
                [nav]="nav">
                <hd-page-toolbar #pagebar></hd-page-toolbar>
                <div class='hd-page'>
                    <ng-content></ng-content>
                </div>
        </hd-sidenav>
    `
})
export class LayoutComponent {
  @Input() titleText = 'Humadev Theme';
  @Input() titleImg: string;
  @Input() lazyLoadModule = false;
  @Input() nav: any = false;
  @Input() notification: any = false;
  @Output() logout = new EventEmitter();
  sidenavOpen = true;

  onLogout() {
    this.logout.emit();
  }
}
