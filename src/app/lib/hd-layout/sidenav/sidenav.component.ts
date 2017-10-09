import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
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
import { slideToRight } from 'app/lib/animations/router.animation';

@Component({
      selector: 'hd-sidenav',
      templateUrl: './sidenav.component.html',
      styleUrls: ['./sidenav.component.scss'],
      animations: [
        trigger('childActive', [
          state('inactive', style({
                display: 'block',
                height: 0,
                overflow: 'hidden'
          })),
          state('active',   style({
                display: 'block',
                height: '*'
          })),
          transition('inactive => active', animate('500ms ease')),
          transition('active => inactive', animate('500ms ease'))
        ]),
        slideToRight()
      ]
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
