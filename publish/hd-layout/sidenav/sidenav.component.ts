import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MenuService } from "../../services/menu.service";
@Component({
      selector: 'hd-sidenav',
      templateUrl: './sidenav.component.html',
      styles:[`
            mat-sidenav-container{
                  top: 64px !important;
                  position: fixed;
            }
      `]
})
export class SidenavComponent implements OnInit {

      @Input() nav: any = false;
      @Input() lazyLoadModule: any = false;
      @Input() navFromRouter: any;
      @Input() lazyLoadPath: string;
      @Output() pageTitle = new EventEmitter();
      moduleConfig: any;
      opened = true;

      constructor(
            private router: Router,
            private activeRoute: ActivatedRoute,
            private menuService: MenuService
      ) { }

      ngOnInit() {
            if (this.nav === false) {
                  this.menuService.sidenav.subscribe(res => this.navFromRouter = res);
            }
      }

      parentOpen(i: any) {
            if (this.nav === false) {
                  if (this.navFromRouter[i].isOpen === false || !this.navFromRouter[i].hasOwnProperty('isOpen')) {
                        this.navFromRouter[i].isOpen = true;
                  } else {
                        this.navFromRouter[i].isOpen = false;
                  }
            } else {
                  if (this.nav[i].isOpen === false || !this.nav[i].hasOwnProperty('isOpen')) {
                        this.nav[i].isOpen = true;
                  } else {
                        this.nav[i].isOpen = false;
                  }
            }
      }

      isActive(instruction: any[]): boolean {
            return this.router.isActive(this.router.createUrlTree(instruction), false);
      }

      checkPath(row) {
            if (row.path === '') {
                  return { exact: true };
            } else {
                  return { exact: false };
            }
      }

      @Output()
      toggle() {
            this.opened = !this.opened;
      }

      checkHidden(navItem) {
            let hidden = false;
            if (navItem.hasOwnProperty('redirectTo')) {
                  hidden = true;
            } else {
                  if (navItem.hasOwnProperty('data')) {
                        if (navItem.data.hasOwnProperty('hidden')){
                              hidden = navItem.data.hidden;
                        }
                  }
            }
            return hidden;
      }

      setPageToolbar(item) {
            this.pageTitle.emit(item.name);
      }

}
