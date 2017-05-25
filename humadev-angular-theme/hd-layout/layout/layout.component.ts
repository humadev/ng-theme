import { Component, Input } from '@angular/core';


@Component({
  selector: 'hd-layout',
  template: `
      <hd-sidenav #sidenav 
            (pageTitle)="pagebar.changePageTitle($event)" 
            [titleText]="titleText" 
            [lazyLoadModule]="lazyLoadModule" 
            [nav]="nav" 
            [titleImg]="titleImg">
            <hd-main-toolbar (sidenavToggle)="sidenav.toggle()" (onLogout)="logout()"></hd-main-toolbar>
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
      onLogout: any;

      logout() {
            this.onLogout.emit();
      }
}
