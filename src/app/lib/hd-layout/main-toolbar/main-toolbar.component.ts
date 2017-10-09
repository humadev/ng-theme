import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';

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
  encapsulation: ViewEncapsulation.None
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

      ngOnInit(){
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

      onLogout(){
            this.logout.emit();
      }

      onChange(e){
            this.menuService.navigate(e.value);
      }
}
