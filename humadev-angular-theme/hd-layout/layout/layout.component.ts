import { Component, Input } from '@angular/core';


@Component({
  selector: 'hd-layout',
  template: `
      <hd-sidenav (pageTitle)="pagebar.changePageTitle($event)" #sidenav [titleText]="titleText">
            <hd-main-toolbar (sidenavToggle)="sidenav.toggle()" (onLogout)="logout()"></hd-main-toolbar>
            <hd-page-toolbar #pagebar></hd-page-toolbar>
            <div class='hd-page'>
                  <ng-content></ng-content>
            </div>
      </hd-sidenav>
  `
})
export class LayoutComponent{
      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;
      onLogout:any;

      logout(){
            this.onLogout.emit();
      }
}
