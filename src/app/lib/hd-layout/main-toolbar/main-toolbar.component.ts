import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'hd-main-toolbar',
  templateUrl: 'main-toolbar.component.html',
  styles: [`
      .hd-main-toolbar{
            position: fixed;
            width: 100%;
            z-index: 9;
      }
  `]
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

      constructor(
            private menuService: MenuService
      ) {}

      ngOnInit(){
            this.menuService.moduleActive.subscribe(res => {
                  this.active = res;
            });
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
