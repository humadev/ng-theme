import {Overlay, OverlayOrigin, OverlayConfig} from '@angular/cdk/overlay';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ViewEncapsulation,
    ViewChild,
    ViewContainerRef,
    QueryList,
    ViewChildren,
    ElementRef, ComponentRef } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ComponentPortal, Portal, TemplatePortalDirective } from '@angular/cdk/portal';
import { PopMenuDirective } from 'app/lib/directives/pop-menu.directive';

@Component({
  selector: 'hd-main-toolbar',
  templateUrl: 'main-toolbar.component.html',
  styles: [`
      .hd-main-toolbar{
            position: fixed;
            width: 100%;
            z-index: 9;
      }
      .m-header-head {
            -webkit-box-shadow: 0 1px 15px 1px rgba(113,106,202,.1);
            -moz-box-shadow: 0 1px 15px 1px rgba(113,106,202,.1);
            box-shadow: 0 1px 15px 1px rgba(113,106,202,.1);
    }
    .m-brand{
        width:255px;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class MainToolbarComponent implements OnInit {
      @Input() notification = false;
      @Input() notificationList: Array<any>;
      @Input() profile = true;
      @Input() showSidenavToggle = true;
      @Output() sidenavToggle = new EventEmitter();
      @Output() logout = new EventEmitter();
      @Input() titleText = 'Humadev Theme';
      @Input() titleImg: string;
      @ViewChild('mainMenu') menu: OverlayOrigin;
      @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
      startMenus = this.menuService.startMenu;
      active;
      accountOpen = false;
      notificationOpen = false;
      messageOpen = false;
      topMenuOpen = false;
      class = 'm-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block';
      sidenav = true;
      @Output() minimize = new EventEmitter();

      constructor(
            private menuService: MenuService,
            public overlay: Overlay,
            public viewContainerRef: ViewContainerRef
      ) {}

      ngOnInit() {
            this.menuService.moduleActive.subscribe(res => {
                  this.active = res;
            });
      }

      toggleSidenav() {
        if (this.sidenav) {
            this.class = 'm-brand__icon m-brand__toggler m-brand__toggler--right m--visible-desktop-inline-block';
        }else {
            this.class = 'm-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block';
        }
        this.sidenav = !this.sidenav;
        this.minimize.emit(!this.sidenav);
      }

      onSidenavToggle() {
            this.sidenavToggle.emit();
      }

      onLogout() {
            this.logout.emit();
      }

      onChange(e) {
            this.menuService.navigate(e.value);
      }

      clickMenu(e) {
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(
                this.menu.elementRef,
                {originX: 'start', originY: 'bottom'},
                {overlayX: 'start', overlayY: 'top'}
            )
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.detach();
        });
      }
}
