import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'hd-layout',
  template: `
      <hd-sidenav #sidenav 
            (pageTitle)="pagebar.changePageTitle($event)"
            [titleText]="titleText" 
            [lazyLoadModule]="lazyLoadModule" 
            [nav]="nav" 
            [titleImg]="titleImg">
            <hd-main-toolbar 
                  [notification]="notification" 
                  (sidenavToggle)="sidenav.toggle()" 
                  (logout)="onLogout()">
            </hd-main-toolbar>
            <hd-page-toolbar #pagebar></hd-page-toolbar>
            <div class='hd-page'>
                  <ng-content></ng-content>
            </div>
      </hd-sidenav>
  `
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
