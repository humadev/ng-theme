/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { LayoutService } from '../../../services/layout.service';
import { Router } from '@angular/router';
import { Component, Input, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortalDirective } from '@angular/cdk/portal';
export class SidenavItemComponent {
    /**
     * @param {?} router
     * @param {?} overlay
     * @param {?} ref
     * @param {?} layout
     */
    constructor(router, overlay, ref, layout) {
        this.router = router;
        this.overlay = overlay;
        this.ref = ref;
        this.layout = layout;
        this.nav = false;
        this.sidenavOpen = { minimize: false };
        this.children = false;
        this.onMinHover = false;
        this.hasAttached = false;
        this.listHover = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} i
     * @return {?}
     */
    parentOpen(i) {
        if (this.nav === false) {
            if (this.navFromRouter[i].isOpen === false ||
                !this.navFromRouter[i].hasOwnProperty('isOpen')) {
                this.navFromRouter[i].isOpen = true;
            }
            else {
                this.navFromRouter[i].isOpen = false;
            }
        }
        else {
            if (this.nav[i].isOpen === false ||
                !this.nav[i].hasOwnProperty('isOpen')) {
                this.nav[i].isOpen = true;
            }
            else {
                this.nav[i].isOpen = false;
            }
        }
    }
    /**
     * @param {?} instruction
     * @return {?}
     */
    isActive(instruction) {
        return this.router.isActive(this.router.createUrlTree(instruction), false);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    toggleChildren(level) {
        if (!this.sidenavOpen.minimize) {
            if (level.children &&
                level.children.length > 0 &&
                (level.isOpen || this.isActive([level.path]))) {
                this.children = true;
                return 'active';
            }
            else {
                this.children = false;
                return 'inactive';
            }
        }
    }
    /**
     * @param {?} level
     * @return {?}
     */
    childrenAndActive(level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onHover(e) {
        this.listHover = true;
        if (!!this.sidenavOpen.minimize && !this.hasAttached) {
            /** @type {?} */
            const config = new OverlayConfig({
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: this.overlay
                    .position()
                    .connectedTo(this.ref, { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                    .withOffsetY(-10)
            });
            this.overlayRef = this.overlay.create(config);
            this.overlayRef.attach(this.templatePortals.first);
            this.hasAttached = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onLeave(e) {
        this.listHover = false;
        setTimeout(() => {
            if (!!this.sidenavOpen.minimize && !this.onMinHover) {
                this.hasAttached = false;
                this.overlayRef.dispose();
            }
        }, 100);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMinLeave(e) {
        setTimeout(() => {
            if (!!this.sidenavOpen.minimize && !this.onMinHover && !this.listHover) {
                this.hasAttached = false;
                this.overlayRef.dispose();
            }
        }, 100);
    }
}
SidenavItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-sidenav-item]',
                template: `<a class='menu-item'
    *ngIf="menu.children && menu.children.length > 0; else noChildItem"
    (click)="parentOpen(index)"
    [ngClass]="{'active':childrenAndActive(menu)}"
    routerLinkActive="menu-item-active">
  <mat-icon class="icon">{{menu.data.icon}}</mat-icon>
  <span class="text">
    {{menu.data.name}}
  </span>
  <i class="arrow la la-angle-right" *ngIf="menu.children && menu.children.length > 0"></i>
</a>
<ng-template #noChildItem>
  <a class='menu-item no-child' [routerLink]="menu?.path" routerLinkActive="menu-item-active" routerLinkActiveOptions="{ exact: true }">
    <mat-icon class="icon">{{menu.data.icon}}</mat-icon>
    <span class="text">
      {{menu.data.name}}
    </span>
    <span class="badge" *ngIf="menu.data.badge">
      <span>{{menu.data.badge}}</span>
    </span>
  </a>
</ng-template>
<ng-template [ngIf]="menu.children && menu.children.length > 0" cdk-portal>
  <div (mouseenter)="onMinHover = true;" (mouseleave)="onMinHover = false; onMinLeave($event)" class="menu-submenu" [@childActive]="toggleChildren(menu)"
    [ngClass]="{'minimize':sidenavOpen.minimize}">
    <span class="arrow"></span>
    <ul class="menu-subnav">
      <li class="menu-subnav-item subnav-title">
        <a>
          <span class="text">
            {{menu.data.name}}
          </span>
          <span class="badge" *ngIf="menu.data.badge">
            <span>{{menu.data.badge}}</span>
          </span>
        </a>
      </li>
      <li class="menu-subnav-item" routerLinkActive="menu-subnav-item-active" routerLinkActiveOptions="{ exact: true}" aria-haspopup="true"
        *ngFor="let level2 of menu.children">
        <a [routerLink]="[menu.path+'/'+level2.path]">
          <i class="m-menu__link-bullet m-menu__link-bullet--dot">
            <span></span>
          </i>
          <span class="text">
            {{level2.data.name}}
          </span>
          <span class="badge" *ngIf="level2.data.badge">
            <span>{{level2.data.badge}}</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</ng-template>
<ng-template #noChild>
  <li class="m-menu__item" routerLinkActive="m-menu__item--active" routerLinkActiveOptions="{ exact: true }" aria-haspopup="true">
    <a [routerLink]="[menu?.path]" class="m-menu__link">
      <i class="m-menu__link-icon flaticon-line-graph"></i>
      <span class="m-menu__link-title">
        <span class="m-menu__link-wrap">
          <span class="m-menu__link-text">
            {{menu.data.name}}
          </span>
        </span>
      </span>
    </a>
  </li>
</ng-template>
`,
                styles: [`:host{background-color:none;position:relative;margin:0;display:block;float:none;height:auto;padding:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}:host :hover{background-color:#292b3a}.menu-item{padding:15px 5px 15px 30px;height:44px;display:table;table-layout:fixed;margin:0;text-decoration:none;position:relative;outline:0}.menu-item .material-icons{color:#fefefe;text-align:left;width:35px;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0 10px 0 0}.menu-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-item span.badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-item i.arrow{color:#fefefe;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-item i.arrow:before{display:inline-block;-webkit-transition:.3s;transition:.3s}.menu-item:hover i.arrow,.menu-item:hover i.icon{color:#868aa8}.menu-item.minimize{padding-left:0;padding-right:0;text-align:center;height:44px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-item.minimize i.arrow,.menu-item.minimize span.text{display:none}.menu-item.minimize i.icon{width:100%;text-align:center;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0!important}.menu-item.active .material-icons,.menu-item.active i.arrow{color:#868aa8}.menu-item.active i.arrow:before{-webkit-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.menu-subnav-item{display:block;margin:0;float:none;height:auto;padding:0;cursor:pointer}.menu-subnav-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-subnav-item span.badge{display:table-cell;height:100%;width:20px;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-subnav-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item i.arrow{color:#525672;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-subnav-item i.arrow:before{display:inline-block;-webkit-transition:.3s;transition:.3s}.menu-subnav-item a{padding:0 30px 0 50px;height:40px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-subnav-item a i{vertical-align:middle;text-align:left;width:20px;display:table-cell;height:100%;line-height:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.menu-subnav-item a i span{width:4px;height:4px;border-radius:100%;vertical-align:middle;display:inline-block;background-color:#525672}.menu-subnav-item a>span{color:#fefefe;font-weight:400;font-size:1rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0;vertical-align:middle}.menu-subnav-item a .badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right;width:20px}.menu-subnav-item a .badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item-active a i,.menu-subnav-item-active a span.text{color:#2a61ac!important}.menu-subnav-item-active a i span span.badge,.menu-subnav-item-active a span.text span span.badge{color:#fff}.menu-item-active{border-left:3px solid #5867dd;background-color:#292b3a;color:#5867dd;padding-left:27px}.menu-item-active .material-icons,.menu-item-active span{color:#2a61ac!important}.menu-item-active span.badge span{color:#fff!important}.menu-submenu{overflow:hidden;float:none;margin:0;padding:0}.menu-submenu .menu-subnav{padding:0;width:100%;margin:0;list-style:none}.menu-submenu .menu-subnav .menu-subnav-item.subnav-title{display:none}.menu-submenu.minimize{height:0;overflow:hidden}.menu-item.minimize .text{-webkit-transition:.3s;transition:.3s;display:none!important}.menu-item.minimize .m-brand__tools{text-align:center}`],
                animations: [
                    trigger('childActive', [
                        state('inactive', style({
                            display: 'block',
                            height: 0,
                            overflow: 'hidden'
                        })),
                        state('active', style({
                            display: 'block',
                            height: '*'
                        })),
                        transition('inactive => active', animate('500ms ease')),
                        transition('active => inactive', animate('500ms ease'))
                    ])
                ]
            },] },
];
/** @nocollapse */
SidenavItemComponent.ctorParameters = () => [
    { type: Router },
    { type: Overlay },
    { type: ElementRef },
    { type: LayoutService }
];
SidenavItemComponent.propDecorators = {
    menu: [{ type: Input, args: ['menu',] }],
    index: [{ type: Input, args: ['index',] }],
    nav: [{ type: Input }],
    navFromRouter: [{ type: Input }],
    templatePortals: [{ type: ViewChildren, args: [TemplatePortalDirective,] }],
    sidenavOpen: [{ type: Input }],
    onHover: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SidenavItemComponent.prototype.menu;
    /** @type {?} */
    SidenavItemComponent.prototype.index;
    /** @type {?} */
    SidenavItemComponent.prototype.nav;
    /** @type {?} */
    SidenavItemComponent.prototype.navFromRouter;
    /** @type {?} */
    SidenavItemComponent.prototype.templatePortals;
    /** @type {?} */
    SidenavItemComponent.prototype.sidenavOpen;
    /** @type {?} */
    SidenavItemComponent.prototype.children;
    /** @type {?} */
    SidenavItemComponent.prototype.overlayRef;
    /** @type {?} */
    SidenavItemComponent.prototype.onMinHover;
    /** @type {?} */
    SidenavItemComponent.prototype.hasAttached;
    /** @type {?} */
    SidenavItemComponent.prototype.listHover;
    /** @type {?} */
    SidenavItemComponent.prototype.router;
    /** @type {?} */
    SidenavItemComponent.prototype.overlay;
    /** @type {?} */
    SidenavItemComponent.prototype.ref;
    /** @type {?} */
    SidenavItemComponent.prototype.layout;
}
//# sourceMappingURL=sidenav-item.component.js.map