import { LayoutService } from '../../services/layout.service';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { slideToRight } from '../../animations/router.animation';
import { intersection } from 'lodash-es';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hd-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideToRight()]
})
export class SidenavComponent implements OnInit {
  @Input()
  titleImg: string;
  @Input()
  nav: any = false;
  @Input()
  lazyLoadModule: any = false;
  @Input()
  navFromRouter: any;
  @Input()
  lazyLoadPath: string;
  @Output()
  pageTitle = new EventEmitter();
  moduleConfig: any;
  @Input()
  opened = false;
  sidenavClass = {
    minimize: false
  };
  progressBar = false;
  @ViewChild('sidenav', { static: true })
  sidenav: MatSidenav;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    private router: Router,
    private menuService: MenuService,
    public layoutService: LayoutService,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router.events.subscribe(() =>
      this.layoutService.topProgressBar.next(true)
    );
  }

  ngOnInit() {
    if (this.nav === false) {
      this.menuService.sidenav.subscribe(res => {
        this.navFromRouter = res;
      });
    }
    this.layoutService.sidebarOpen.subscribe(open => {
      if (open) {
        this.sidenav.open();
        this.opened = true;
      } else {
        this.sidenav.close();
        this.opened = false;
      }
    });
    this.layoutService.topProgressBar.subscribe(
      progress => (this.progressBar = progress)
    );
  }

  parentOpen(i: any) {
    if (this.nav === false) {
      if (
        this.navFromRouter[i].isOpen === false ||
        !this.navFromRouter[i].hasOwnProperty('isOpen')
      ) {
        this.navFromRouter[i].isOpen = true;
      } else {
        this.navFromRouter[i].isOpen = false;
      }
    } else {
      if (
        this.nav[i].isOpen === false ||
        !this.nav[i].hasOwnProperty('isOpen')
      ) {
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
    if (
      level.children &&
      level.children.length > 0 &&
      (level.isOpen || this.isActive([level.path]))
    ) {
      return true;
    } else {
      return false;
    }
  }

  toggleChildren(level) {
    if (
      level.children &&
      level.children.length > 0 &&
      (level.isOpen || this.isActive([level.path]))
    ) {
      return 'active';
    } else {
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
    this.sidenav.close();
    this.layoutService.sidebarOpen.next(false);
  }

  checkHidden(navItem) {
    let hidden = false;
    if (navItem.hasOwnProperty('redirectTo')) {
      hidden = true;
    } else {
      if (navItem.hasOwnProperty('data')) {
        if (navItem.data.hasOwnProperty('hidden')) {
            if (typeof navItem.data.hidden === 'boolean') {
                hidden = navItem.data.hidden;
            } else if (typeof navItem.data.hidden === 'function') {
                hidden = navItem.data.hidden();
            }
        }
      }
    }
    return hidden;
  }

  setPageToolbar(item) {
    this.pageTitle.emit(item.name);
  }

  checkGroupAccess(menu) {
    if (
      menu &&
      menu.data &&
      menu.data.groupAccess.permissions &&
      menu.data.groupAccess.groups
    ) {
      const allowed =
        intersection(
          menu.data.groupAccess.permissions,
          menu.data.groupAccess.groups
        ).length > 0
          ? true
          : false;
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
