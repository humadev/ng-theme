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
import { PopMenuDirective } from '../../directives/pop-menu.directive';

@Component({
  selector: 'hd-main-toolbar',
  templateUrl: 'main-toolbar.component.html',
  styles: [`
  @media (min-width: 993px){
    a.m-brand__toggler--right span{
        background-color: #2739c1 !important;
    }
    a.m-brand__toggler--right span:before{
        background-color: #2739c1 !important;
    }
    a.m-brand__toggler--right span:after{
        background-color: #2739c1 !important;
    }
    .toolbar-menu {
        width: 100%;
        display: table-cell;
        vertical-align: top;
        height: 100%;
        -webkit-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.1);
        -moz-box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.1);
        box-shadow: 0px 1px 15px 1px rgba(113, 106, 202, 0.1);
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        font-size: 14px;
        font-weight: 300;
        font-family: "Poppins";
        -webkit-font-smoothing: antialiased;
    }
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
            private menuService: MenuService
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
}
