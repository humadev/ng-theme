import { LayoutService } from '../../../services/layout.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import {
  Overlay,
  OverlayConfig,
  OverlayRef
} from '@angular/cdk/overlay';
import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';

@Component({
  selector: '[hd-sidenav-item]',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [
    trigger('childActive', [
      state(
        'inactive',
        style({
          display: 'block',
          height: 0,
          overflow: 'hidden'
        })
      ),
      state(
        'active',
        style({
          display: 'block',
          height: '*'
        })
      ),
      transition('inactive => active', animate('500ms ease')),
      transition('active => inactive', animate('500ms ease'))
    ])
  ]
})
export class SidenavItemComponent implements OnInit {
  @Input('menu')
  menu;
  @Input('index')
  index;
  @Input()
  nav: any = false;
  @Input()
  navFromRouter: any;
  @ViewChildren(TemplatePortalDirective)
  templatePortals: QueryList<Portal<any>>;
  @Input()
  sidenavOpen = { minimize: false };
  children = false;
  overlayRef: OverlayRef;
  onMinHover = false;
  hasAttached = false;
  listHover = false;

  constructor(
    private router: Router,
    private overlay: Overlay,
    private ref: ElementRef,
    private layout: LayoutService
  ) {}

  ngOnInit() {}

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

  toggleChildren(level) {
    if (!this.sidenavOpen.minimize) {
      if (
        level.children &&
        level.children.length > 0 &&
        (level.isOpen || this.isActive([level.path]))
      ) {
        this.children = true;
        return 'active';
      } else {
        this.children = false;
        return 'inactive';
      }
    }
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
  @HostListener('mouseenter', ['$event'])
  onHover(e: MouseEvent) {
    this.listHover = true;
    if (!!this.sidenavOpen.minimize && !this.hasAttached) {
      const config = new OverlayConfig({
        scrollStrategy: this.overlay.scrollStrategies.block(),
        positionStrategy: this.overlay
          .position()
          .connectedTo(
            this.ref,
            { originX: 'end', originY: 'top' },
            { overlayX: 'start', overlayY: 'top' }
          )
          .withOffsetY(-10)
      });
      this.overlayRef = this.overlay.create(config);
      this.overlayRef.attach(this.templatePortals.first);
      this.hasAttached = true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onLeave(e) {
    this.listHover = false;
    setTimeout(() => {
      if (!!this.sidenavOpen.minimize && !this.onMinHover) {
        this.hasAttached = false;
        this.overlayRef.dispose();
      }
    }, 100);
  }

  onMinLeave(e) {
    setTimeout(() => {
      if (!!this.sidenavOpen.minimize && !this.onMinHover && !this.listHover) {
        this.hasAttached = false;
        this.overlayRef.dispose();
      }
    }, 100);
  }
}
