import { LayoutService } from '../../services/layout.service';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { MenuService } from '../../services/menu.service';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
  MediaMatcher
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'hd-main-toolbar',
  templateUrl: 'main-toolbar.component.html',
  styleUrls: ['main-toolbar.component.scss'],
  preserveWhitespaces: false
})
export class MainToolbarComponent implements OnInit {
  @Input()
  notification = false;
  @Input()
  notificationList: Array<any>;
  @Input()
  profile = true;
  @Input()
  showSidenavToggle = true;
  @Input()
  sidenavOpen = true;
  @Output()
  sidenavToggle = new EventEmitter();
  @Output()
  logout = new EventEmitter();
  @Input()
  titleText = 'Humadev Theme';
  @Input()
  titleImg: string;
  @Input()
  theme: 'default' | 'dark' | 'light' = 'dark';
  active;
  accountOpen = false;
  notificationOpen = false;
  messageOpen = false;
  topMenuOpen = false;
  brandClass = {
    minimize: false,
    hide: false
  };
  brandBackground = '#282a3c';
  brandToggle = {
    'toggler-right': false,
    'toggler-left': true
  };
  sidenav = true;
  loading = false;
  @Output()
  minimize = new EventEmitter();
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private menuService: MenuService,
    private layout: LayoutService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
      this.layout.topProgressBar.subscribe(load => {
          this.loading = load;
      });
    this.layout.sidebarOpen.subscribe(open => {
      if (open) {
        this.brandToggle = {
          'toggler-right': false,
          'toggler-left': true
        };
      } else {
        this.brandToggle = {
          'toggler-right': true,
          'toggler-left': false
        };
      }
    });
    this.menuService.moduleActive.subscribe(res => {
      this.active = res;
    });
    if (this.theme === 'dark') {
      this.brandBackground = '#282a3c';
    } else {
      this.brandBackground = '#ffffff';
    }
  }

  toggleSidenav() {
    this.layout.sidebarOpen.next(!this.layout.sidebarOpen.value);
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
