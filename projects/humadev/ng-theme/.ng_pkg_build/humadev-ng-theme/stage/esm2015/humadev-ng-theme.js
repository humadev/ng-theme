import { Directive, ElementRef, Renderer2, Injector, Component, ViewEncapsulation, Input, HostListener, ContentChild, ViewChild, NgModule, EventEmitter, Output, Injectable, ViewChildren, defineInjectable, inject } from '@angular/core';
import { NgControl, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule, MatDialogRef, MatDialog, MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatMenuModule, MatGridListModule, MatSelectModule, MatProgressBarModule, MatTabsModule, MatDialogModule, MatCardModule, MatInputModule } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET, RouterModule } from '@angular/router';
import { filter, map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject, Subject, fromEvent, merge, of } from 'rxjs';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { intersection } from 'lodash-es';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkOverlayOrigin, Overlay, OverlayConfig, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortalDirective, PortalModule, ComponentPortal } from '@angular/cdk/portal';
import { DataSource } from '@angular/cdk/table';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadFileDirective {
    /**
     * @param {?} _er
     * @param {?} inj
     * @param {?} render
     */
    constructor(_er, inj, render) {
        this._er = _er;
        this.inj = inj;
        this.render = render;
        this.render.setStyle(this._er.nativeElement, 'display', 'none');
    }
    /**
     * @return {?}
     */
    click() {
        this._er.nativeElement.click();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.control = this.inj.get(NgControl);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.control.control.setValue(value);
    }
}
UploadFileDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hdUploadFile]',
                exportAs: 'hdUploadFile'
            },] },
];
/** @nocollapse */
UploadFileDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadImageDirective {
    constructor() { }
}
UploadImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hdUploadImage]'
            },] },
];
/** @nocollapse */
UploadImageDirective.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UploadContainerComponent {
    /**
     * @param {?} render
     */
    constructor(render) {
        this.render = render;
        this.placeholder = 'Upload file';
        this.hint = '';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.uploadInput.nativeElement.click();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.render.listen(this.uploadInput.nativeElement, 'change', e => {
            if (e.target.files.length) {
                this.filename = e.target.files[0].name;
            }
            const /** @type {?} */ fileList = e.target.files;
            if (fileList.length > 0) {
                const /** @type {?} */ file = fileList[0];
                const /** @type {?} */ myReader = new FileReader();
                myReader.onloadend = (event) => {
                    const /** @type {?} */ image = myReader.result;
                    this.uploadFile.setValue(image);
                };
                myReader.readAsDataURL(file);
            }
        });
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#999';
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // this.background = '#eee'
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.dataTransfer.files.length) {
            this.filename = evt.dataTransfer.files[0].name;
        }
        const /** @type {?} */ fileList = evt.dataTransfer.files;
        if (fileList.length > 0) {
            const /** @type {?} */ file = fileList[0];
            const /** @type {?} */ myReader = new FileReader();
            myReader.onloadend = (event) => {
                const /** @type {?} */ image = myReader.result;
                this.uploadFile.setValue(image);
            };
            myReader.readAsDataURL(file);
        }
    }
}
UploadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-upload-container',
                template: `<ng-content></ng-content>
<div class='hd-upload-container'>
    <input type='file' #filetoupload style='display:none;'>
    <mat-icon>file_upload</mat-icon>
    <span class='hd-upload-placeholder'>{{placeholder}}</span>
    <span class='hd-upload-filename'>{{filename}}</span>
    <span class='hd-upload-hint'>{{hint}}</span>
</div>`,
                styles: [`.hd-upload-container{margin:15px 0;cursor:pointer;border:thin dashed #676c7b;color:#676c7b;padding:20px;text-align:center}.hd-upload-container .mat-icon{vertical-align:middle}.hd-upload-container .hd-upload-hint{text-align:center;display:block;font-size:10px}.hd-upload-container .hd-upload-filename{display:block;text-align:center;font-size:12px;min-height:18px}input[type=file]{display:none}`],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
UploadContainerComponent.ctorParameters = () => [
    { type: Renderer2, },
];
UploadContainerComponent.propDecorators = {
    "placeholder": [{ type: Input },],
    "hint": [{ type: Input },],
    "uploadFile": [{ type: ContentChild, args: [UploadFileDirective,] },],
    "uploadInput": [{ type: ViewChild, args: ['filetoupload',] },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onDragOver": [{ type: HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: HostListener, args: ['dragleave', ['$event'],] },],
    "onDrop": [{ type: HostListener, args: ['drop', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HdUploadModule {
}
HdUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    ReactiveFormsModule,
                    FormsModule
                ],
                exports: [UploadFileDirective, UploadImageDirective, UploadContainerComponent],
                declarations: [UploadFileDirective, UploadImageDirective, UploadContainerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutComponent {
    constructor() {
        this.titleText = 'Humadev Theme';
        this.lazyLoadModule = false;
        this.nav = false;
        this.notification = false;
        this.logout = new EventEmitter();
        this.sidenavOpen = true;
    }
    /**
     * @return {?}
     */
    onLogout() {
        this.logout.emit();
    }
}
LayoutComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-layout',
                template: `
        <hd-main-toolbar
                [notification]="notification"
                (sidenavToggle)="sidenav.toggle()"
                (logout)="onLogout()"
                [titleText]="titleText"
                [titleImg]="titleImg">
        </hd-main-toolbar>
        <hd-sidenav #sidenav
                [opened]='sidenavOpen'
                (pageTitle)="pagebar.changePageTitle($event)"
                [lazyLoadModule]="lazyLoadModule"
                [nav]="nav">
                <hd-page-toolbar #pagebar></hd-page-toolbar>
                <div class='hd-page'>
                    <ng-content></ng-content>
                </div>
        </hd-sidenav>
    `
            },] },
];
/** @nocollapse */
LayoutComponent.propDecorators = {
    "titleText": [{ type: Input },],
    "titleImg": [{ type: Input },],
    "lazyLoadModule": [{ type: Input },],
    "nav": [{ type: Input },],
    "notification": [{ type: Input },],
    "logout": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class BreadcrumbComponent {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // init when refreh page
        let /** @type {?} */ root = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        // used when navigate trough angular router
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
            // set breadcrumbs
            root = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
        });
    }
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        const /** @type {?} */ ROUTE_DATA_BREADCRUMB = 'name';
        // get the child routes
        const /** @type {?} */ children = route.children;
        // return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        // iterate over each children
        for (const /** @type {?} */ child of children) {
            // verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            // verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            // get the route's URL segment
            const /** @type {?} */ routeURL = child.snapshot.url
                .map(segment => segment.path)
                .join('/');
            // append route URL to URL
            url += `/${routeURL}`;
            // add breadcrumb
            const /** @type {?} */ breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            if (child.snapshot.component) {
                breadcrumb.class = 'link';
            }
            else {
                breadcrumb.class = 'non-link';
            }
            breadcrumbs.push(breadcrumb);
            // recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-breadcrumb',
                template: `
            <ul class="hd-breadcrumb">
                  <li><a routerLink="">Home</a></li>
                  <li *ngFor="let breadcrumb of breadcrumbs">
                        <a
                        [routerLink]="[breadcrumb.url]"
                        *ngIf="breadcrumb.class == 'link'; else nonLink">
                              {{breadcrumb.label}}
                        </a>
                        <ng-template #nonLink>
                              <span>{{breadcrumb.label}}</span>
                        </ng-template>
                  </li>
            </ul>
      `
            },] },
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: Router, },
    { type: ActivatedRoute, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LayoutService {
    constructor() {
        this.pageTitle = new BehaviorSubject('');
        this.topProgressBar = new BehaviorSubject(false);
        this.lockScroll = new BehaviorSubject(false);
        this.sidebarOpen = new BehaviorSubject(true);
        this.closeOverlay = new BehaviorSubject(false);
        this.showNotification = new BehaviorSubject(false);
        this.closeOverlay.subscribe((res) => {
            if (res) {
                this.closeOverlay.next(false);
            }
        });
    }
}
LayoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LayoutService.ctorParameters = () => [];
/** @nocollapse */ LayoutService.ngInjectableDef = defineInjectable({ factory: function LayoutService_Factory() { return new LayoutService(); }, token: LayoutService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MenuService {
    /**
     * @param {?} router
     * @param {?} activeRoute
     * @param {?} loc
     * @param {?} _ls
     */
    constructor(router, activeRoute, loc, _ls) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.loc = loc;
        this._ls = _ls;
        this.pageTitle = new BehaviorSubject('');
        this.lazyLoad = true;
        this.sidenav = new BehaviorSubject([]);
        this.moduleIndex = new Subject();
        this.startMenu = [];
        this.moduleActive = new Subject();
        this.router.events
            .pipe(map(event => {
            if (loc.path() !== '') {
                const /** @type {?} */ modulePath = loc.path().split('/')[1];
                this.moduleActive.next(modulePath);
                this.router.config.forEach((el, i) => {
                    if (el.path === modulePath) {
                        this.moduleIndex.next(i);
                    }
                });
            }
            return event;
        }), filter(event => event instanceof NavigationEnd), map(() => this.activeRoute), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), filter(route => route.outlet === 'primary'), switchMap(route => route.data))
            .subscribe(res => {
            this._ls.pageTitle.next(res["name"]);
            this.pageTitle.next(res["name"]);
        });
        if (this.lazyLoad) {
            this.moduleIndex.subscribe(res => {
                if (this.router.config[res]['_loadedConfig']) {
                    this.sidenav.next(this.router.config[res]['_loadedConfig'].routes[0].children);
                }
            });
        }
        else {
            this.sidenav.next(this.router.config);
        }
        this.startMenu = this.router.config;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    navigate(url) {
        this.router.navigate(['/' + url]);
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: Location, },
    { type: LayoutService, },
];
/** @nocollapse */ MenuService.ngInjectableDef = defineInjectable({ factory: function MenuService_Factory() { return new MenuService(inject(Router), inject(ActivatedRoute), inject(Location), inject(LayoutService)); }, token: MenuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function routerTransition() {
    return slideToRight();
}
/**
 * @return {?}
 */
function slideToRight() {
    return trigger('slideToRight', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
function slideToLeft() {
    return trigger('slideToLeft', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
function slideToUp() {
    return trigger('slideToUp', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
function slideToDown() {
    return trigger('slideToDown', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
function fadeUp() {
    return trigger('fadeUp', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(10px)', opacity: 0 }),
            animate('0.3s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('0.3s ease-in-out', style({ transform: 'translateY(-10px)', opacity: 0 }))
        ])
    ]);
}
/**
 * @return {?}
 */
function ringing() {
    return trigger('ringing', [
        transition('* => *', [
            style({ transform: 'rotate(13deg)' }),
            animate('0.3s ease-in', style({ transform: 'rotate(0deg)' }))
        ]),
        transition('* => *', [
            style({ transform: 'rotate(-13deg)' }),
            animate('0.1s ease-in', style({ transform: 'rotate(0deg)' }))
        ])
    ]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidenavComponent {
    /**
     * @param {?} render
     * @param {?} ref
     * @param {?} router
     * @param {?} activeRoute
     * @param {?} menuService
     * @param {?} layoutService
     * @param {?} breakpointObserver
     */
    constructor(render, ref, router, activeRoute, menuService, layoutService, breakpointObserver) {
        this.render = render;
        this.ref = ref;
        this.router = router;
        this.activeRoute = activeRoute;
        this.menuService = menuService;
        this.layoutService = layoutService;
        this.breakpointObserver = breakpointObserver;
        this.nav = false;
        this.lazyLoadModule = false;
        this.pageTitle = new EventEmitter();
        this.opened = false;
        this.sidenavClass = {
            minimize: false
        };
        this.progressBar = false;
        this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
        this.router.events.subscribe(() => this.layoutService.topProgressBar.next(true));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nav === false) {
            this.menuService.sidenav.subscribe(res => {
                this.navFromRouter = res;
            });
        }
        this.layoutService.sidebarOpen.subscribe(open => {
            if (open) {
                this.sidenav.open();
            }
            else {
                this.sidenav.close();
            }
        });
        this.layoutService.topProgressBar.subscribe(progress => (this.progressBar = progress));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // const content = this.ref.nativeElement.querySelector(
        //   '.mat-sidenav-content'
        // );
        // this.layoutService.sidebarOpen.subscribe(open => {
        //   this.render.addClass(content, 'animate-content');
        //   if (open) {
        //     this.render.setStyle(content, 'margin-left', '255px');
        //   } else {
        //     this.render.setStyle(content, 'margin-left', '70px');
        //   }
        // });
        // this.isHandset.subscribe(res => {
        //     if(res) {
        //         this.render.setStyle(content, 'margin-left', '0');
        //     }
        // })
    }
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
     * @param {?} level
     * @return {?}
     */
    toggleChildren(level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return 'active';
        }
        else {
            return 'inactive';
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    checkPath(row) {
        if (row.path === '') {
            return { exact: true };
        }
        else {
            return { exact: false };
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        this.sidenav.close();
        this.layoutService.sidebarOpen.next(false);
    }
    /**
     * @param {?} navItem
     * @return {?}
     */
    checkHidden(navItem) {
        let /** @type {?} */ hidden = false;
        if (navItem.hasOwnProperty('redirectTo')) {
            hidden = true;
        }
        else {
            if (navItem.hasOwnProperty('data')) {
                if (navItem.data.hasOwnProperty('hidden')) {
                    hidden = navItem.data.hidden;
                }
            }
        }
        return hidden;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setPageToolbar(item) {
        this.pageTitle.emit(item.name);
    }
    /**
     * @param {?} menu
     * @param {?=} asal
     * @return {?}
     */
    checkGroupAccess(menu, asal = '') {
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            const /** @type {?} */ allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
                ? true
                : false;
            if (allowed) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-sidenav',
                template: `<mat-progress-bar class="loader" mode="indeterminate" *ngIf='progressBar'></mat-progress-bar>
<mat-sidenav-container>
  <mat-sidenav #sidenav fixedInViewport='true' class="m-grid__item m-aside-left m-aside-left--skin-dark" [attr.role]="isHandset
? 'dialog' : 'navigation'" [mode]="(isHandset | async)!.matches ? 'over' : 'side'" [opened]="!(isHandset | async)!.matches || opened">
    <div class="toolbar-brand">
      <div class="logo">
        <a routerLink="">
          <img [src]="titleImg">
        </a>
      </div>
      <div class="toggler" *ngIf="(isHandset | async)!.matches ? false : true" (click)='toggle()'>
        <!-- BEGIN: Left Aside Minimize Toggle -->
        <a>
          <span></span>
        </a>
        <!-- END -->
      </div>
    </div>
    <div id="m_ver_menu" class="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark" data-menu-vertical="true"
      data-menu-scrollable="false" data-menu-dropdown-timeout="500">
      <ul *ngIf="nav === false; else fromVar" class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow">
        <ng-template ngFor let-level1 [ngForOf]="navFromRouter" let-i="index">
          <ng-template [ngIf]="checkHidden(level1) === false && checkGroupAccess(level1)">
            <li hd-sidenav-item cdk-overlay-origin class="m-menu__item" routerLinkActive="m-menu__item--active" routerLinkActiveOptions="{ exact: true }"
              aria-haspopup="true" [ngClass]="{'m-menu__item--open':childrenAndActive(level1)}" [menu]='level1' [nav]='nav'
              [navFromRouter]='navFromRouter' [index]='i'>
            </li>
          </ng-template>
        </ng-template>
      </ul>
      <ng-template #fromVar>
        <ng-template ngFor let-level1 [ngForOf]="nav" let-i="index">
          <ng-template [ngIf]="checkHidden(level1) === false && checkGroupAccess(level1)">
            <li hd-sidenav-item cdk-overlay-origin class="m-menu__item" routerLinkActive="m-menu__item--active" routerLinkActiveOptions="{ exact: true }"
              aria-haspopup="true" [ngClass]="{'m-menu__item--open':childrenAndActive(level1)}" [menu]='level1' [nav]='nav'
              [index]='i'>
            </li>
          </ng-template>
        </ng-template>
      </ng-template>
    </div>
  </mat-sidenav>
  <mat-sidenav-content>
    <ng-content></ng-content>
  </mat-sidenav-content>
</mat-sidenav-container>
`,
                styles: [`mat-sidenav-container{background:#f2f3f8;position:fixed;overflow:visible}.m-aside-left.m-aside-left--skin-dark{background-color:#2c2e3e}.m-aside-menu{height:calc(100vh - 70px);overflow-y:scroll}.m-aside-menu .m-menu__nav{list-style:none;padding:30px 0}dl,ol,ul{margin-top:0;margin-bottom:1rem}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}.m-aside-menu .m-menu__nav>.m-menu__item{position:relative;margin:0}.m-aside-menu .m-menu__nav .m-menu__item{display:block;float:none;height:auto;padding:0}.m-aside-menu .m-menu__nav .m-menu__submenu{display:block;float:none;margin:0;padding:0}.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__link .m-menu__link-bullet{vertical-align:middle;text-align:left;width:20px}.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__link .m-menu__link-bullet{display:table-cell;height:100%;vertical-align:middle;line-height:0}.mat-drawer{min-width:4vw!important}.mat-sidenav{width:255px}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;width:255px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;cursor:pointer;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.loader{position:fixed;height:2px;z-index:9999;top:0}`],
                animations: [slideToRight()]
            },] },
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: Router, },
    { type: ActivatedRoute, },
    { type: MenuService, },
    { type: LayoutService, },
    { type: BreakpointObserver, },
];
SidenavComponent.propDecorators = {
    "titleImg": [{ type: Input },],
    "nav": [{ type: Input },],
    "lazyLoadModule": [{ type: Input },],
    "navFromRouter": [{ type: Input },],
    "lazyLoadPath": [{ type: Input },],
    "pageTitle": [{ type: Output },],
    "opened": [{ type: Input },],
    "sidenav": [{ type: ViewChild, args: ['sidenav',] },],
    "toggle": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarComponent {
    /**
     * @param {?} menuService
     * @param {?} renderer
     * @param {?} elRef
     * @param {?} layout
     * @param {?} router
     * @param {?} breakpointObserver
     */
    constructor(menuService, renderer, elRef, layout, router, breakpointObserver) {
        this.menuService = menuService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.layout = layout;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.notification = false;
        this.profile = true;
        this.showSidenavToggle = true;
        this.sidenavOpen = true;
        this.sidenavToggle = new EventEmitter();
        this.logout = new EventEmitter();
        this.titleText = 'Humadev Theme';
        this.theme = 'dark';
        this.accountOpen = false;
        this.notificationOpen = false;
        this.messageOpen = false;
        this.topMenuOpen = false;
        this.brandClass = {
            minimize: false,
            hide: false
        };
        this.brandBackground = '#282a3c';
        this.brandToggle = {
            'toggler-right': false,
            'toggler-left': true
        };
        this.sidenav = true;
        this.minimize = new EventEmitter();
        this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.layout.sidebarOpen.subscribe(open => {
            this.sidenavOpen = open;
        });
        this.menuService.moduleActive.subscribe(res => {
            this.active = res;
        });
        if (this.theme === 'dark') {
            this.brandBackground = '#282a3c';
        }
        else {
            this.brandBackground = '#ffffff';
        }
    }
    /**
     * @return {?}
     */
    toggleSidenav() {
        // if (this.sidenav) {
        //   this.brandToggle['toggler-right'] = true;
        //   this.brandToggle['toggler-left'] = false;
        // } else {
        //   this.brandToggle['toggler-right'] = false;
        //   this.brandToggle['toggler-left'] = true;
        // }
        // this.sidenav = !this.sidenav;
        this.layout.sidebarOpen.next(this.sidenav);
        // this.brandClass.minimize = false;
    }
    /**
     * @return {?}
     */
    onSidenavToggle() {
        this.sidenavToggle.emit();
    }
    /**
     * @return {?}
     */
    onLogout() {
        this.logout.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        this.menuService.navigate(e.value);
    }
}
MainToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-main-toolbar',
                template: `<!-- BEGIN: Header -->
<!-- BEGIN: Brand -->
<div class="toolbar-brand" *ngIf="!sidenavOpen || (isHandset | async).matches || !showSidenavToggle">
  <div class="toggler" (click)='toggleSidenav()' *ngIf='showSidenavToggle'>
    <!-- BEGIN: Left Aside Minimize Toggle -->
    <a>
      <span></span>
    </a>
    <!-- END -->
  </div>
  <div class="logo" *ngIf="!(isHandset | async)!.matches">
    <a routerLink="">
      <img [src]="titleImg">
    </a>
  </div>
</div>
<!-- END: Brand -->
<div class="toolbar-menu">
  <ng-content></ng-content>
</div>
<!-- END: Header -->
`,
                styles: [`@media (min-width:993px){a.toggler-right span,a.toggler-right span:after,a.toggler-right span:before{background-color:#2739c1!important}.toolbar-menu{-webkit-box-flex:1;-ms-flex:1 auto;flex:1 auto;vertical-align:top;-webkit-transition:all .3s ease;transition:all .3s ease}}:host{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);overflow:hidden;z-index:101;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 0 15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.toolbar-brand.minimize .toggler a{text-align:center}.toggler-right:hover span:after,.toggler-right:hover span:before{width:100%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:before{left:auto;right:0;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:after{left:auto;right:0;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-left:hover span:after,.toggler-left:hover span:before{width:100%;-webkit-transition:all .4s ease;transition:all .4s ease}.toggler-left.toggler--active span:before{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:50%}.toggler-left.toggler--active span:after{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:75%}:host .m-header-head{background-color:#fff}@media (min-width:993px){.m-header .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease}:host .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:300px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}:host.minimize .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:70px}.m-header--fixed.m-header--fixed-hidable.m-header--hide .m-header{height:70px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed.m-header--fixed-hidable.m-header--show .m-header{height:70px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}:host{height:70px;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:999;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}@media (max-width:992px){:host{height:60px!important}:host .m-header__nav{top:-100%;position:relative}.m-header--fixed-mobile .m-header{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:101;position:fixed;top:0;left:0;right:0}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--hide .m-header{height:60px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--show .m-header{height:60px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}.m-header--fixed-mobile .m-header .m-header-head{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:3px!important}`],
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
MainToolbarComponent.ctorParameters = () => [
    { type: MenuService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LayoutService, },
    { type: Router, },
    { type: BreakpointObserver, },
];
MainToolbarComponent.propDecorators = {
    "notification": [{ type: Input },],
    "notificationList": [{ type: Input },],
    "profile": [{ type: Input },],
    "showSidenavToggle": [{ type: Input },],
    "sidenavOpen": [{ type: Input },],
    "sidenavToggle": [{ type: Output },],
    "logout": [{ type: Output },],
    "titleText": [{ type: Input },],
    "titleImg": [{ type: Input },],
    "theme": [{ type: Input },],
    "menu": [{ type: ViewChild, args: ['mainMenu',] },],
    "minimize": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PageToolbarComponent {
    /**
     * @param {?} _ls
     */
    constructor(_ls) {
        this._ls = _ls;
        this.pageTitle = '';
        _ls.pageTitle.subscribe(res => (this.pageTitle = res));
    }
    /**
     * @param {?} title
     * @return {?}
     */
    changePageTitle(title) {
        this.pageTitle = title;
    }
}
PageToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-page-toolbar',
                template: `
        <h3 class="title">
            {{pageTitle}}
        </h3>
        <hd-breadcrumb></hd-breadcrumb>
    `,
                styles: [
                    `
      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 0;
        vertical-align: middle;
      }
      .title {
        padding: 7px 25px 7px 0;
        font-family: Roboto;
        font-weight: 300;
        font-size: 1.55rem;
        font-weight: 500;
        vertical-align: middle;
        color: #3f4047;
      }
    `
                ]
            },] },
];
/** @nocollapse */
PageToolbarComponent.ctorParameters = () => [
    { type: LayoutService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StartPageComponent {
    /**
     * @param {?} menuService
     */
    constructor(menuService) {
        this.menuService = menuService;
        this.fromRouter = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    }
    /**
     * @param {?} menu
     * @param {?=} asal
     * @return {?}
     */
    checkGroupAccess(menu, asal = '') {
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            const /** @type {?} */ allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
                ? true
                : false;
            if (allowed) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
}
StartPageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-start-page',
                template: `<div class="start-menu">
  <ng-template ngFor let-menu [ngForOf]="menus" let-i="index">
    <a class="item" [routerLink]="[menu.path]" *ngIf="menu.data.isMenu && checkGroupAccess(menu)">
      <img [src]="menu.data.icon">
      <span class='text'>{{menu.data.title}}</span>
      <span class='description'>{{menu.data.description}}</span>
    </a>
  </ng-template>
</div>
<div class='copyright'>
  <span>{{copyright}}</span>
</div>
`,
                styles: [`:host{background:#fff}:host .start-menu{position:fixed;overflow-y:scroll;bottom:20px;top:70px;padding:20px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:100vw;min-height:90vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;text-align:center}:host .start-menu .item{background-color:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;width:20%;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}`]
            },] },
];
/** @nocollapse */
StartPageComponent.ctorParameters = () => [
    { type: MenuService, },
];
StartPageComponent.propDecorators = {
    "menus": [{ type: Input },],
    "fromRouter": [{ type: Input },],
    "copyright": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StartPageDialogComponent {
    /**
     * @param {?} menuService
     * @param {?} dialog
     */
    constructor(menuService, dialog) {
        this.menuService = menuService;
        this.dialog = dialog;
        this.fromRouter = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    }
    /**
     * @param {?} menu
     * @param {?=} asal
     * @return {?}
     */
    checkGroupAccess(menu, asal = '') {
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            const /** @type {?} */ allowed = intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
                ? true
                : false;
            if (allowed) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.dialog.close();
    }
}
StartPageDialogComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'hd-start-page-dialog',
                template: `<div class="start-menu">
  <ng-template ngFor let-menu [ngForOf]="menus" let-i="index">
    <a class="item" [routerLink]="[menu.path]" *ngIf="menu.data.isMenu && checkGroupAccess(menu)" (click)="onClick($event)">
      <img [src]="menu.data.icon">
      <span class='text'>{{menu.data.title}}</span>
      <span class='description'>{{menu.data.description}}</span>
    </a>
  </ng-template>
</div>
`,
                styles: [`:host{background:#fff}:host .start-menu{padding:20px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;text-align:center}:host .start-menu .item{display:inline-block;background-color:none;color:none;outline:0;border:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;width:25%;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{color:none;background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}`]
            },] },
];
/** @nocollapse */
StartPageDialogComponent.ctorParameters = () => [
    { type: MenuService, },
    { type: MatDialogRef, },
];
StartPageDialogComponent.propDecorators = {
    "menus": [{ type: Input },],
    "fromRouter": [{ type: Input },],
    "copyright": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarLeftMenuComponent {
    /**
     * @param {?} overlay
     * @param {?} menuService
     * @param {?} dialog
     */
    constructor(overlay, menuService, dialog) {
        this.overlay = overlay;
        this.menuService = menuService;
        this.dialog = dialog;
        this.startMenus = this.menuService.startMenu;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        this.dialog.open(StartPageDialogComponent, {
            width: '90vw',
            height: '90vh'
        });
        //   const config = new OverlayConfig({
        //     hasBackdrop: true,
        //     backdropClass: 'menu-overlay-backdrop',
        //     scrollStrategy: this.overlay.scrollStrategies.block(),
        //     positionStrategy: this.overlay
        //       .position()
        //       .connectedTo(
        //         this.menu.elementRef,
        //         { originX: 'start', originY: 'bottom' },
        //         { overlayX: 'start', overlayY: 'top' }
        //       )
        //   });
        //   const overlayRef = this.overlay.create(config);
        //   overlayRef.attach(this.templatePortals.first);
        //   overlayRef.backdropClick().subscribe(() => {
        //     overlayRef.dispose();
        //   });
    }
}
MainToolbarLeftMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-main-toolbar-left-menu',
                template: `<ul class="left-menu-list">
  <li class="left-menu-item" (click)="clickMenu($event)" cdk-overlay-origin #mainMenu="cdkOverlayOrigin">
    <a class="left-menu-link">
      <i class="icon flaticon-squares-3"></i>
      <span class="text">
        Main Menu
      </span>
      <!-- <i class="arrow la la-angle-down"></i> -->
      <!-- <i class="arrow la la-angle-right"></i> -->
    </a>
    <ng-template cdk-portal>
      <div class="left-menu-dropdown" [@fadeUp]="">
        <span class="arrow"></span>
        <ul class="left-dropdown-list">
          <li hd-left-menu-item *ngFor="let menu of startMenus">
            <a routerLink="/{{menu.path}}" class="left-dropdown-link">
              <i class="left-dropdown-link-icon">
                <img [src]="menu.data.icon">
              </i>
              <span class="left-dropdown-link-text">
                {{menu.data.title}}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </ng-template>
  </li>
</ul>
`,
                styles: [`@media (min-width:993px){:host{width:auto;float:left;display:table;height:100%;margin:0 0 0 10px;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list{list-style:none;margin:0;padding:0;display:table-row;height:100%;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list .left-menu-item{position:relative;height:100%;display:table-cell;vertical-align:middle;padding:0 10px}.left-menu-list .left-menu-item .left-menu-link{padding:0;display:table;position:relative;vertical-align:middle;height:100%;outline:0!important;cursor:pointer;text-decoration:none!important}.left-menu-list .left-menu-item .left-menu-link .text{color:#676c7b;font-weight:400;font-size:14px;text-transform:initial;width:auto;display:table-cell;height:100%;padding:0;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .text:hover{color:#214e8d!important}.left-menu-list .left-menu-item .left-menu-link .icon{color:#b8bece;font-size:18px;width:30px;text-align:left;padding:0;line-height:0;display:table-cell;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .arrow{color:#b9c1d4;font-size:14px;width:25px;text-align:right;vertical-align:middle;display:table-cell}.left-menu-list .left-menu-item .left-menu-link .arrow:hover{color:#214e8d!important}}`],
                animations: [fadeUp()]
            },] },
];
/** @nocollapse */
MainToolbarLeftMenuComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: MenuService, },
    { type: MatDialog, },
];
MainToolbarLeftMenuComponent.propDecorators = {
    "menu": [{ type: ViewChild, args: ['mainMenu',] },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarRightMenuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainToolbarRightMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-main-toolbar-right-menu',
                template: `<div class="right-menu-wrapper">
    <ul class="right-menu-list">
        <ng-content></ng-content>
    </ul>
</div>`,
                styles: [`:host{display:table;table-layout:fixed;width:auto;height:100%;float:right;padding:0}.right-menu-wrapper{display:table-cell;vertical-align:top;height:100%;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-list{margin:0 20px 0 30px;display:inline-block;height:100%;width:auto;padding:0;list-style:none;font-size:14px;font-weight:300;font-family:Poppins;line-height:1.5;color:#212529}`]
            },] },
];
/** @nocollapse */
MainToolbarRightMenuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarMenuItemComponent {
}
MainToolbarMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-left-menu-item]',
                template: `<ng-content></ng-content>`,
                styles: [`@media (min-width:993px){:host{position:relative;padding:0 20px;height:100%;display:table-cell;vertical-align:middle}}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarNotificationComponent {
    /**
     * @param {?} overlay
     * @param {?} _render
     * @param {?} _layout
     */
    constructor(overlay, _render, _layout) {
        this.overlay = overlay;
        this._render = _render;
        this._layout = _layout;
        this.blink = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._layout.showNotification.subscribe(res => {
            if (res) {
                this.blink = true;
                this._render.addClass(this.shake.nativeElement, 'm-animate-shake');
            }
            else {
                this.blink = false;
                this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        this.blink = false;
        this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
        const /** @type {?} */ config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay
                .position()
                .connectedTo(this.menu.elementRef, { originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' })
                .withOffsetX(-30)
        });
        const /** @type {?} */ overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
    }
}
MainToolbarNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-main-toolbar-notification]',
                template: `<a cdk-overlay-origin class="right-menu-item-link" #notification="cdkOverlayOrigin" (click)="clickMenu($event)">
    <span *ngIf='blink' class="notification-dot-blink m-animate-blink"></span>
    <span #shake class="right-menu-link-icon">
        <i class="flaticon-music-2"></i>
    </span>
</a>
<ng-template cdk-portal>
    <div class="notification-dropdown" [@fadeUp]="">
        <span class="arrow" style="left: 58%"></span>
        <div class="inner">
            <div class="header" style="background: url(./assets/notification.jpg); background-size: cover;">
                <span class="header-title">
                    9 New
                </span>
                <span class="header-subtitle">
                    User Notifications
                </span>
            </div>
            <ng-content></ng-content>
        </div>
    </div>
</ng-template>`,
                styles: [`:host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=" flaticon-"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.notification-dot-blink{left:50%;margin-left:-2px;position:absolute;top:11px;background-color:#f4516c;color:#fff;padding:0;line-height:4px;min-height:4px;min-width:4px;height:4px;width:4px;border-radius:100%;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}@-webkit-keyframes m-animate-blink{50%{opacity:0}}@keyframes m-animate-blink{50%{opacity:0}}@-webkit-keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}@keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}.m-animate-blink{-webkit-animation:1s step-start infinite m-animate-blink;animation:1s step-start infinite m-animate-blink;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.m-animate-shake{-webkit-animation:.1s ease-in .1s infinite alternate m-animate-shake;animation:.1s ease-in .1s infinite alternate m-animate-shake;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}`],
                animations: [fadeUp(), ringing()]
            },] },
];
/** @nocollapse */
MainToolbarNotificationComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: Renderer2, },
    { type: LayoutService, },
];
MainToolbarNotificationComponent.propDecorators = {
    "menu": [{ type: ViewChild, args: ['notification',] },],
    "shake": [{ type: ViewChild, args: ['shake',] },],
    "blink": [{ type: Input },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarProfileComponent {
    /**
     * @param {?} overlay
     * @param {?} ls
     */
    constructor(overlay, ls) {
        this.overlay = overlay;
        this.ls = ls;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickMenu(e) {
        const /** @type {?} */ config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(this.menu.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }).withOffsetX(-265)
        });
        const /** @type {?} */ overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
        this.ls.closeOverlay.subscribe((res) => {
            if (res) {
                overlayRef.dispose();
            }
        });
    }
}
MainToolbarProfileComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-main-toolbar-profile]',
                template: `<a cdk-overlay-origin class="right-menu-item-link" #profile="cdkOverlayOrigin" (click)="clickMenu($event)">
<span class="right-menu-link-picture m--img-rounded m--marginless m--img-centered">
        <img [src]="imgProfile"/>
    </span>
    <span class="m-topbar__username hide">
        Nick
    </span>
</a>
<ng-template cdk-portal>
    <div class="profile-dropdown" [@fadeUp]="">
        <span class="arrow" style="left: 88%"></span>
        <div class="inner">
            <div class="header" style="background: url(./assets/profile.jpg); background-size: cover;">
                <div class="user-pic">
                    <img [src]="imgProfile"/>
                </div>
                <div class="details">
                    <span class="name">
                        {{name}}
                    </span>
                    <a [href]="'mail:'+email" class="email">
                        {{email}}
                    </a>
                </div>
            </div>
            <div class='content'>
                <ng-content></ng-content>
            </div>
        </div>
    </div>
</ng-template>`,
                styles: [`:host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link .right-menu-link-picture{display:table-cell;vertical-align:middle;text-align:center;margin:0 auto}.right-menu-item-link .right-menu-link-picture img{display:block;vertical-align:middle;max-width:41px!important;text-align:center;margin:0!important;border-radius:50%;border-style:none}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=" flaticon-"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.hide{display:none!important}.header{padding:20px;border-radius:6px 6px 0 0;margin:0;display:table;table-layout:fixed}.header .user-pic{display:table-cell;text-align:right;padding:0 5px 0 0;vertical-align:middle;width:70px}.header .user-pic img{max-width:70px!important;margin:0!important;border-radius:100%}.header .details{display:table-cell;width:100%;text-align:left;vertical-align:middle;padding:0 0 0 15px}.header .details .name{color:#fff;display:block;padding:0;font-size:1.3rem;font-weight:400;line-height:1}.header .details .email{color:#d9d9d9;display:inline-block;padding:6px 0 0;font-size:1rem;text-decoration:none;position:relative}`],
                animations: [fadeUp()]
            },] },
];
/** @nocollapse */
MainToolbarProfileComponent.ctorParameters = () => [
    { type: Overlay, },
    { type: LayoutService, },
];
MainToolbarProfileComponent.propDecorators = {
    "imgProfile": [{ type: Input },],
    "name": [{ type: Input },],
    "email": [{ type: Input },],
    "menu": [{ type: ViewChild, args: ['profile',] },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MainToolbarChatComponent {
}
MainToolbarChatComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-main-toolbar-chat]',
                template: `<a class="right-menu-item-link">
    <!-- <span class="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span> -->
    <span class="right-menu-link-icon">
        <i class="flaticon-chat"></i>
    </span>
</a>`,
                styles: [`:host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=" flaticon-"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidenavItemComponent {
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
            const /** @type {?} */ config = new OverlayConfig({
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
                template: `<a class='menu-item' *ngIf="menu.children && menu.children.length > 0; else noChildItem" (click)="parentOpen(index)" [ngClass]="{'active':childrenAndActive(menu)}">
  <i class="icon flaticon-settings"></i>
  <span class="text">
    {{menu.data.name}}
  </span>
  <i class="arrow la la-angle-right" *ngIf="menu.children && menu.children.length > 0"></i>
</a>
<ng-template #noChildItem>
  <a class='menu-item no-child' [routerLink]="menu?.path" routerLinkActive="menu-item-active" routerLinkActiveOptions="{ exact: true }">
    <i class="icon flaticon-settings"></i>
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
                styles: [`:host{background-color:none;position:relative;margin:0;display:block;float:none;height:auto;padding:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}:host :hover{background-color:#292b3a}.menu-item{padding:2px 30px;height:44px;display:table;table-layout:fixed;margin:0;text-decoration:none;position:relative;outline:0}.menu-item i.icon{color:#fefefe;text-align:left;width:35px;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0 15px 0 0}.menu-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-item span.badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-item i.arrow{color:#fefefe;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-item i.arrow:before{display:inline-block;-webkit-transition:all .3s ease;transition:all .3s ease}.menu-item:hover i.arrow,.menu-item:hover i.icon{color:#868aa8}.menu-item.minimize{padding-left:0;padding-right:0;text-align:center;height:44px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-item.minimize i.arrow,.menu-item.minimize span.text{display:none}.menu-item.minimize i.icon{width:100%;text-align:center;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0!important}.menu-item.active i.arrow,.menu-item.active i.icon{color:#868aa8}.menu-item.active i.arrow:before{-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate3d(0,0,0);-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.menu-subnav-item{display:block;margin:0;float:none;height:auto;padding:0;cursor:pointer}.menu-subnav-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-subnav-item span.badge{display:table-cell;height:100%;width:20px;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-subnav-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item i.arrow{color:#525672;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-subnav-item i.arrow:before{display:inline-block;-webkit-transition:all .3s ease;transition:all .3s ease}.menu-subnav-item a{padding:0 30px 0 50px;height:40px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-subnav-item a i{vertical-align:middle;text-align:left;width:20px;display:table-cell;height:100%;line-height:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.menu-subnav-item a i span{width:4px;height:4px;border-radius:100%;vertical-align:middle;display:inline-block;background-color:#525672}.menu-subnav-item a>span{color:#fefefe;font-weight:400;font-size:1rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0;vertical-align:middle}.menu-subnav-item a .badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right;width:20px}.menu-subnav-item a .badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item-active a i,.menu-subnav-item-active a span.text{color:#2a61ac!important}.menu-subnav-item-active a i span span.badge,.menu-subnav-item-active a span.text span span.badge{color:#fff}.menu-item-active{background-color:#292b3a}.menu-item-active i,.menu-item-active span{color:#2a61ac!important}.menu-item-active span.badge span{color:#fff!important}.menu-submenu{overflow:hidden;float:none;margin:0;padding:0}.menu-submenu .menu-subnav{padding:0;width:100%;margin:0;list-style:none}.menu-submenu .menu-subnav .menu-subnav-item.subnav-title{display:none}.menu-submenu.minimize{height:0;overflow:hidden}.menu-item.minimize .text{-webkit-transition:all .3s ease;transition:all .3s ease;display:none!important}.menu-item.minimize .m-brand__tools{text-align:center}`],
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
    { type: Router, },
    { type: Overlay, },
    { type: ElementRef, },
    { type: LayoutService, },
];
SidenavItemComponent.propDecorators = {
    "menu": [{ type: Input, args: ['menu',] },],
    "index": [{ type: Input, args: ['index',] },],
    "nav": [{ type: Input },],
    "navFromRouter": [{ type: Input },],
    "templatePortals": [{ type: ViewChildren, args: [TemplatePortalDirective,] },],
    "sidenavOpen": [{ type: Input },],
    "onHover": [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
    "onLeave": [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileItemComponent {
    /**
     * @param {?} render
     * @param {?} el
     * @param {?} ls
     */
    constructor(render, el, ls) {
        this.render = render;
        this.el = el;
        this.ls = ls;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', () => {
                this.ls.closeOverlay.next(true);
            });
        }
    }
}
ProfileItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-item]',
                template: `
    <span class="link">
        <i [class]="icon"></i>
        <span class="title">
            <span class="wrap">
                <span class="text">
                    <ng-content></ng-content>
                </span>
                <span class="link-badge" *ngIf="badge">
                    <span class="badge badge-success">
                        {{badge}}
                    </span>
                </span>
            </span>
        </span>
    </span>
  `,
                styles: [`:host{display:block;padding:0 20px}:host .link{display:table;table-layout:fixed;width:100%;height:100%;text-decoration:none;position:relative;outline:0!important;vertical-align:middle;padding:9px 0;-ms-touch-action:manipulation;touch-action:manipulation;color:#6f727d}:host .link .icon{display:table-cell;height:100%;vertical-align:middle;text-align:left;width:35px;font-size:1.4rem;line-height:0}:host .link .title{display:table-cell;height:100%;padding:0;margin:0;vertical-align:middle}:host .link .title .wrap{display:table;height:100%;margin:0;width:100%;padding:0;vertical-align:middle}:host .link .title .wrap .text{font-weight:400;display:table-cell;height:100%;width:100%;margin:0;padding:0;vertical-align:middle;font-size:1rem}:host .link .title .wrap .link-badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}:host .link .title .wrap .link-badge .badge{border-radius:10px;background:#eaeaea;color:#444;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px}:host .link .title .wrap .link-badge .badge.badge-success{background-color:#34bfa3;color:#fff}:host .link:hover{color:#2a61ac!important}:host:hover{background-color:rgba(113,106,202,.1);color:#2a61ac!important;cursor:pointer}`]
            },] },
];
/** @nocollapse */
ProfileItemComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LayoutService, },
];
ProfileItemComponent.propDecorators = {
    "badge": [{ type: Input },],
    "icon": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileSeparatorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProfileSeparatorComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-separator]',
                template: `
  `,
                styles: [`
        :host{
            margin: 15px 0;
            margin-left: -20px;
            margin-right: -20px;
            border-bottom: 1px solid #f4f5f8;
            height: 0;
            overflow: hidden;
        }
  `]
            },] },
];
/** @nocollapse */
ProfileSeparatorComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileSectionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProfileSectionComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-section]',
                template: `
    <span class="text">
        <ng-content></ng-content>
    </span>
  `,
                styles: [`
        :host{
            display: table;
            width: 100%;
            vertical-align: middle;
            margin: 20px 20px 10px 20px;
        }
        .text{
            color:#2a61ac;
            display: table-cell;
            margin: 0;
            vertical-align: middle;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;

        }
  `]
            },] },
];
/** @nocollapse */
ProfileSectionComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileButtonComponent {
    /**
     * @param {?} render
     * @param {?} el
     * @param {?} ls
     */
    constructor(render, el, ls) {
        this.render = render;
        this.el = el;
        this.ls = ls;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', () => {
                this.ls.closeOverlay.next(true);
            });
        }
    }
}
ProfileButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-button]',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`
    :host{
        display: block;
        padding: 20px 20px;
        padding-top:0;
    }
  `]
            },] },
];
/** @nocollapse */
ProfileButtonComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LayoutService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProfileListComponent.decorators = [
    { type: Component, args: [{
                selector: '[hd-profile-list]',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`
    :host{
        padding: 0;
        margin: 0;
        margin-top:20px;
        list-style: none;
    }
  `]
            },] },
];
/** @nocollapse */
ProfileListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimelineComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-timeline',
                template: `
        <div class="items">
            <ng-content></ng-content>
        </div>
    `,
                styles: [`:host{display:block}:host .items{position:relative;padding:0;margin:0}:host .items::before{background-color:#ebedf2;position:absolute;display:block;content:'';width:1px;height:100%;top:0;bottom:0;left:3px}`]
            },] },
];
/** @nocollapse */
TimelineComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimelineItemComponent {
}
TimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-timeline-item',
                template: `
        <span class="badge"></span>
        <span class="text">
            <ng-content></ng-content>
            <span *ngIf="badge" class="badge badge-success">{{badge}}</span>
        </span>
        <span class="time" *ngIf="time">
            {{time}}
        </span>
    `,
                styles: [`:host{position:relative;display:table;table-layout:fixed;width:100%;padding:6px 0;margin:5px 0}:host>.badge{text-align:left;vertical-align:middle;display:table-cell;position:relative;width:20px}:host .badge::before{background-color:#ebedf2;position:absolute;display:block;content:'';width:7px;height:7px;left:0;top:50%;margin-top:-3.5px;border-radius:100%}:host .text{color:#575962;display:table-cell;text-align:left;vertical-align:middle;width:100%;padding:0 5px 0 0;font-size:1rem;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}:host .text .badge{letter-spacing:.6px;padding:1px 10px;border-radius:10px;background:#eaeaea;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;width:auto;vertical-align:middle;text-align:center;display:inline-block}:host .text .badge.badge-success{background-color:#34bfa3;color:#fff}:host .time{color:#7b7e8a;display:table-cell;text-align:right;vertical-align:middle;width:80px;padding:0 7px 0 0;font-size:.85rem}:host:first-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;top:0;bottom:0;left:3px}:host:last-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;bottom:0;left:3px}`]
            },] },
];
/** @nocollapse */
TimelineItemComponent.propDecorators = {
    "badge": [{ type: Input },],
    "time": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HdLayoutModule {
}
HdLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatListModule,
                    MatMenuModule,
                    MatIconModule,
                    MatGridListModule,
                    MatProgressBarModule,
                    MatSelectModule,
                    RouterModule,
                    FormsModule,
                    OverlayModule,
                    PortalModule,
                    MatTabsModule,
                    MatDialogModule
                ],
                exports: [
                    LayoutComponent,
                    MainToolbarComponent,
                    PageToolbarComponent,
                    SidenavComponent,
                    BreadcrumbComponent,
                    StartPageComponent,
                    MainToolbarLeftMenuComponent,
                    MainToolbarRightMenuComponent,
                    MainToolbarMenuItemComponent,
                    MainToolbarNotificationComponent,
                    MainToolbarProfileComponent,
                    MainToolbarChatComponent,
                    ProfileItemComponent,
                    ProfileSeparatorComponent,
                    ProfileSectionComponent,
                    ProfileButtonComponent,
                    ProfileListComponent,
                    TimelineComponent,
                    TimelineItemComponent,
                    StartPageDialogComponent
                ],
                declarations: [
                    StartPageDialogComponent,
                    LayoutComponent,
                    BreadcrumbComponent,
                    SidenavComponent,
                    MainToolbarComponent,
                    PageToolbarComponent,
                    StartPageComponent,
                    MainToolbarLeftMenuComponent,
                    MainToolbarRightMenuComponent,
                    MainToolbarMenuItemComponent,
                    MainToolbarNotificationComponent,
                    MainToolbarProfileComponent,
                    MainToolbarChatComponent,
                    SidenavItemComponent,
                    ProfileItemComponent,
                    ProfileSeparatorComponent,
                    ProfileSectionComponent,
                    ProfileButtonComponent,
                    ProfileListComponent,
                    TimelineComponent,
                    TimelineItemComponent
                ],
                entryComponents: [StartPageDialogComponent],
                providers: [MenuService, OverlayContainer, LayoutService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginComponent {
    constructor() { }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-login',
                template: `<ng-content></ng-content>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;width:100%}`]
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LeftSideComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LeftSideComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-left-side',
                template: `<ng-content></ng-content>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;border:none;height:100vh}`]
            },] },
];
/** @nocollapse */
LeftSideComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RightSideComponent {
    /**
     * @param {?} _render
     * @param {?} _ref
     */
    constructor(_render, _ref) {
        this._render = _render;
        this._ref = _ref;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._render.setStyle(this._ref.nativeElement, 'background-image', 'url(' + this.background + ')'); // coloring row with class
    }
}
RightSideComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-right-side',
                template: `<ng-content></ng-content>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;border:none;height:100vh;background-attachment:fixed;background-size:cover;overflow:hidden}`]
            },] },
];
/** @nocollapse */
RightSideComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
RightSideComponent.propDecorators = {
    "background": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LoginFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.title = 'Title';
        this.login = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLogin(event) {
        if (this.loginForm.valid) {
            this.login.emit(this.loginForm.value);
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    changePasswordType(input) {
        if (input.type === 'password') {
            input.type = 'text';
        }
        else {
            input.type = 'password';
        }
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-login-form',
                template: `<div>
    <img [src]="logo">
</div>
<h3>Sign in to admin</h3>
<form [formGroup]='loginForm' (ngSubmit)="onLogin($event)">
    <mat-form-field>
        <input matInput formControlName="email" placeholder="Email" autofill="off">
        <mat-hint align="start" class="error" *ngIf="loginForm.controls.email.invalid && loginForm.controls.email.touched">
            <span *ngIf="loginForm.controls.email.errors.required">
                Email harus diisi
            </span>
            <span *ngIf="loginForm.controls.email.errors.email">
                Format email salah
            </span>
        </mat-hint>
    </mat-form-field>
    <mat-form-field>
        <input matInput formControlName="password" type="password" placeholder="Password" #pass>
        <button type="button" mat-icon-button matSuffix (click)="changePasswordType(pass)">
            <mat-icon>visibility</mat-icon>
        </button>
        <mat-hint align="start" class="error" *ngIf="loginForm.controls.password.invalid && loginForm.controls.password.touched">
            <span *ngIf="loginForm.controls.password.errors.required">
                Password harus diisi
            </span>
            <span *ngIf="loginForm.controls.password.errors.minlength">
                Password minimal {{loginForm.controls.password.errors.minlength.requiredLength}} karakter
            </span>
            <span *ngIf="loginForm.controls.password.errors.maxlength">
                Password maximal {{loginForm.controls.password.errors.maxlength.requiredLength}} karakter
            </span>
        </mat-hint>
    </mat-form-field>
    <button mat-raised-button color="primary" class='mat-elevation-z5'>Sign In</button>
</form>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;vertical-align:middle;text-align:center;width:100%;padding-top:20%;font-family:Poppins;color:#212529}:host img{max-width:250px;margin-bottom:50px}:host h3{display:block;font-size:1.4rem;margin-bottom:50px;font-weight:500;font-family:Poppins;color:#212529}:host form{text-align:center}:host form mat-form-field{max-width:60%;margin:20px auto;display:block}`]
            },] },
];
/** @nocollapse */
LoginFormComponent.ctorParameters = () => [
    { type: FormBuilder, },
];
LoginFormComponent.propDecorators = {
    "title": [{ type: Input },],
    "login": [{ type: Output },],
    "logo": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HdLoginModule {
}
HdLoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                    ReactiveFormsModule
                ],
                exports: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent],
                declarations: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContextMenuPanelComponent {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.menuItemClicked = new EventEmitter();
        this.height = new BehaviorSubject(null);
        this.width = new BehaviorSubject(null);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onClick(item) {
        this.menuItemClicked.emit(item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.height.next(this._el.nativeElement.offsetHeight);
        this.width.next(this._el.nativeElement.offsetWidth);
    }
    /**
     * @param {?} groupAccess
     * @return {?}
     */
    checkGroupAccess(groupAccess) {
        if (groupAccess && groupAccess.permissions && groupAccess.groups) {
            const /** @type {?} */ allowed = intersection(groupAccess.permissions, groupAccess.groups).length > 0
                ? true
                : false;
            if (allowed) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
}
ContextMenuPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-menu-panel',
                template: `
    <div class="hd-context-menu-panel"
      fxLayout="column">
        <ng-template ngFor let-item [ngForOf]="menuItem">
            <a mat-button *ngIf="item.display !== false && checkGroupAccess(item.groupPermission)"
                (click)='onClick(item)'>
                    <mat-icon style="width:15%; font-size: 16px; height: auto">{{item.icon}}</mat-icon>
                    <div style="display: inline-block; width:75%">{{item.title}}</div>
                    <mat-icon style="width:10%" *ngIf='item.children && item.children.length'>keyboard_arrow_right</mat-icon>
            </a>
        </ng-template>
    </div>
  `,
                styles: [
                    `
        :host{
            max-height: 500px;
            overflow-y: scroll;
            position: fixed !important;
            min-width: 200px;
            display: block;
            z-index:10;
            box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }

        :host div a{
            display: block;
            text-align: left;
            padding:4px 10px;
            font-size:12px;
            md-icon{
                font-size:12px !important;
                height: 16px;
            }
        }

        :host div a md-icon{
            font-size:12px !important;
            height: 16px;
        }
    `
                ]
            },] },
];
/** @nocollapse */
ContextMenuPanelComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ContextMenuPanelComponent.propDecorators = {
    "menuItemClicked": [{ type: Output },],
    "menuItem": [{ type: Input },],
    "onContextMenu": [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContextMenuService {
    constructor() {
        this.contextMenu = [];
        this.refs = [];
    }
    /**
     * @param {?} overlay
     * @return {?}
     */
    setContextMenuOverlay(overlay) {
        this.contextMenu = this.contextMenu.concat(overlay);
    }
    /**
     * @return {?}
     */
    getContextMenuOverlay() {
        return this.contextMenu;
    }
    /**
     * @return {?}
     */
    closeAllContextMenus() {
        if (this.contextMenu) {
            this.contextMenu.forEach((overlay, index) => {
                overlay.detach();
                overlay.dispose();
            });
        }
        this.contextMenu = [];
    }
    /**
     * @param {?} el
     * @return {?}
     */
    setRef(el) {
        this.refs = this.refs.concat(el);
    }
    /**
     * @return {?}
     */
    getRef() {
        return this.refs;
    }
    /**
     * @return {?}
     */
    destroyAllRef() {
        this.refs = [];
    }
}
ContextMenuService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ContextMenuService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContextMenuDirective {
    /**
     * @param {?} ref
     * @param {?} render
     * @param {?} overlay
     * @param {?} _service
     */
    constructor(ref, render, overlay, _service) {
        this.ref = ref;
        this.render = render;
        this.overlay = overlay;
        this._service = _service;
        this.hdContextMenu = new EventEmitter();
        this.active = false;
        this.fakeElement = {
            getBoundingClientRect: () => ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            })
        };
        render.setStyle(ref.nativeElement, 'cursor', 'context-menu'); // add context-menu cursor to element used this directive
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        this._service.closeAllContextMenus();
        const /** @type {?} */ refs = this._service.getRef();
        if (refs) {
            refs.forEach((ref, index) => {
                this.render.removeClass(ref.nativeElement, 'hd-contextmenu-active');
            });
        }
        this._service.destroyAllRef();
        this._service.setRef(this.ref);
        this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active'); // coloring row with class
        this.createPanel(event);
        this.addPanelItem();
        this.watchItemClick();
        this.outsideListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    createPanel(event) {
        const /** @type {?} */ offsetX = event.offsetX;
        const /** @type {?} */ offsetY = event.offsetY;
        this.fakeElement.getBoundingClientRect = () => ({
            bottom: event.clientY,
            height: 0,
            left: event.clientX,
            right: event.clientX,
            top: event.clientY,
            width: 0
        });
        const /** @type {?} */ positionStrategy = this.overlay
            .position()
            .connectedTo(new ElementRef(this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
            .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
        const /** @type {?} */ config = new OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'contextmenu-overlay'
        });
        this.overlayRef = this.overlay.create(config);
        this._service.setContextMenuOverlay(this.overlayRef);
        const /** @type {?} */ contextMenu = new ComponentPortal(ContextMenuPanelComponent);
        this.panel = this.overlayRef.attach(contextMenu);
        this.active = true;
    }
    /**
     * @return {?}
     */
    addPanelItem() {
        this.panel.instance.menuItem = this.menuItem;
    }
    /**
     * @return {?}
     */
    watchItemClick() {
        this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(emitted => {
            emitted.callback(this.menuID);
        });
    }
    /**
     * @return {?}
     */
    outsideListener() {
        this.render.listen('document', 'click', event => {
            if (event.type === 'click' && event.button === 2) {
                return;
            }
            this._service.closeAllContextMenus();
            this.render.removeClass(this.ref.nativeElement, 'hd-contextmenu-active');
            this.active = false;
        });
    }
}
ContextMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hdContextMenu]'
            },] },
];
/** @nocollapse */
ContextMenuDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: Overlay, },
    { type: ContextMenuService, },
];
ContextMenuDirective.propDecorators = {
    "hdContextMenu": [{ type: Output },],
    "menuID": [{ type: Input },],
    "menuItem": [{ type: Input },],
    "_overlayOrigin": [{ type: ViewChild, args: [CdkOverlayOrigin,] },],
    "contextMenuOrigin": [{ type: Input },],
    "onContextMenu": [{ type: HostListener, args: ['contextmenu', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HdContextMenuModule {
}
HdContextMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatButtonModule, MatIconModule],
                declarations: [ContextMenuPanelComponent, ContextMenuDirective],
                exports: [ContextMenuPanelComponent, ContextMenuDirective],
                providers: [ContextMenuService],
                entryComponents: [ContextMenuPanelComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class TableAdapter extends DataSource {
    /**
     * @param {?} _data
     * @param {?=} _displayedColumns
     * @param {?=} _paginator
     * @param {?=} _sort
     * @param {?=} _searchColumns
     * @param {?=} _filterInput
     */
    constructor(_data, _displayedColumns, _paginator, _sort, _searchColumns, _filterInput) {
        super();
        this._data = _data;
        this._displayedColumns = _displayedColumns;
        this._paginator = _paginator;
        this._sort = _sort;
        this._searchColumns = _searchColumns;
        this._filterInput = _filterInput;
        this.tableData = new BehaviorSubject([]);
        this.sourceData = new BehaviorSubject([]);
        this.displayedColumns = [];
        this.searchColumns = [];
        this.pagination = new BehaviorSubject({
            pageIndex: 0,
            pageSize: 10,
            length: this.tableData.value.length
        });
        this.filter = new BehaviorSubject('');
        this.sort = new BehaviorSubject({
            active: '',
            direction: 'asc'
        });
        if (_searchColumns && _searchColumns.length === 0) {
            _searchColumns = _displayedColumns;
        }
        if (_filterInput) {
            fromEvent(_filterInput.nativeElement, 'keyup')
                .pipe(debounceTime(100), distinctUntilChanged())
                .subscribe(() => this.filter.next(_filterInput.nativeElement.value));
        }
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        const /** @type {?} */ connectData = [];
        if (this._filterInput) {
            connectData.push(this.filter);
        }
        if (this._sort) {
            connectData.push(this._sort.sortChange);
        }
        if (this._paginator) {
            connectData.push(this._paginator.page);
        }
        return this._data.pipe(map((res) => this.setData(res)), switchMap(res => {
            if (connectData.length > 0) {
                return merge(...connectData);
            }
            else {
                return of(res);
            }
        }), map(() => this.filtering()), map(() => this.sorting()), map(() => this.paging()));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.sourceData.next(data);
        this.tableData.next(data);
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
        }
    }
    /**
     * @return {?}
     */
    paging() {
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
            const /** @type {?} */ data = this.tableData.value.slice();
            const /** @type {?} */ startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        }
        else {
            return this.tableData.value;
        }
    }
    /**
     * @return {?}
     */
    sorting() {
        const /** @type {?} */ data = this.tableData.value.slice();
        if (!this._sort || !this._sort.active || this._sort.direction === '') {
            return this.tableData.value;
        }
        data.sort((a, b) => {
            let /** @type {?} */ propertyA = '';
            let /** @type {?} */ propertyB = '';
            [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];
            const /** @type {?} */ valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const /** @type {?} */ valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
        this.tableData.next(data);
        return data;
    }
    /**
     * @return {?}
     */
    filtering() {
        if (!this._filterInput) {
            return this.tableData.value;
        }
        if (this.filter.value === '') {
            this.tableData.next(this.sourceData.value);
            return this.sourceData.value;
        }
        const /** @type {?} */ query = this.filter.value.split(' ');
        let /** @type {?} */ tableData = this.sourceData.value;
        query.forEach(q => {
            tableData = tableData.slice().filter(item => {
                let /** @type {?} */ exist = false;
                let /** @type {?} */ result = -1;
                this._searchColumns.forEach(obj => {
                    if (typeof item[obj] === 'string') {
                        if (typeof item[obj] !== 'undefined' &&
                            typeof query !== 'undefined') {
                            const /** @type {?} */ searchStr = item[obj].toLowerCase();
                            result = searchStr.indexOf(q.toLowerCase());
                        }
                    }
                    else if (typeof item[obj] !== 'undefined' &&
                        typeof this.filter.value !== 'undefined') {
                        const /** @type {?} */ searchStr2 = item[obj].toString();
                        result = searchStr2.indexOf(q);
                    }
                    if (result !== -1) {
                        exist = true;
                    }
                });
                return exist;
            });
        });
        this.tableData.next(tableData);
        this._paginator.pageIndex = 0;
        this._paginator.length = tableData.length;
        return tableData;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContextMenu {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
 * Public API Surface of ng-humadev-theme
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { HdUploadModule, HdLayoutModule, HdLoginModule, HdContextMenuModule, LayoutService, MenuService, ContextMenu, TableAdapter, routerTransition, slideToRight, slideToLeft, slideToUp, slideToDown, fadeUp, ringing, ContextMenuPanelComponent as ɵbc, ContextMenuDirective as ɵbd, ContextMenuService as ɵbe, BreadcrumbComponent as ɵh, LayoutComponent as ɵd, MainToolbarChatComponent as ɵo, MainToolbarLeftMenuComponent as ɵj, MainToolbarMenuItemComponent as ɵl, MainToolbarNotificationComponent as ɵm, MainToolbarProfileComponent as ɵn, ProfileButtonComponent as ɵs, ProfileItemComponent as ɵp, ProfileListComponent as ɵt, ProfileSectionComponent as ɵr, ProfileSeparatorComponent as ɵq, MainToolbarRightMenuComponent as ɵk, MainToolbarComponent as ɵe, PageToolbarComponent as ɵf, SidenavItemComponent as ɵx, SidenavComponent as ɵg, StartPageDialogComponent as ɵw, StartPageComponent as ɵi, TimelineItemComponent as ɵv, TimelineComponent as ɵu, UploadContainerComponent as ɵc, UploadFileDirective as ɵa, UploadImageDirective as ɵb, LeftSideComponent as ɵz, LoginFormComponent as ɵbb, LoginComponent as ɵy, RightSideComponent as ɵba };
//# sourceMappingURL=humadev-ng-theme.js.map
