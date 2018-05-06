import { LayoutService } from './../../services/layout.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MenuService } from '../../services/menu.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
import { slideToRight } from '../../animations/router.animation';
import intersection from 'lodash-es/intersection';

@Component({
      selector: 'hd-sidenav',
      templateUrl: './sidenav.component.html',
      styleUrls: ['./sidenav.component.scss'],
      animations: [
        slideToRight()
      ]
})
export class SidenavComponent implements OnInit, AfterViewInit {

      @Input() nav: any = false;
      @Input() lazyLoadModule: any = false;
      @Input() navFromRouter: any;
      @Input() lazyLoadPath: string;
      @Output() pageTitle = new EventEmitter();
      moduleConfig: any;
      @Input() opened = true;
      sidenavClass = {
          minimize: false
      };

      constructor(
            private render: Renderer2,
            private ref: ElementRef,
            private router: Router,
            private activeRoute: ActivatedRoute,
            private menuService: MenuService,
            public layoutService: LayoutService
      ) { }

      ngOnInit() {
            if (this.nav === false) {
                  this.menuService.sidenav.subscribe(res => this.navFromRouter = res);
            }
            this.layoutService.sidebarOpen.subscribe((open) => {
                this.sidenavClass.minimize = !open;
            });
            console.log(this.nav);
      }

      ngAfterViewInit() {
          const content = this.ref.nativeElement.querySelector('.mat-sidenav-content');
          this.layoutService.sidebarOpen.subscribe((open) => {
              this.render.addClass(content, 'animate-content');
              if (open) {
                  this.render.setStyle(content, 'margin-left', '255px');
              } else {
                  this.render.setStyle(content, 'margin-left', '70px');
              }
          });
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

      childrenAndActive(level) {
        if (level.children && level.children.length > 0 && (level.isOpen || this.isActive([level.path]))) {
            return true;
        }else {
            return false;
        }
      }

      toggleChildren(level) {
        if (level.children && level.children.length > 0 && (level.isOpen || this.isActive([level.path]))) {
            return 'active';
        }else {
            return 'inactive';
        }
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
                    if (navItem.data.hasOwnProperty('hidden')) {
                            hidden = navItem.data.hidden;
                    }
                }
        }
        return hidden;
    }

    setPageToolbar(item) {
        this.pageTitle.emit(item.name);
    }

    checkGroupAccess(menu, asal = '') {
        if (menu && menu.data && menu.data.groupAccess.permissions && menu.data.groupAccess.groups) {
            const allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0 ? true : false;
            if (allowed) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

}
