import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slideToRight } from '../../../animations/router.animation';
import { Overlay, OverlayConfig, OverlayOrigin } from '@angular/cdk/overlay';
import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';

@Component({
  selector: '[hd-sidenav-item]',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
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
    ])
  ]
})
export class SidenavItemComponent implements OnInit {

    @Input('menu') menu;
    @Input('index') index;
    @Input() nav: any = false;
    @Input() navFromRouter: any;
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
    @Input() sidenavOpen = true;
    children = false;
    overlayRef;

    constructor(
        private router: Router,
        private overlay: Overlay,
        private ref: ElementRef
    ) { }

    ngOnInit() {
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

    toggleChildren(level) {
        if (this.sidenavOpen) {
            if (level.children && level.children.length > 0 && (level.isOpen || this.isActive([level.path]))) {
                this.children = true;
                return 'active';
            }else {
                this.children = false;
                return 'inactive';
            }
        }
    }

    childrenAndActive(level) {
        if (level.children && level.children.length > 0 && (level.isOpen || this.isActive([level.path]))) {
            return true;
        }else {
            return false;
        }
    }
    @HostListener('mouseover', ['$event'])
    onHover(e: MouseEvent) {
        if (!this.sidenavOpen) {
            const config = new OverlayConfig({
                hasBackdrop: true,
                backdropClass: 'menu-overlay-backdrop',
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: this.overlay.position().connectedTo(
                    this.ref,
                    {originX: 'end', originY: 'top'},
                    {overlayX: 'start', overlayY: 'top'}
                ).withOffsetY(-10)
            });
            this.overlayRef = this.overlay.create(config);
            this.overlayRef.attach(this.templatePortals.first);
        }
    }

    @HostListener('mouseleave', ['$event'])
    onLeave(e) {
        if (!this.sidenavOpen) {
            setTimeout(() => {
                this.overlayRef.dispose();
            }, 500);
        }
  }

}
