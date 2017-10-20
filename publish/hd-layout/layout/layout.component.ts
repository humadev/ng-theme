import { slideToDown } from '../../animations/router.animation';
import { Component, Input, EventEmitter, Output, ElementRef, Renderer2 } from '@angular/core';
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
                [opened]='sidenavOpen'
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
styles: [`
    
`],
animations: [slideToDown()]
})
export class LayoutComponent {
      @Input() titleText = 'Humadev Theme';
      @Input() titleImg: string;
      @Input() lazyLoadModule = false;
      @Input() nav: any = false;
      @Input() notification: any = false;
      @Output() logout = new EventEmitter();
      sidenavOpen = true;
      class = '';

      constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
      ){}

      onLogout() {
            this.logout.emit();
      }

    toggleSidenav(e) {
        this.sidenavOpen = !this.sidenavOpen;
        const content = this.elRef.nativeElement.querySelector('.mat-sidenav-content');
        this.renderer.addClass(content, 'animate-content');
        if (e) {
            this.class = 'm-brand--minimize m-aside-left--minimize';
            this.renderer.setStyle(content, 'margin-left', '70px');
        }else {
            this.class = '';
            this.renderer.setStyle(content, 'margin-left', '255px');
        }
    }
}
