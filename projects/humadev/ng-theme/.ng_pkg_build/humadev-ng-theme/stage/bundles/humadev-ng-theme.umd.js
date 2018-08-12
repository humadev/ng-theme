(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material'), require('@angular/router'), require('rxjs/operators'), require('rxjs'), require('@angular/animations'), require('lodash-es'), require('@angular/cdk/layout'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/cdk/table')) :
	typeof define === 'function' && define.amd ? define('@humadev/ng-theme', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material', '@angular/router', 'rxjs/operators', 'rxjs', '@angular/animations', 'lodash-es', '@angular/cdk/layout', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/cdk/table'], factory) :
	(factory((global.humadev = global.humadev || {}, global.humadev['ng-theme'] = {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.material,global.ng.router,global.Rx.Observable.prototype,global.rxjs,global.ng.animations,global['lodash-es'],global.ng.cdk.layout,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.cdk.table));
}(this, (function (exports,core,forms,common,material,router,operators,rxjs,animations,lodashEs,layout,overlay,portal,table) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}








function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var UploadFileDirective = /** @class */ (function () {
    function UploadFileDirective(_er, inj, render) {
        this._er = _er;
        this.inj = inj;
        this.render = render;
        this.render.setStyle(this._er.nativeElement, 'display', 'none');
    }
    UploadFileDirective.prototype.click = function () {
        this._er.nativeElement.click();
    };
    UploadFileDirective.prototype.ngOnInit = function () {
        this.control = this.inj.get(forms.NgControl);
    };
    UploadFileDirective.prototype.setValue = function (value) {
        this.control.control.setValue(value);
    };
    return UploadFileDirective;
}());
UploadFileDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[hdUploadFile]',
                exportAs: 'hdUploadFile'
            },] },
];
UploadFileDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Injector, },
    { type: core.Renderer2, },
]; };
var UploadImageDirective = /** @class */ (function () {
    function UploadImageDirective() {
    }
    return UploadImageDirective;
}());
UploadImageDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[hdUploadImage]'
            },] },
];
UploadImageDirective.ctorParameters = function () { return []; };
var UploadContainerComponent = /** @class */ (function () {
    function UploadContainerComponent(render) {
        this.render = render;
        this.placeholder = 'Upload file';
        this.hint = '';
    }
    UploadContainerComponent.prototype.onClick = function (e) {
        this.uploadInput.nativeElement.click();
    };
    UploadContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.render.listen(this.uploadInput.nativeElement, 'change', function (e) {
            if (e.target.files.length) {
                _this.filename = e.target.files[0].name;
            }
            var fileList = e.target.files;
            if (fileList.length > 0) {
                var file = fileList[0];
                var myReader_1 = new FileReader();
                myReader_1.onloadend = function (event) {
                    var image = myReader_1.result;
                    _this.uploadFile.setValue(image);
                };
                myReader_1.readAsDataURL(file);
            }
        });
    };
    UploadContainerComponent.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    UploadContainerComponent.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    UploadContainerComponent.prototype.onDrop = function (evt) {
        var _this = this;
        evt.preventDefault();
        evt.stopPropagation();
        if (evt.dataTransfer.files.length) {
            this.filename = evt.dataTransfer.files[0].name;
        }
        var fileList = evt.dataTransfer.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var myReader_2 = new FileReader();
            myReader_2.onloadend = function (event) {
                var image = myReader_2.result;
                _this.uploadFile.setValue(image);
            };
            myReader_2.readAsDataURL(file);
        }
    };
    return UploadContainerComponent;
}());
UploadContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-upload-container',
                template: "<ng-content></ng-content>\n<div class='hd-upload-container'>\n    <input type='file' #filetoupload style='display:none;'>\n    <mat-icon>file_upload</mat-icon>\n    <span class='hd-upload-placeholder'>{{placeholder}}</span>\n    <span class='hd-upload-filename'>{{filename}}</span>\n    <span class='hd-upload-hint'>{{hint}}</span>\n</div>",
                styles: [".hd-upload-container{margin:15px 0;cursor:pointer;border:thin dashed #676c7b;color:#676c7b;padding:20px;text-align:center}.hd-upload-container .mat-icon{vertical-align:middle}.hd-upload-container .hd-upload-hint{text-align:center;display:block;font-size:10px}.hd-upload-container .hd-upload-filename{display:block;text-align:center;font-size:12px;min-height:18px}input[type=file]{display:none}"],
                encapsulation: core.ViewEncapsulation.None
            },] },
];
UploadContainerComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
]; };
UploadContainerComponent.propDecorators = {
    "placeholder": [{ type: core.Input },],
    "hint": [{ type: core.Input },],
    "uploadFile": [{ type: core.ContentChild, args: [UploadFileDirective,] },],
    "uploadInput": [{ type: core.ViewChild, args: ['filetoupload',] },],
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "onDragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
    "onDrop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
};
var HdUploadModule = /** @class */ (function () {
    function HdUploadModule() {
    }
    return HdUploadModule;
}());
HdUploadModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    material.MatIconModule,
                    forms.ReactiveFormsModule,
                    forms.FormsModule
                ],
                exports: [UploadFileDirective, UploadImageDirective, UploadContainerComponent],
                declarations: [UploadFileDirective, UploadImageDirective, UploadContainerComponent]
            },] },
];
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.titleText = 'Humadev Theme';
        this.lazyLoadModule = false;
        this.nav = false;
        this.notification = false;
        this.logout = new core.EventEmitter();
        this.sidenavOpen = true;
    }
    LayoutComponent.prototype.onLogout = function () {
        this.logout.emit();
    };
    return LayoutComponent;
}());
LayoutComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-layout',
                template: "\n        <hd-main-toolbar\n                [notification]=\"notification\"\n                (sidenavToggle)=\"sidenav.toggle()\"\n                (logout)=\"onLogout()\"\n                [titleText]=\"titleText\"\n                [titleImg]=\"titleImg\">\n        </hd-main-toolbar>\n        <hd-sidenav #sidenav\n                [opened]='sidenavOpen'\n                (pageTitle)=\"pagebar.changePageTitle($event)\"\n                [lazyLoadModule]=\"lazyLoadModule\"\n                [nav]=\"nav\">\n                <hd-page-toolbar #pagebar></hd-page-toolbar>\n                <div class='hd-page'>\n                    <ng-content></ng-content>\n                </div>\n        </hd-sidenav>\n    "
            },] },
];
LayoutComponent.propDecorators = {
    "titleText": [{ type: core.Input },],
    "titleImg": [{ type: core.Input },],
    "lazyLoadModule": [{ type: core.Input },],
    "nav": [{ type: core.Input },],
    "notification": [{ type: core.Input },],
    "logout": [{ type: core.Output },],
};
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router$$1, activatedRoute) {
        this.router = router$$1;
        this.activatedRoute = activatedRoute;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
        this.router.events
            .pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }))
            .subscribe(function (event) {
            root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
    };
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var e_1, _a;
        var ROUTE_DATA_BREADCRUMB = 'name';
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet !== router.PRIMARY_OUTLET) {
                    continue;
                }
                if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                    return this.getBreadcrumbs(child, url, breadcrumbs);
                }
                var routeURL = child.snapshot.url
                    .map(function (segment) { return segment.path; })
                    .join('/');
                url += "/" + routeURL;
                var breadcrumb = {
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
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return breadcrumbs;
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-breadcrumb',
                template: "\n            <ul class=\"hd-breadcrumb\">\n                  <li><a routerLink=\"\">Home</a></li>\n                  <li *ngFor=\"let breadcrumb of breadcrumbs\">\n                        <a\n                        [routerLink]=\"[breadcrumb.url]\"\n                        *ngIf=\"breadcrumb.class == 'link'; else nonLink\">\n                              {{breadcrumb.label}}\n                        </a>\n                        <ng-template #nonLink>\n                              <span>{{breadcrumb.label}}</span>\n                        </ng-template>\n                  </li>\n            </ul>\n      "
            },] },
];
BreadcrumbComponent.ctorParameters = function () { return [
    { type: router.Router, },
    { type: router.ActivatedRoute, },
]; };
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        var _this = this;
        this.pageTitle = new rxjs.BehaviorSubject('');
        this.topProgressBar = new rxjs.BehaviorSubject(false);
        this.lockScroll = new rxjs.BehaviorSubject(false);
        this.sidebarOpen = new rxjs.BehaviorSubject(true);
        this.closeOverlay = new rxjs.BehaviorSubject(false);
        this.showNotification = new rxjs.BehaviorSubject(false);
        this.closeOverlay.subscribe(function (res) {
            if (res) {
                _this.closeOverlay.next(false);
            }
        });
    }
    return LayoutService;
}());
LayoutService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
LayoutService.ctorParameters = function () { return []; };
LayoutService.ngInjectableDef = core.defineInjectable({ factory: function LayoutService_Factory() { return new LayoutService(); }, token: LayoutService, providedIn: "root" });
var MenuService = /** @class */ (function () {
    function MenuService(router$$1, activeRoute, loc, _ls) {
        var _this = this;
        this.router = router$$1;
        this.activeRoute = activeRoute;
        this.loc = loc;
        this._ls = _ls;
        this.pageTitle = new rxjs.BehaviorSubject('');
        this.lazyLoad = true;
        this.sidenav = new rxjs.BehaviorSubject([]);
        this.moduleIndex = new rxjs.Subject();
        this.startMenu = [];
        this.moduleActive = new rxjs.Subject();
        this.router.events
            .pipe(operators.map(function (event) {
            if (loc.path() !== '') {
                var modulePath_1 = loc.path().split('/')[1];
                _this.moduleActive.next(modulePath_1);
                _this.router.config.forEach(function (el, i) {
                    if (el.path === modulePath_1) {
                        _this.moduleIndex.next(i);
                    }
                });
            }
            return event;
        }), operators.filter(function (event) { return event instanceof router.NavigationEnd; }), operators.map(function () { return _this.activeRoute; }), operators.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), operators.filter(function (route) { return route.outlet === 'primary'; }), operators.switchMap(function (route) { return route.data; }))
            .subscribe(function (res) {
            _this._ls.pageTitle.next(res["name"]);
            _this.pageTitle.next(res["name"]);
        });
        if (this.lazyLoad) {
            this.moduleIndex.subscribe(function (res) {
                if (_this.router.config[res]['_loadedConfig']) {
                    _this.sidenav.next(_this.router.config[res]['_loadedConfig'].routes[0].children);
                }
            });
        }
        else {
            this.sidenav.next(this.router.config);
        }
        this.startMenu = this.router.config;
    }
    MenuService.prototype.navigate = function (url) {
        this.router.navigate(['/' + url]);
    };
    return MenuService;
}());
MenuService.decorators = [
    { type: core.Injectable, args: [{
                providedIn: 'root'
            },] },
];
MenuService.ctorParameters = function () { return [
    { type: router.Router, },
    { type: router.ActivatedRoute, },
    { type: common.Location, },
    { type: LayoutService, },
]; };
MenuService.ngInjectableDef = core.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(core.inject(router.Router), core.inject(router.ActivatedRoute), core.inject(common.Location), core.inject(LayoutService)); }, token: MenuService, providedIn: "root" });
function routerTransition() {
    return slideToRight();
}
function slideToRight() {
    return animations.trigger('slideToRight', [
        animations.state('void', animations.style({ width: '*' })),
        animations.state('*', animations.style({ width: '*' })),
        animations.transition(':enter', [
            animations.style({ transform: 'translateX(-100%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateX(0%)' }))
        ]),
        animations.transition(':leave', [
            animations.style({ transform: 'translateX(0%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return animations.trigger('slideToLeft', [
        animations.state('void', animations.style({ width: '*' })),
        animations.state('*', animations.style({ width: '*' })),
        animations.transition(':enter', [
            animations.style({ transform: 'translateX(100%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateX(0%)' }))
        ]),
        animations.transition(':leave', [
            animations.style({ transform: 'translateX(0%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToUp() {
    return animations.trigger('slideToUp', [
        animations.state('void', animations.style({ width: '*' })),
        animations.state('*', animations.style({ width: '*' })),
        animations.transition(':enter', [
            animations.style({ transform: 'translateY(100%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateY(0%)' }))
        ]),
        animations.transition(':leave', [
            animations.style({ transform: 'translateY(0%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
function slideToDown() {
    return animations.trigger('slideToDown', [
        animations.state('void', animations.style({ width: '*' })),
        animations.state('*', animations.style({ width: '*' })),
        animations.transition(':enter', [
            animations.style({ transform: 'translateY(-100%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateY(0%)' }))
        ]),
        animations.transition(':leave', [
            animations.style({ transform: 'translateY(0%)' }),
            animations.animate('0.5s ease-in-out', animations.style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
function fadeUp() {
    return animations.trigger('fadeUp', [
        animations.state('void', animations.style({ width: '*' })),
        animations.state('*', animations.style({ width: '*' })),
        animations.transition(':enter', [
            animations.style({ transform: 'translateY(10px)', opacity: 0 }),
            animations.animate('0.3s ease-in-out', animations.style({ transform: 'translateY(0%)', opacity: 1 }))
        ]),
        animations.transition(':leave', [
            animations.style({ transform: 'translateY(0%)', opacity: 1 }),
            animations.animate('0.3s ease-in-out', animations.style({ transform: 'translateY(-10px)', opacity: 0 }))
        ])
    ]);
}
function ringing() {
    return animations.trigger('ringing', [
        animations.transition('* => *', [
            animations.style({ transform: 'rotate(13deg)' }),
            animations.animate('0.3s ease-in', animations.style({ transform: 'rotate(0deg)' }))
        ]),
        animations.transition('* => *', [
            animations.style({ transform: 'rotate(-13deg)' }),
            animations.animate('0.1s ease-in', animations.style({ transform: 'rotate(0deg)' }))
        ])
    ]);
}
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(render, ref, router$$1, activeRoute, menuService, layoutService, breakpointObserver) {
        var _this = this;
        this.render = render;
        this.ref = ref;
        this.router = router$$1;
        this.activeRoute = activeRoute;
        this.menuService = menuService;
        this.layoutService = layoutService;
        this.breakpointObserver = breakpointObserver;
        this.nav = false;
        this.lazyLoadModule = false;
        this.pageTitle = new core.EventEmitter();
        this.opened = false;
        this.sidenavClass = {
            minimize: false
        };
        this.progressBar = false;
        this.isHandset = this.breakpointObserver.observe(layout.Breakpoints.Handset);
        this.router.events.subscribe(function () { return _this.layoutService.topProgressBar.next(true); });
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nav === false) {
            this.menuService.sidenav.subscribe(function (res) {
                _this.navFromRouter = res;
            });
        }
        this.layoutService.sidebarOpen.subscribe(function (open) {
            if (open) {
                _this.sidenav.open();
            }
            else {
                _this.sidenav.close();
            }
        });
        this.layoutService.topProgressBar.subscribe(function (progress) { return (_this.progressBar = progress); });
    };
    SidenavComponent.prototype.ngAfterViewInit = function () {
    };
    SidenavComponent.prototype.parentOpen = function (i) {
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
    };
    SidenavComponent.prototype.isActive = function (instruction) {
        return this.router.isActive(this.router.createUrlTree(instruction), false);
    };
    SidenavComponent.prototype.childrenAndActive = function (level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return true;
        }
        else {
            return false;
        }
    };
    SidenavComponent.prototype.toggleChildren = function (level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return 'active';
        }
        else {
            return 'inactive';
        }
    };
    SidenavComponent.prototype.checkPath = function (row) {
        if (row.path === '') {
            return { exact: true };
        }
        else {
            return { exact: false };
        }
    };
    SidenavComponent.prototype.toggle = function () {
        this.sidenav.close();
        this.layoutService.sidebarOpen.next(false);
    };
    SidenavComponent.prototype.checkHidden = function (navItem) {
        var hidden = false;
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
    };
    SidenavComponent.prototype.setPageToolbar = function (item) {
        this.pageTitle.emit(item.name);
    };
    SidenavComponent.prototype.checkGroupAccess = function (menu, asal) {
        if (asal === void 0) { asal = ''; }
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            var allowed = lodashEs.intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
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
    };
    return SidenavComponent;
}());
SidenavComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-sidenav',
                template: "<mat-progress-bar class=\"loader\" mode=\"indeterminate\" *ngIf='progressBar'></mat-progress-bar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav fixedInViewport='true' class=\"m-grid__item m-aside-left m-aside-left--skin-dark\" [attr.role]=\"isHandset\n? 'dialog' : 'navigation'\" [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\" [opened]=\"!(isHandset | async)!.matches || opened\">\n    <div class=\"toolbar-brand\">\n      <div class=\"logo\">\n        <a routerLink=\"\">\n          <img [src]=\"titleImg\">\n        </a>\n      </div>\n      <div class=\"toggler\" *ngIf=\"(isHandset | async)!.matches ? false : true\" (click)='toggle()'>\n        <!-- BEGIN: Left Aside Minimize Toggle -->\n        <a>\n          <span></span>\n        </a>\n        <!-- END -->\n      </div>\n    </div>\n    <div id=\"m_ver_menu\" class=\"m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\" data-menu-vertical=\"true\"\n      data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\">\n      <ul *ngIf=\"nav === false; else fromVar\" class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n        <ng-template ngFor let-level1 [ngForOf]=\"navFromRouter\" let-i=\"index\">\n          <ng-template [ngIf]=\"checkHidden(level1) === false && checkGroupAccess(level1)\">\n            <li hd-sidenav-item cdk-overlay-origin class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n              aria-haspopup=\"true\" [ngClass]=\"{'m-menu__item--open':childrenAndActive(level1)}\" [menu]='level1' [nav]='nav'\n              [navFromRouter]='navFromRouter' [index]='i'>\n            </li>\n          </ng-template>\n        </ng-template>\n      </ul>\n      <ng-template #fromVar>\n        <ng-template ngFor let-level1 [ngForOf]=\"nav\" let-i=\"index\">\n          <ng-template [ngIf]=\"checkHidden(level1) === false && checkGroupAccess(level1)\">\n            <li hd-sidenav-item cdk-overlay-origin class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\n              aria-haspopup=\"true\" [ngClass]=\"{'m-menu__item--open':childrenAndActive(level1)}\" [menu]='level1' [nav]='nav'\n              [index]='i'>\n            </li>\n          </ng-template>\n        </ng-template>\n      </ng-template>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n",
                styles: ["mat-sidenav-container{background:#f2f3f8;position:fixed;overflow:visible}.m-aside-left.m-aside-left--skin-dark{background-color:#2c2e3e}.m-aside-menu{height:calc(100vh - 70px);overflow-y:scroll}.m-aside-menu .m-menu__nav{list-style:none;padding:30px 0}dl,ol,ul{margin-top:0;margin-bottom:1rem}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}.m-aside-menu .m-menu__nav>.m-menu__item{position:relative;margin:0}.m-aside-menu .m-menu__nav .m-menu__item{display:block;float:none;height:auto;padding:0}.m-aside-menu .m-menu__nav .m-menu__submenu{display:block;float:none;margin:0;padding:0}.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav>.m-menu__item .m-menu__submenu .m-menu__item>.m-menu__link .m-menu__link-bullet{vertical-align:middle;text-align:left;width:20px}.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__heading .m-menu__link-bullet,.m-aside-menu .m-menu__nav .m-menu__item>.m-menu__link .m-menu__link-bullet{display:table-cell;height:100%;vertical-align:middle;line-height:0}.mat-drawer{min-width:4vw!important}.mat-sidenav{width:255px}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;width:255px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;cursor:pointer;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.loader{position:fixed;height:2px;z-index:9999;top:0}"],
                animations: [slideToRight()]
            },] },
];
SidenavComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: router.Router, },
    { type: router.ActivatedRoute, },
    { type: MenuService, },
    { type: LayoutService, },
    { type: layout.BreakpointObserver, },
]; };
SidenavComponent.propDecorators = {
    "titleImg": [{ type: core.Input },],
    "nav": [{ type: core.Input },],
    "lazyLoadModule": [{ type: core.Input },],
    "navFromRouter": [{ type: core.Input },],
    "lazyLoadPath": [{ type: core.Input },],
    "pageTitle": [{ type: core.Output },],
    "opened": [{ type: core.Input },],
    "sidenav": [{ type: core.ViewChild, args: ['sidenav',] },],
    "toggle": [{ type: core.Output },],
};
var MainToolbarComponent = /** @class */ (function () {
    function MainToolbarComponent(menuService, renderer, elRef, layout$$1, router$$1, breakpointObserver) {
        this.menuService = menuService;
        this.renderer = renderer;
        this.elRef = elRef;
        this.layout = layout$$1;
        this.router = router$$1;
        this.breakpointObserver = breakpointObserver;
        this.notification = false;
        this.profile = true;
        this.showSidenavToggle = true;
        this.sidenavOpen = true;
        this.sidenavToggle = new core.EventEmitter();
        this.logout = new core.EventEmitter();
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
        this.minimize = new core.EventEmitter();
        this.isHandset = this.breakpointObserver.observe(layout.Breakpoints.Handset);
    }
    MainToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layout.sidebarOpen.subscribe(function (open) {
            _this.sidenavOpen = open;
        });
        this.menuService.moduleActive.subscribe(function (res) {
            _this.active = res;
        });
        if (this.theme === 'dark') {
            this.brandBackground = '#282a3c';
        }
        else {
            this.brandBackground = '#ffffff';
        }
    };
    MainToolbarComponent.prototype.toggleSidenav = function () {
        this.layout.sidebarOpen.next(this.sidenav);
    };
    MainToolbarComponent.prototype.onSidenavToggle = function () {
        this.sidenavToggle.emit();
    };
    MainToolbarComponent.prototype.onLogout = function () {
        this.logout.emit();
    };
    MainToolbarComponent.prototype.onChange = function (e) {
        this.menuService.navigate(e.value);
    };
    return MainToolbarComponent;
}());
MainToolbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-main-toolbar',
                template: "<!-- BEGIN: Header -->\n<!-- BEGIN: Brand -->\n<div class=\"toolbar-brand\" *ngIf=\"!sidenavOpen || (isHandset | async).matches || !showSidenavToggle\">\n  <div class=\"toggler\" (click)='toggleSidenav()' *ngIf='showSidenavToggle'>\n    <!-- BEGIN: Left Aside Minimize Toggle -->\n    <a>\n      <span></span>\n    </a>\n    <!-- END -->\n  </div>\n  <div class=\"logo\" *ngIf=\"!(isHandset | async)!.matches\">\n    <a routerLink=\"\">\n      <img [src]=\"titleImg\">\n    </a>\n  </div>\n</div>\n<!-- END: Brand -->\n<div class=\"toolbar-menu\">\n  <ng-content></ng-content>\n</div>\n<!-- END: Header -->\n",
                styles: ["@media (min-width:993px){a.toggler-right span,a.toggler-right span:after,a.toggler-right span:before{background-color:#2739c1!important}.toolbar-menu{-webkit-box-flex:1;-ms-flex:1 auto;flex:1 auto;vertical-align:top;-webkit-transition:all .3s ease;transition:all .3s ease}}:host{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);overflow:hidden;z-index:101;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff}.toolbar-brand{position:relative;vertical-align:middle;-webkit-transition:all .3s ease;transition:all .3s ease;height:70px;table-layout:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.toolbar-brand .logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;-webkit-transition:all .3s ease;transition:all .3s ease;line-height:0;padding:15px 20px}.toolbar-brand .logo a img{height:45px}.toolbar-brand .toggler{padding:15px 0 15px 20px;cursor:pointer}.toolbar-brand .toggler a{line-height:0;vertical-align:middle;display:inline-block;position:relative;margin:0;padding:0;width:26px;height:26px;font-size:0;text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:none;background:0 0;outline:0!important;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span{background:#5d5f77;display:block;position:absolute;top:20px;height:1px;min-height:1px;width:100%;border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a span::before{top:-7px}.toolbar-brand .toggler a span::after{bottom:-7px}.toolbar-brand .toggler a span::after,.toolbar-brand .toggler a span::before{background:#5d5f77;position:absolute;display:block;left:0;width:100%;height:1px;min-height:1px;content:'';border-radius:0;-webkit-transition:all .4s ease;transition:all .4s ease}.toolbar-brand .toggler a.toggler-left span::before{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:50%}.toolbar-brand .toggler a.toggler-left span::after{-webkit-transition:all .4s ease;transition:all .4s ease;left:auto;right:0;width:75%}.toolbar-brand .toggler a.toggler-right span::before{left:0;right:auto;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a.toggler-right span::after{left:0;right:auto;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toolbar-brand .toggler a:hover span,.toolbar-brand .toggler a:hover span::after,.toolbar-brand .toggler a:hover span::before{width:100%;background:#2a61ac}.toolbar-brand.minimize .toggler a{text-align:center}.toggler-right:hover span:after,.toggler-right:hover span:before{width:100%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:before{left:auto;right:0;width:50%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-right.toggler-active span:after{left:auto;right:0;width:75%;-webkit-transition:width .4s ease;transition:width .4s ease}.toggler-left:hover span:after,.toggler-left:hover span:before{width:100%;-webkit-transition:all .4s ease;transition:all .4s ease}.toggler-left.toggler--active span:before{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:50%}.toggler-left.toggler--active span:after{-webkit-transition:all .4s ease;transition:all .4s ease;left:0;right:auto;width:75%}:host .m-header-head{background-color:#fff}@media (min-width:993px){.m-header .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease}:host .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:300px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}:host.minimize .m-header-head{-webkit-transition:all .3s ease;transition:all .3s ease;padding-left:70px}.m-header--fixed.m-header--fixed-hidable.m-header--hide .m-header{height:70px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed.m-header--fixed-hidable.m-header--show .m-header{height:70px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}:host{height:70px;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:999;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}@media (max-width:992px){:host{height:60px!important}:host .m-header__nav{top:-100%;position:relative}.m-header--fixed-mobile .m-header{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:101;position:fixed;top:0;left:0;right:0}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--hide .m-header{height:60px;-webkit-transition:all .3s ease .5s;transition:all .3s ease .5s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-header--fixed-mobile.m-header--fixed-mobile-hidable.m-header--show .m-header{height:60px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(0);transform:translateY(0)}.m-header--fixed-mobile .m-header .m-header-head{-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1)}}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:3px!important}"],
                preserveWhitespaces: false
            },] },
];
MainToolbarComponent.ctorParameters = function () { return [
    { type: MenuService, },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: LayoutService, },
    { type: router.Router, },
    { type: layout.BreakpointObserver, },
]; };
MainToolbarComponent.propDecorators = {
    "notification": [{ type: core.Input },],
    "notificationList": [{ type: core.Input },],
    "profile": [{ type: core.Input },],
    "showSidenavToggle": [{ type: core.Input },],
    "sidenavOpen": [{ type: core.Input },],
    "sidenavToggle": [{ type: core.Output },],
    "logout": [{ type: core.Output },],
    "titleText": [{ type: core.Input },],
    "titleImg": [{ type: core.Input },],
    "theme": [{ type: core.Input },],
    "menu": [{ type: core.ViewChild, args: ['mainMenu',] },],
    "minimize": [{ type: core.Output },],
};
var PageToolbarComponent = /** @class */ (function () {
    function PageToolbarComponent(_ls) {
        var _this = this;
        this._ls = _ls;
        this.pageTitle = '';
        _ls.pageTitle.subscribe(function (res) { return (_this.pageTitle = res); });
    }
    PageToolbarComponent.prototype.changePageTitle = function (title) {
        this.pageTitle = title;
    };
    return PageToolbarComponent;
}());
PageToolbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-page-toolbar',
                template: "\n        <h3 class=\"title\">\n            {{pageTitle}}\n        </h3>\n        <hd-breadcrumb></hd-breadcrumb>\n    ",
                styles: [
                    "\n      :host {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        padding: 0;\n        vertical-align: middle;\n      }\n      .title {\n        padding: 7px 25px 7px 0;\n        font-family: Roboto;\n        font-weight: 300;\n        font-size: 1.55rem;\n        font-weight: 500;\n        vertical-align: middle;\n        color: #3f4047;\n      }\n    "
                ]
            },] },
];
PageToolbarComponent.ctorParameters = function () { return [
    { type: LayoutService, },
]; };
var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(menuService) {
        this.menuService = menuService;
        this.fromRouter = true;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    };
    StartPageComponent.prototype.checkGroupAccess = function (menu, asal) {
        if (asal === void 0) { asal = ''; }
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            var allowed = lodashEs.intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
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
    };
    return StartPageComponent;
}());
StartPageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-start-page',
                template: "<div class=\"start-menu\">\n  <ng-template ngFor let-menu [ngForOf]=\"menus\" let-i=\"index\">\n    <a class=\"item\" [routerLink]=\"[menu.path]\" *ngIf=\"menu.data.isMenu && checkGroupAccess(menu)\">\n      <img [src]=\"menu.data.icon\">\n      <span class='text'>{{menu.data.title}}</span>\n      <span class='description'>{{menu.data.description}}</span>\n    </a>\n  </ng-template>\n</div>\n<div class='copyright'>\n  <span>{{copyright}}</span>\n</div>\n",
                styles: [":host{background:#fff}:host .start-menu{position:fixed;overflow-y:scroll;bottom:20px;top:70px;padding:20px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:100vw;min-height:90vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;text-align:center}:host .start-menu .item{background-color:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;width:20%;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}"]
            },] },
];
StartPageComponent.ctorParameters = function () { return [
    { type: MenuService, },
]; };
StartPageComponent.propDecorators = {
    "menus": [{ type: core.Input },],
    "fromRouter": [{ type: core.Input },],
    "copyright": [{ type: core.Input },],
};
var StartPageDialogComponent = /** @class */ (function () {
    function StartPageDialogComponent(menuService, dialog) {
        this.menuService = menuService;
        this.dialog = dialog;
        this.fromRouter = true;
    }
    StartPageDialogComponent.prototype.ngOnInit = function () {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    };
    StartPageDialogComponent.prototype.checkGroupAccess = function (menu, asal) {
        if (asal === void 0) { asal = ''; }
        if (menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups) {
            var allowed = lodashEs.intersection(menu.data.groupAccess.permissions, menu.data.groupAccess.groups).length > 0
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
    };
    StartPageDialogComponent.prototype.onClick = function (e) {
        this.dialog.close();
    };
    return StartPageDialogComponent;
}());
StartPageDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-start-page-dialog',
                template: "<div class=\"start-menu\">\n  <ng-template ngFor let-menu [ngForOf]=\"menus\" let-i=\"index\">\n    <a class=\"item\" [routerLink]=\"[menu.path]\" *ngIf=\"menu.data.isMenu && checkGroupAccess(menu)\" (click)=\"onClick($event)\">\n      <img [src]=\"menu.data.icon\">\n      <span class='text'>{{menu.data.title}}</span>\n      <span class='description'>{{menu.data.description}}</span>\n    </a>\n  </ng-template>\n</div>\n",
                styles: [":host{background:#fff}:host .start-menu{padding:20px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;text-align:center}:host .start-menu .item{display:inline-block;background-color:none;color:none;outline:0;border:none;padding:30px 20px;text-align:center;vertical-align:middle;height:200px;width:25%;text-decoration:none}:host .start-menu .item .text{display:block;margin-top:15px;line-height:1.4;font-weight:500;font-size:16px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item .description{display:block;line-height:1.2;font-size:12px;text-overflow:ellipsis;text-align:center;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;color:#292b3a;text-decoration:none}:host .start-menu .item img{height:70px}:host .start-menu .item:hover{color:none;background-color:rgba(113,106,202,.1)}.copyright{position:fixed;bottom:0;display:block;width:100%;text-align:center;min-height:5vh;padding:10px;-webkit-box-shadow:0 1px 15px 1px rgba(113,106,202,.1);box-shadow:0 1px 15px 1px rgba(113,106,202,.1);background:#fff}"]
            },] },
];
StartPageDialogComponent.ctorParameters = function () { return [
    { type: MenuService, },
    { type: material.MatDialogRef, },
]; };
StartPageDialogComponent.propDecorators = {
    "menus": [{ type: core.Input },],
    "fromRouter": [{ type: core.Input },],
    "copyright": [{ type: core.Input },],
};
var MainToolbarLeftMenuComponent = /** @class */ (function () {
    function MainToolbarLeftMenuComponent(overlay$$1, menuService, dialog) {
        this.overlay = overlay$$1;
        this.menuService = menuService;
        this.dialog = dialog;
        this.startMenus = this.menuService.startMenu;
    }
    MainToolbarLeftMenuComponent.prototype.clickMenu = function (e) {
        this.dialog.open(StartPageDialogComponent, {
            width: '90vw',
            height: '90vh'
        });
    };
    return MainToolbarLeftMenuComponent;
}());
MainToolbarLeftMenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-main-toolbar-left-menu',
                template: "<ul class=\"left-menu-list\">\n  <li class=\"left-menu-item\" (click)=\"clickMenu($event)\" cdk-overlay-origin #mainMenu=\"cdkOverlayOrigin\">\n    <a class=\"left-menu-link\">\n      <i class=\"icon flaticon-squares-3\"></i>\n      <span class=\"text\">\n        Main Menu\n      </span>\n      <!-- <i class=\"arrow la la-angle-down\"></i> -->\n      <!-- <i class=\"arrow la la-angle-right\"></i> -->\n    </a>\n    <ng-template cdk-portal>\n      <div class=\"left-menu-dropdown\" [@fadeUp]=\"\">\n        <span class=\"arrow\"></span>\n        <ul class=\"left-dropdown-list\">\n          <li hd-left-menu-item *ngFor=\"let menu of startMenus\">\n            <a routerLink=\"/{{menu.path}}\" class=\"left-dropdown-link\">\n              <i class=\"left-dropdown-link-icon\">\n                <img [src]=\"menu.data.icon\">\n              </i>\n              <span class=\"left-dropdown-link-text\">\n                {{menu.data.title}}\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </ng-template>\n  </li>\n</ul>\n",
                styles: ["@media (min-width:993px){:host{width:auto;float:left;display:table;height:100%;margin:0 0 0 10px;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list{list-style:none;margin:0;padding:0;display:table-row;height:100%;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased}.left-menu-list .left-menu-item{position:relative;height:100%;display:table-cell;vertical-align:middle;padding:0 10px}.left-menu-list .left-menu-item .left-menu-link{padding:0;display:table;position:relative;vertical-align:middle;height:100%;outline:0!important;cursor:pointer;text-decoration:none!important}.left-menu-list .left-menu-item .left-menu-link .text{color:#676c7b;font-weight:400;font-size:14px;text-transform:initial;width:auto;display:table-cell;height:100%;padding:0;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .text:hover{color:#214e8d!important}.left-menu-list .left-menu-item .left-menu-link .icon{color:#b8bece;font-size:18px;width:30px;text-align:left;padding:0;line-height:0;display:table-cell;vertical-align:middle;cursor:pointer}.left-menu-list .left-menu-item .left-menu-link .arrow{color:#b9c1d4;font-size:14px;width:25px;text-align:right;vertical-align:middle;display:table-cell}.left-menu-list .left-menu-item .left-menu-link .arrow:hover{color:#214e8d!important}}"],
                animations: [fadeUp()]
            },] },
];
MainToolbarLeftMenuComponent.ctorParameters = function () { return [
    { type: overlay.Overlay, },
    { type: MenuService, },
    { type: material.MatDialog, },
]; };
MainToolbarLeftMenuComponent.propDecorators = {
    "menu": [{ type: core.ViewChild, args: ['mainMenu',] },],
    "templatePortals": [{ type: core.ViewChildren, args: [portal.TemplatePortalDirective,] },],
};
var MainToolbarRightMenuComponent = /** @class */ (function () {
    function MainToolbarRightMenuComponent() {
    }
    MainToolbarRightMenuComponent.prototype.ngOnInit = function () {
    };
    return MainToolbarRightMenuComponent;
}());
MainToolbarRightMenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-main-toolbar-right-menu',
                template: "<div class=\"right-menu-wrapper\">\n    <ul class=\"right-menu-list\">\n        <ng-content></ng-content>\n    </ul>\n</div>",
                styles: [":host{display:table;table-layout:fixed;width:auto;height:100%;float:right;padding:0}.right-menu-wrapper{display:table-cell;vertical-align:top;height:100%;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-list{margin:0 20px 0 30px;display:inline-block;height:100%;width:auto;padding:0;list-style:none;font-size:14px;font-weight:300;font-family:Poppins;line-height:1.5;color:#212529}"]
            },] },
];
MainToolbarRightMenuComponent.ctorParameters = function () { return []; };
var MainToolbarMenuItemComponent = /** @class */ (function () {
    function MainToolbarMenuItemComponent() {
    }
    return MainToolbarMenuItemComponent;
}());
MainToolbarMenuItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-left-menu-item]',
                template: "<ng-content></ng-content>",
                styles: ["@media (min-width:993px){:host{position:relative;padding:0 20px;height:100%;display:table-cell;vertical-align:middle}}"]
            },] },
];
var MainToolbarNotificationComponent = /** @class */ (function () {
    function MainToolbarNotificationComponent(overlay$$1, _render, _layout) {
        this.overlay = overlay$$1;
        this._render = _render;
        this._layout = _layout;
        this.blink = false;
    }
    MainToolbarNotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._layout.showNotification.subscribe(function (res) {
            if (res) {
                _this.blink = true;
                _this._render.addClass(_this.shake.nativeElement, 'm-animate-shake');
            }
            else {
                _this.blink = false;
                _this._render.removeClass(_this.shake.nativeElement, 'm-animate-shake');
            }
        });
    };
    MainToolbarNotificationComponent.prototype.clickMenu = function (e) {
        this.blink = false;
        this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
        var config = new overlay.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay
                .position()
                .connectedTo(this.menu.elementRef, { originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' })
                .withOffsetX(-30)
        });
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(function () {
            overlayRef.dispose();
        });
    };
    return MainToolbarNotificationComponent;
}());
MainToolbarNotificationComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-main-toolbar-notification]',
                template: "<a cdk-overlay-origin class=\"right-menu-item-link\" #notification=\"cdkOverlayOrigin\" (click)=\"clickMenu($event)\">\n    <span *ngIf='blink' class=\"notification-dot-blink m-animate-blink\"></span>\n    <span #shake class=\"right-menu-link-icon\">\n        <i class=\"flaticon-music-2\"></i>\n    </span>\n</a>\n<ng-template cdk-portal>\n    <div class=\"notification-dropdown\" [@fadeUp]=\"\">\n        <span class=\"arrow\" style=\"left: 58%\"></span>\n        <div class=\"inner\">\n            <div class=\"header\" style=\"background: url(./assets/notification.jpg); background-size: cover;\">\n                <span class=\"header-title\">\n                    9 New\n                </span>\n                <span class=\"header-subtitle\">\n                    User Notifications\n                </span>\n            </div>\n            <ng-content></ng-content>\n        </div>\n    </div>\n</ng-template>",
                styles: [":host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=\" flaticon-\"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.notification-dot-blink{left:50%;margin-left:-2px;position:absolute;top:11px;background-color:#f4516c;color:#fff;padding:0;line-height:4px;min-height:4px;min-width:4px;height:4px;width:4px;border-radius:100%;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}@-webkit-keyframes m-animate-blink{50%{opacity:0}}@keyframes m-animate-blink{50%{opacity:0}}@-webkit-keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}@keyframes m-animate-shake{from{-webkit-transform:rotate(13deg);transform:rotate(13deg)}to{-webkit-transform-origin:center center;-webkit-transform:rotate(-13deg);transform:rotate(-13deg)}}.m-animate-blink{-webkit-animation:1s step-start infinite m-animate-blink;animation:1s step-start infinite m-animate-blink;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.m-animate-shake{-webkit-animation:.1s ease-in .1s infinite alternate m-animate-shake;animation:.1s ease-in .1s infinite alternate m-animate-shake;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}"],
                animations: [fadeUp(), ringing()]
            },] },
];
MainToolbarNotificationComponent.ctorParameters = function () { return [
    { type: overlay.Overlay, },
    { type: core.Renderer2, },
    { type: LayoutService, },
]; };
MainToolbarNotificationComponent.propDecorators = {
    "menu": [{ type: core.ViewChild, args: ['notification',] },],
    "shake": [{ type: core.ViewChild, args: ['shake',] },],
    "blink": [{ type: core.Input },],
    "templatePortals": [{ type: core.ViewChildren, args: [portal.TemplatePortalDirective,] },],
};
var MainToolbarProfileComponent = /** @class */ (function () {
    function MainToolbarProfileComponent(overlay$$1, ls) {
        this.overlay = overlay$$1;
        this.ls = ls;
    }
    MainToolbarProfileComponent.prototype.clickMenu = function (e) {
        var config = new overlay.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(this.menu.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }).withOffsetX(-265)
        });
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(function () {
            overlayRef.dispose();
        });
        this.ls.closeOverlay.subscribe(function (res) {
            if (res) {
                overlayRef.dispose();
            }
        });
    };
    return MainToolbarProfileComponent;
}());
MainToolbarProfileComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-main-toolbar-profile]',
                template: "<a cdk-overlay-origin class=\"right-menu-item-link\" #profile=\"cdkOverlayOrigin\" (click)=\"clickMenu($event)\">\n<span class=\"right-menu-link-picture m--img-rounded m--marginless m--img-centered\">\n        <img [src]=\"imgProfile\"/>\n    </span>\n    <span class=\"m-topbar__username hide\">\n        Nick\n    </span>\n</a>\n<ng-template cdk-portal>\n    <div class=\"profile-dropdown\" [@fadeUp]=\"\">\n        <span class=\"arrow\" style=\"left: 88%\"></span>\n        <div class=\"inner\">\n            <div class=\"header\" style=\"background: url(./assets/profile.jpg); background-size: cover;\">\n                <div class=\"user-pic\">\n                    <img [src]=\"imgProfile\"/>\n                </div>\n                <div class=\"details\">\n                    <span class=\"name\">\n                        {{name}}\n                    </span>\n                    <a [href]=\"'mail:'+email\" class=\"email\">\n                        {{email}}\n                    </a>\n                </div>\n            </div>\n            <div class='content'>\n                <ng-content></ng-content>\n            </div>\n        </div>\n    </div>\n</ng-template>",
                styles: [":host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link .right-menu-link-picture{display:table-cell;vertical-align:middle;text-align:center;margin:0 auto}.right-menu-item-link .right-menu-link-picture img{display:block;vertical-align:middle;max-width:41px!important;text-align:center;margin:0!important;border-radius:50%;border-style:none}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=\" flaticon-\"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.hide{display:none!important}.header{padding:20px;border-radius:6px 6px 0 0;margin:0;display:table;table-layout:fixed}.header .user-pic{display:table-cell;text-align:right;padding:0 5px 0 0;vertical-align:middle;width:70px}.header .user-pic img{max-width:70px!important;margin:0!important;border-radius:100%}.header .details{display:table-cell;width:100%;text-align:left;vertical-align:middle;padding:0 0 0 15px}.header .details .name{color:#fff;display:block;padding:0;font-size:1.3rem;font-weight:400;line-height:1}.header .details .email{color:#d9d9d9;display:inline-block;padding:6px 0 0;font-size:1rem;text-decoration:none;position:relative}"],
                animations: [fadeUp()]
            },] },
];
MainToolbarProfileComponent.ctorParameters = function () { return [
    { type: overlay.Overlay, },
    { type: LayoutService, },
]; };
MainToolbarProfileComponent.propDecorators = {
    "imgProfile": [{ type: core.Input },],
    "name": [{ type: core.Input },],
    "email": [{ type: core.Input },],
    "menu": [{ type: core.ViewChild, args: ['profile',] },],
    "templatePortals": [{ type: core.ViewChildren, args: [portal.TemplatePortalDirective,] },],
};
var MainToolbarChatComponent = /** @class */ (function () {
    function MainToolbarChatComponent() {
    }
    return MainToolbarChatComponent;
}());
MainToolbarChatComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-main-toolbar-chat]',
                template: "<a class=\"right-menu-item-link\">\n    <!-- <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span> -->\n    <span class=\"right-menu-link-icon\">\n        <i class=\"flaticon-chat\"></i>\n    </span>\n</a>",
                styles: [":host{padding:0 12px;height:100%;display:inline-block;vertical-align:middle;position:relative;font-size:14px;font-weight:300;font-family:Poppins;-webkit-font-smoothing:antialiased;line-height:1.5;color:#212529;background-color:#fff}.right-menu-item-link{position:relative;margin:0;width:auto;padding:0;display:table;table-layout:fixed;text-decoration:none;outline:0!important;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;color:#5867dd;background-color:transparent;list-style:none;height:100%;font-size:14px;font-weight:300;font-family:Poppins;cursor:pointer}.right-menu-item-link .right-menu-link-icon{text-align:center;line-height:0;vertical-align:middle;padding:0;color:#ad5beb;display:table-cell;width:35px;font-size:1.4rem;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;text-decoration:none;background-color:transparent;height:100%;margin:0;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.right-menu-item-link i{font-size:1.5rem}.right-menu-item-link i:before{font-weight:700;padding:1px;background:-webkit-gradient(linear,left top,left bottom,color-stop(25%,#ad5beb),color-stop(50%,#c678db),color-stop(75%,#da6ea9),to(#e76e92));background:linear-gradient(180deg,#ad5beb 25%,#c678db 50%,#da6ea9 75%,#e76e92 100%);background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}[class*=\" flaticon-\"]:before,[class^=flaticon-]:before{font-family:Flaticon;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}"]
            },] },
];
var SidenavItemComponent = /** @class */ (function () {
    function SidenavItemComponent(router$$1, overlay$$1, ref, layout$$1) {
        this.router = router$$1;
        this.overlay = overlay$$1;
        this.ref = ref;
        this.layout = layout$$1;
        this.nav = false;
        this.sidenavOpen = { minimize: false };
        this.children = false;
        this.onMinHover = false;
        this.hasAttached = false;
        this.listHover = false;
    }
    SidenavItemComponent.prototype.ngOnInit = function () { };
    SidenavItemComponent.prototype.parentOpen = function (i) {
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
    };
    SidenavItemComponent.prototype.isActive = function (instruction) {
        return this.router.isActive(this.router.createUrlTree(instruction), false);
    };
    SidenavItemComponent.prototype.toggleChildren = function (level) {
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
    };
    SidenavItemComponent.prototype.childrenAndActive = function (level) {
        if (level.children &&
            level.children.length > 0 &&
            (level.isOpen || this.isActive([level.path]))) {
            return true;
        }
        else {
            return false;
        }
    };
    SidenavItemComponent.prototype.onHover = function (e) {
        this.listHover = true;
        if (!!this.sidenavOpen.minimize && !this.hasAttached) {
            var config = new overlay.OverlayConfig({
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
    };
    SidenavItemComponent.prototype.onLeave = function (e) {
        var _this = this;
        this.listHover = false;
        setTimeout(function () {
            if (!!_this.sidenavOpen.minimize && !_this.onMinHover) {
                _this.hasAttached = false;
                _this.overlayRef.dispose();
            }
        }, 100);
    };
    SidenavItemComponent.prototype.onMinLeave = function (e) {
        var _this = this;
        setTimeout(function () {
            if (!!_this.sidenavOpen.minimize && !_this.onMinHover && !_this.listHover) {
                _this.hasAttached = false;
                _this.overlayRef.dispose();
            }
        }, 100);
    };
    return SidenavItemComponent;
}());
SidenavItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-sidenav-item]',
                template: "<a class='menu-item' *ngIf=\"menu.children && menu.children.length > 0; else noChildItem\" (click)=\"parentOpen(index)\" [ngClass]=\"{'active':childrenAndActive(menu)}\">\n  <i class=\"icon flaticon-settings\"></i>\n  <span class=\"text\">\n    {{menu.data.name}}\n  </span>\n  <i class=\"arrow la la-angle-right\" *ngIf=\"menu.children && menu.children.length > 0\"></i>\n</a>\n<ng-template #noChildItem>\n  <a class='menu-item no-child' [routerLink]=\"menu?.path\" routerLinkActive=\"menu-item-active\" routerLinkActiveOptions=\"{ exact: true }\">\n    <i class=\"icon flaticon-settings\"></i>\n    <span class=\"text\">\n      {{menu.data.name}}\n    </span>\n    <span class=\"badge\" *ngIf=\"menu.data.badge\">\n      <span>{{menu.data.badge}}</span>\n    </span>\n  </a>\n</ng-template>\n<ng-template [ngIf]=\"menu.children && menu.children.length > 0\" cdk-portal>\n  <div (mouseenter)=\"onMinHover = true;\" (mouseleave)=\"onMinHover = false; onMinLeave($event)\" class=\"menu-submenu\" [@childActive]=\"toggleChildren(menu)\"\n    [ngClass]=\"{'minimize':sidenavOpen.minimize}\">\n    <span class=\"arrow\"></span>\n    <ul class=\"menu-subnav\">\n      <li class=\"menu-subnav-item subnav-title\">\n        <a>\n          <span class=\"text\">\n            {{menu.data.name}}\n          </span>\n          <span class=\"badge\" *ngIf=\"menu.data.badge\">\n            <span>{{menu.data.badge}}</span>\n          </span>\n        </a>\n      </li>\n      <li class=\"menu-subnav-item\" routerLinkActive=\"menu-subnav-item-active\" routerLinkActiveOptions=\"{ exact: true}\" aria-haspopup=\"true\"\n        *ngFor=\"let level2 of menu.children\">\n        <a [routerLink]=\"[menu.path+'/'+level2.path]\">\n          <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n            <span></span>\n          </i>\n          <span class=\"text\">\n            {{level2.data.name}}\n          </span>\n          <span class=\"badge\" *ngIf=\"level2.data.badge\">\n            <span>{{level2.data.badge}}</span>\n          </span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n<ng-template #noChild>\n  <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\n    <a [routerLink]=\"[menu?.path]\" class=\"m-menu__link\">\n      <i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n      <span class=\"m-menu__link-title\">\n        <span class=\"m-menu__link-wrap\">\n          <span class=\"m-menu__link-text\">\n            {{menu.data.name}}\n          </span>\n        </span>\n      </span>\n    </a>\n  </li>\n</ng-template>\n",
                styles: [":host{background-color:none;position:relative;margin:0;display:block;float:none;height:auto;padding:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer}:host :hover{background-color:#292b3a}.menu-item{padding:2px 30px;height:44px;display:table;table-layout:fixed;margin:0;text-decoration:none;position:relative;outline:0}.menu-item i.icon{color:#fefefe;text-align:left;width:35px;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0 15px 0 0}.menu-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-item span.badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-item i.arrow{color:#fefefe;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-item i.arrow:before{display:inline-block;-webkit-transition:all .3s ease;transition:all .3s ease}.menu-item:hover i.arrow,.menu-item:hover i.icon{color:#868aa8}.menu-item.minimize{padding-left:0;padding-right:0;text-align:center;height:44px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-item.minimize i.arrow,.menu-item.minimize span.text{display:none}.menu-item.minimize i.icon{width:100%;text-align:center;font-size:1.4rem;display:table-cell;height:100%;vertical-align:middle;line-height:0;padding:0!important}.menu-item.active i.arrow,.menu-item.active i.icon{color:#868aa8}.menu-item.active i.arrow:before{-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate3d(0,0,0);-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.menu-subnav-item{display:block;margin:0;float:none;height:auto;padding:0;cursor:pointer}.menu-subnav-item span.text{color:#fefefe;font-weight:400;font-size:1.02rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0!important;vertical-align:middle}.menu-subnav-item span.badge{display:table-cell;height:100%;width:20px;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}.menu-subnav-item span.badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item i.arrow{color:#525672;text-align:right;width:20px;font-size:.7rem;display:table-cell;vertical-align:middle;line-height:0;height:100%;padding:0!important}.menu-subnav-item i.arrow:before{display:inline-block;-webkit-transition:all .3s ease;transition:all .3s ease}.menu-subnav-item a{padding:0 30px 0 50px;height:40px;display:table;table-layout:fixed;width:100%;margin:0;text-decoration:none;position:relative;outline:0}.menu-subnav-item a i{vertical-align:middle;text-align:left;width:20px;display:table-cell;height:100%;line-height:0;font-size:14px;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.menu-subnav-item a i span{width:4px;height:4px;border-radius:100%;vertical-align:middle;display:inline-block;background-color:#525672}.menu-subnav-item a>span{color:#fefefe;font-weight:400;font-size:1rem;text-transform:initial;display:table-cell;height:100%;width:100%;padding:0;vertical-align:middle}.menu-subnav-item a .badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right;width:20px}.menu-subnav-item a .badge span{border-radius:10px;background:#f4516c;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px;color:#fff}.menu-subnav-item-active a i,.menu-subnav-item-active a span.text{color:#2a61ac!important}.menu-subnav-item-active a i span span.badge,.menu-subnav-item-active a span.text span span.badge{color:#fff}.menu-item-active{background-color:#292b3a}.menu-item-active i,.menu-item-active span{color:#2a61ac!important}.menu-item-active span.badge span{color:#fff!important}.menu-submenu{overflow:hidden;float:none;margin:0;padding:0}.menu-submenu .menu-subnav{padding:0;width:100%;margin:0;list-style:none}.menu-submenu .menu-subnav .menu-subnav-item.subnav-title{display:none}.menu-submenu.minimize{height:0;overflow:hidden}.menu-item.minimize .text{-webkit-transition:all .3s ease;transition:all .3s ease;display:none!important}.menu-item.minimize .m-brand__tools{text-align:center}"],
                animations: [
                    animations.trigger('childActive', [
                        animations.state('inactive', animations.style({
                            display: 'block',
                            height: 0,
                            overflow: 'hidden'
                        })),
                        animations.state('active', animations.style({
                            display: 'block',
                            height: '*'
                        })),
                        animations.transition('inactive => active', animations.animate('500ms ease')),
                        animations.transition('active => inactive', animations.animate('500ms ease'))
                    ])
                ]
            },] },
];
SidenavItemComponent.ctorParameters = function () { return [
    { type: router.Router, },
    { type: overlay.Overlay, },
    { type: core.ElementRef, },
    { type: LayoutService, },
]; };
SidenavItemComponent.propDecorators = {
    "menu": [{ type: core.Input, args: ['menu',] },],
    "index": [{ type: core.Input, args: ['index',] },],
    "nav": [{ type: core.Input },],
    "navFromRouter": [{ type: core.Input },],
    "templatePortals": [{ type: core.ViewChildren, args: [portal.TemplatePortalDirective,] },],
    "sidenavOpen": [{ type: core.Input },],
    "onHover": [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
    "onLeave": [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
};
var ProfileItemComponent = /** @class */ (function () {
    function ProfileItemComponent(render, el, ls) {
        this.render = render;
        this.el = el;
        this.ls = ls;
    }
    ProfileItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', function () {
                _this.ls.closeOverlay.next(true);
            });
        }
    };
    return ProfileItemComponent;
}());
ProfileItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-profile-item]',
                template: "\n    <span class=\"link\">\n        <i [class]=\"icon\"></i>\n        <span class=\"title\">\n            <span class=\"wrap\">\n                <span class=\"text\">\n                    <ng-content></ng-content>\n                </span>\n                <span class=\"link-badge\" *ngIf=\"badge\">\n                    <span class=\"badge badge-success\">\n                        {{badge}}\n                    </span>\n                </span>\n            </span>\n        </span>\n    </span>\n  ",
                styles: [":host{display:block;padding:0 20px}:host .link{display:table;table-layout:fixed;width:100%;height:100%;text-decoration:none;position:relative;outline:0!important;vertical-align:middle;padding:9px 0;-ms-touch-action:manipulation;touch-action:manipulation;color:#6f727d}:host .link .icon{display:table-cell;height:100%;vertical-align:middle;text-align:left;width:35px;font-size:1.4rem;line-height:0}:host .link .title{display:table-cell;height:100%;padding:0;margin:0;vertical-align:middle}:host .link .title .wrap{display:table;height:100%;margin:0;width:100%;padding:0;vertical-align:middle}:host .link .title .wrap .text{font-weight:400;display:table-cell;height:100%;width:100%;margin:0;padding:0;vertical-align:middle;font-size:1rem}:host .link .title .wrap .link-badge{display:table-cell;height:100%;vertical-align:middle;white-space:nowrap;padding:0 0 0 5px;text-align:right}:host .link .title .wrap .link-badge .badge{border-radius:10px;background:#eaeaea;color:#444;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;vertical-align:middle;text-align:center;display:inline-block;padding:0 2px}:host .link .title .wrap .link-badge .badge.badge-success{background-color:#34bfa3;color:#fff}:host .link:hover{color:#2a61ac!important}:host:hover{background-color:rgba(113,106,202,.1);color:#2a61ac!important;cursor:pointer}"]
            },] },
];
ProfileItemComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: LayoutService, },
]; };
ProfileItemComponent.propDecorators = {
    "badge": [{ type: core.Input },],
    "icon": [{ type: core.Input },],
};
var ProfileSeparatorComponent = /** @class */ (function () {
    function ProfileSeparatorComponent() {
    }
    ProfileSeparatorComponent.prototype.ngOnInit = function () {
    };
    return ProfileSeparatorComponent;
}());
ProfileSeparatorComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-profile-separator]',
                template: "\n  ",
                styles: ["\n        :host{\n            margin: 15px 0;\n            margin-left: -20px;\n            margin-right: -20px;\n            border-bottom: 1px solid #f4f5f8;\n            height: 0;\n            overflow: hidden;\n        }\n  "]
            },] },
];
ProfileSeparatorComponent.ctorParameters = function () { return []; };
var ProfileSectionComponent = /** @class */ (function () {
    function ProfileSectionComponent() {
    }
    ProfileSectionComponent.prototype.ngOnInit = function () {
    };
    return ProfileSectionComponent;
}());
ProfileSectionComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-profile-section]',
                template: "\n    <span class=\"text\">\n        <ng-content></ng-content>\n    </span>\n  ",
                styles: ["\n        :host{\n            display: table;\n            width: 100%;\n            vertical-align: middle;\n            margin: 20px 20px 10px 20px;\n        }\n        .text{\n            color:#2a61ac;\n            display: table-cell;\n            margin: 0;\n            vertical-align: middle;\n            font-weight: 600;\n            font-size: 0.85rem;\n            text-transform: uppercase;\n\n        }\n  "]
            },] },
];
ProfileSectionComponent.ctorParameters = function () { return []; };
var ProfileButtonComponent = /** @class */ (function () {
    function ProfileButtonComponent(render, el, ls) {
        this.render = render;
        this.el = el;
        this.ls = ls;
    }
    ProfileButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.el.nativeElement.querySelector('.close-on-click')) {
            this.render.listen(this.el.nativeElement.querySelector('.close-on-click'), 'click', function () {
                _this.ls.closeOverlay.next(true);
            });
        }
    };
    return ProfileButtonComponent;
}());
ProfileButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-profile-button]',
                template: "\n    <ng-content></ng-content>\n  ",
                styles: ["\n    :host{\n        display: block;\n        padding: 20px 20px;\n        padding-top:0;\n    }\n  "]
            },] },
];
ProfileButtonComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: LayoutService, },
]; };
var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent() {
    }
    ProfileListComponent.prototype.ngOnInit = function () {
    };
    return ProfileListComponent;
}());
ProfileListComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[hd-profile-list]',
                template: "\n    <ng-content></ng-content>\n  ",
                styles: ["\n    :host{\n        padding: 0;\n        margin: 0;\n        margin-top:20px;\n        list-style: none;\n    }\n  "]
            },] },
];
ProfileListComponent.ctorParameters = function () { return []; };
var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-timeline',
                template: "\n        <div class=\"items\">\n            <ng-content></ng-content>\n        </div>\n    ",
                styles: [":host{display:block}:host .items{position:relative;padding:0;margin:0}:host .items::before{background-color:#ebedf2;position:absolute;display:block;content:'';width:1px;height:100%;top:0;bottom:0;left:3px}"]
            },] },
];
TimelineComponent.ctorParameters = function () { return []; };
var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
    }
    return TimelineItemComponent;
}());
TimelineItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-timeline-item',
                template: "\n        <span class=\"badge\"></span>\n        <span class=\"text\">\n            <ng-content></ng-content>\n            <span *ngIf=\"badge\" class=\"badge badge-success\">{{badge}}</span>\n        </span>\n        <span class=\"time\" *ngIf=\"time\">\n            {{time}}\n        </span>\n    ",
                styles: [":host{position:relative;display:table;table-layout:fixed;width:100%;padding:6px 0;margin:5px 0}:host>.badge{text-align:left;vertical-align:middle;display:table-cell;position:relative;width:20px}:host .badge::before{background-color:#ebedf2;position:absolute;display:block;content:'';width:7px;height:7px;left:0;top:50%;margin-top:-3.5px;border-radius:100%}:host .text{color:#575962;display:table-cell;text-align:left;vertical-align:middle;width:100%;padding:0 5px 0 0;font-size:1rem;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}:host .text .badge{letter-spacing:.6px;padding:1px 10px;border-radius:10px;background:#eaeaea;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;width:auto;vertical-align:middle;text-align:center;display:inline-block}:host .text .badge.badge-success{background-color:#34bfa3;color:#fff}:host .time{color:#7b7e8a;display:table-cell;text-align:right;vertical-align:middle;width:80px;padding:0 7px 0 0;font-size:.85rem}:host:first-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;top:0;bottom:0;left:3px}:host:last-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;bottom:0;left:3px}"]
            },] },
];
TimelineItemComponent.propDecorators = {
    "badge": [{ type: core.Input },],
    "time": [{ type: core.Input },],
};
var HdLayoutModule = /** @class */ (function () {
    function HdLayoutModule() {
    }
    return HdLayoutModule;
}());
HdLayoutModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    material.MatSidenavModule,
                    material.MatToolbarModule,
                    material.MatButtonModule,
                    material.MatListModule,
                    material.MatMenuModule,
                    material.MatIconModule,
                    material.MatGridListModule,
                    material.MatProgressBarModule,
                    material.MatSelectModule,
                    router.RouterModule,
                    forms.FormsModule,
                    overlay.OverlayModule,
                    portal.PortalModule,
                    material.MatTabsModule,
                    material.MatDialogModule
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
                providers: [MenuService, overlay.OverlayContainer, LayoutService]
            },] },
];
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-login',
                template: "<ng-content></ng-content>",
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;width:100%}"]
            },] },
];
LoginComponent.ctorParameters = function () { return []; };
var LeftSideComponent = /** @class */ (function () {
    function LeftSideComponent() {
    }
    LeftSideComponent.prototype.ngOnInit = function () {
    };
    return LeftSideComponent;
}());
LeftSideComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-left-side',
                template: "<ng-content></ng-content>",
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;border:none;height:100vh}"]
            },] },
];
LeftSideComponent.ctorParameters = function () { return []; };
var RightSideComponent = /** @class */ (function () {
    function RightSideComponent(_render, _ref) {
        this._render = _render;
        this._ref = _ref;
    }
    RightSideComponent.prototype.ngOnInit = function () {
        this._render.setStyle(this._ref.nativeElement, 'background-image', 'url(' + this.background + ')');
    };
    return RightSideComponent;
}());
RightSideComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-right-side',
                template: "<ng-content></ng-content>",
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:50%;-ms-flex:50%;flex:50%;border:none;height:100vh;background-attachment:fixed;background-size:cover;overflow:hidden}"]
            },] },
];
RightSideComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
RightSideComponent.propDecorators = {
    "background": [{ type: core.Input },],
};
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb) {
        this.fb = fb;
        this.title = 'Title';
        this.login = new core.EventEmitter();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [forms.Validators.required, forms.Validators.email]],
            password: ['', [forms.Validators.required, forms.Validators.minLength(6), forms.Validators.maxLength(20)]],
        });
    };
    LoginFormComponent.prototype.onLogin = function (event) {
        if (this.loginForm.valid) {
            this.login.emit(this.loginForm.value);
        }
    };
    LoginFormComponent.prototype.changePasswordType = function (input) {
        if (input.type === 'password') {
            input.type = 'text';
        }
        else {
            input.type = 'password';
        }
    };
    return LoginFormComponent;
}());
LoginFormComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-login-form',
                template: "<div>\n    <img [src]=\"logo\">\n</div>\n<h3>Sign in to admin</h3>\n<form [formGroup]='loginForm' (ngSubmit)=\"onLogin($event)\">\n    <mat-form-field>\n        <input matInput formControlName=\"email\" placeholder=\"Email\" autofill=\"off\">\n        <mat-hint align=\"start\" class=\"error\" *ngIf=\"loginForm.controls.email.invalid && loginForm.controls.email.touched\">\n            <span *ngIf=\"loginForm.controls.email.errors.required\">\n                Email harus diisi\n            </span>\n            <span *ngIf=\"loginForm.controls.email.errors.email\">\n                Format email salah\n            </span>\n        </mat-hint>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\" #pass>\n        <button type=\"button\" mat-icon-button matSuffix (click)=\"changePasswordType(pass)\">\n            <mat-icon>visibility</mat-icon>\n        </button>\n        <mat-hint align=\"start\" class=\"error\" *ngIf=\"loginForm.controls.password.invalid && loginForm.controls.password.touched\">\n            <span *ngIf=\"loginForm.controls.password.errors.required\">\n                Password harus diisi\n            </span>\n            <span *ngIf=\"loginForm.controls.password.errors.minlength\">\n                Password minimal {{loginForm.controls.password.errors.minlength.requiredLength}} karakter\n            </span>\n            <span *ngIf=\"loginForm.controls.password.errors.maxlength\">\n                Password maximal {{loginForm.controls.password.errors.maxlength.requiredLength}} karakter\n            </span>\n        </mat-hint>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" class='mat-elevation-z5'>Sign In</button>\n</form>",
                styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;vertical-align:middle;text-align:center;width:100%;padding-top:20%;font-family:Poppins;color:#212529}:host img{max-width:250px;margin-bottom:50px}:host h3{display:block;font-size:1.4rem;margin-bottom:50px;font-weight:500;font-family:Poppins;color:#212529}:host form{text-align:center}:host form mat-form-field{max-width:60%;margin:20px auto;display:block}"]
            },] },
];
LoginFormComponent.ctorParameters = function () { return [
    { type: forms.FormBuilder, },
]; };
LoginFormComponent.propDecorators = {
    "title": [{ type: core.Input },],
    "login": [{ type: core.Output },],
    "logo": [{ type: core.Input },],
};
var HdLoginModule = /** @class */ (function () {
    function HdLoginModule() {
    }
    return HdLoginModule;
}());
HdLoginModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    material.MatCardModule,
                    material.MatInputModule,
                    material.MatIconModule,
                    material.MatButtonModule,
                    forms.ReactiveFormsModule
                ],
                exports: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent],
                declarations: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent]
            },] },
];
var ContextMenuPanelComponent = /** @class */ (function () {
    function ContextMenuPanelComponent(_el) {
        this._el = _el;
        this.menuItemClicked = new core.EventEmitter();
        this.height = new rxjs.BehaviorSubject(null);
        this.width = new rxjs.BehaviorSubject(null);
    }
    ContextMenuPanelComponent.prototype.onClick = function (item) {
        this.menuItemClicked.emit(item);
    };
    ContextMenuPanelComponent.prototype.onContextMenu = function (event) {
        event.preventDefault();
    };
    ContextMenuPanelComponent.prototype.ngAfterViewInit = function () {
        this.height.next(this._el.nativeElement.offsetHeight);
        this.width.next(this._el.nativeElement.offsetWidth);
    };
    ContextMenuPanelComponent.prototype.checkGroupAccess = function (groupAccess) {
        if (groupAccess && groupAccess.permissions && groupAccess.groups) {
            var allowed = lodashEs.intersection(groupAccess.permissions, groupAccess.groups).length > 0
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
    };
    return ContextMenuPanelComponent;
}());
ContextMenuPanelComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'hd-menu-panel',
                template: "\n    <div class=\"hd-context-menu-panel\"\n      fxLayout=\"column\">\n        <ng-template ngFor let-item [ngForOf]=\"menuItem\">\n            <a mat-button *ngIf=\"item.display !== false && checkGroupAccess(item.groupPermission)\"\n                (click)='onClick(item)'>\n                    <mat-icon style=\"width:15%; font-size: 16px; height: auto\">{{item.icon}}</mat-icon>\n                    <div style=\"display: inline-block; width:75%\">{{item.title}}</div>\n                    <mat-icon style=\"width:10%\" *ngIf='item.children && item.children.length'>keyboard_arrow_right</mat-icon>\n            </a>\n        </ng-template>\n    </div>\n  ",
                styles: [
                    "\n        :host{\n            max-height: 500px;\n            overflow-y: scroll;\n            position: fixed !important;\n            min-width: 200px;\n            display: block;\n            z-index:10;\n            box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n        }\n\n        :host div a{\n            display: block;\n            text-align: left;\n            padding:4px 10px;\n            font-size:12px;\n            md-icon{\n                font-size:12px !important;\n                height: 16px;\n            }\n        }\n\n        :host div a md-icon{\n            font-size:12px !important;\n            height: 16px;\n        }\n    "
                ]
            },] },
];
ContextMenuPanelComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
ContextMenuPanelComponent.propDecorators = {
    "menuItemClicked": [{ type: core.Output },],
    "menuItem": [{ type: core.Input },],
    "onContextMenu": [{ type: core.HostListener, args: ['contextmenu', ['$event'],] },],
};
var ContextMenuService = /** @class */ (function () {
    function ContextMenuService() {
        this.contextMenu = [];
        this.refs = [];
    }
    ContextMenuService.prototype.setContextMenuOverlay = function (overlay$$1) {
        this.contextMenu = this.contextMenu.concat(overlay$$1);
    };
    ContextMenuService.prototype.getContextMenuOverlay = function () {
        return this.contextMenu;
    };
    ContextMenuService.prototype.closeAllContextMenus = function () {
        if (this.contextMenu) {
            this.contextMenu.forEach(function (overlay$$1, index) {
                overlay$$1.detach();
                overlay$$1.dispose();
            });
        }
        this.contextMenu = [];
    };
    ContextMenuService.prototype.setRef = function (el) {
        this.refs = this.refs.concat(el);
    };
    ContextMenuService.prototype.getRef = function () {
        return this.refs;
    };
    ContextMenuService.prototype.destroyAllRef = function () {
        this.refs = [];
    };
    return ContextMenuService;
}());
ContextMenuService.decorators = [
    { type: core.Injectable },
];
ContextMenuService.ctorParameters = function () { return []; };
var ContextMenuDirective = /** @class */ (function () {
    function ContextMenuDirective(ref, render, overlay$$1, _service) {
        this.ref = ref;
        this.render = render;
        this.overlay = overlay$$1;
        this._service = _service;
        this.hdContextMenu = new core.EventEmitter();
        this.active = false;
        this.fakeElement = {
            getBoundingClientRect: function () { return ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            }); }
        };
        render.setStyle(ref.nativeElement, 'cursor', 'context-menu');
    }
    ContextMenuDirective.prototype.onContextMenu = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this._service.closeAllContextMenus();
        var refs = this._service.getRef();
        if (refs) {
            refs.forEach(function (ref, index) {
                _this.render.removeClass(ref.nativeElement, 'hd-contextmenu-active');
            });
        }
        this._service.destroyAllRef();
        this._service.setRef(this.ref);
        this.render.addClass(this.ref.nativeElement, 'hd-contextmenu-active');
        this.createPanel(event);
        this.addPanelItem();
        this.watchItemClick();
        this.outsideListener();
    };
    ContextMenuDirective.prototype.createPanel = function (event) {
        var offsetX = event.offsetX;
        var offsetY = event.offsetY;
        this.fakeElement.getBoundingClientRect = function () { return ({
            bottom: event.clientY,
            height: 0,
            left: event.clientX,
            right: event.clientX,
            top: event.clientY,
            width: 0
        }); };
        var positionStrategy = this.overlay
            .position()
            .connectedTo(new core.ElementRef(this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
            .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
        var config = new overlay.OverlayConfig({
            positionStrategy: positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'contextmenu-overlay'
        });
        this.overlayRef = this.overlay.create(config);
        this._service.setContextMenuOverlay(this.overlayRef);
        var contextMenu = new portal.ComponentPortal(ContextMenuPanelComponent);
        this.panel = this.overlayRef.attach(contextMenu);
        this.active = true;
    };
    ContextMenuDirective.prototype.addPanelItem = function () {
        this.panel.instance.menuItem = this.menuItem;
    };
    ContextMenuDirective.prototype.watchItemClick = function () {
        var _this = this;
        this.clickWatcher$ = this.panel.instance.menuItemClicked.subscribe(function (emitted) {
            emitted.callback(_this.menuID);
        });
    };
    ContextMenuDirective.prototype.outsideListener = function () {
        var _this = this;
        this.render.listen('document', 'click', function (event) {
            if (event.type === 'click' && event.button === 2) {
                return;
            }
            _this._service.closeAllContextMenus();
            _this.render.removeClass(_this.ref.nativeElement, 'hd-contextmenu-active');
            _this.active = false;
        });
    };
    return ContextMenuDirective;
}());
ContextMenuDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[hdContextMenu]'
            },] },
];
ContextMenuDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: overlay.Overlay, },
    { type: ContextMenuService, },
]; };
ContextMenuDirective.propDecorators = {
    "hdContextMenu": [{ type: core.Output },],
    "menuID": [{ type: core.Input },],
    "menuItem": [{ type: core.Input },],
    "_overlayOrigin": [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin,] },],
    "contextMenuOrigin": [{ type: core.Input },],
    "onContextMenu": [{ type: core.HostListener, args: ['contextmenu', ['$event'],] },],
};
var HdContextMenuModule = /** @class */ (function () {
    function HdContextMenuModule() {
    }
    return HdContextMenuModule;
}());
HdContextMenuModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, material.MatButtonModule, material.MatIconModule],
                declarations: [ContextMenuPanelComponent, ContextMenuDirective],
                exports: [ContextMenuPanelComponent, ContextMenuDirective],
                providers: [ContextMenuService],
                entryComponents: [ContextMenuPanelComponent]
            },] },
];
var TableAdapter = /** @class */ (function (_super) {
    __extends(TableAdapter, _super);
    function TableAdapter(_data, _displayedColumns, _paginator, _sort, _searchColumns, _filterInput) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        _this._displayedColumns = _displayedColumns;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._searchColumns = _searchColumns;
        _this._filterInput = _filterInput;
        _this.tableData = new rxjs.BehaviorSubject([]);
        _this.sourceData = new rxjs.BehaviorSubject([]);
        _this.displayedColumns = [];
        _this.searchColumns = [];
        _this.pagination = new rxjs.BehaviorSubject({
            pageIndex: 0,
            pageSize: 10,
            length: _this.tableData.value.length
        });
        _this.filter = new rxjs.BehaviorSubject('');
        _this.sort = new rxjs.BehaviorSubject({
            active: '',
            direction: 'asc'
        });
        if (_searchColumns && _searchColumns.length === 0) {
            _searchColumns = _displayedColumns;
        }
        if (_filterInput) {
            rxjs.fromEvent(_filterInput.nativeElement, 'keyup')
                .pipe(operators.debounceTime(100), operators.distinctUntilChanged())
                .subscribe(function () { return _this.filter.next(_filterInput.nativeElement.value); });
        }
        return _this;
    }
    TableAdapter.prototype.connect = function () {
        var _this = this;
        var connectData = [];
        if (this._filterInput) {
            connectData.push(this.filter);
        }
        if (this._sort) {
            connectData.push(this._sort.sortChange);
        }
        if (this._paginator) {
            connectData.push(this._paginator.page);
        }
        return this._data.pipe(operators.map(function (res) { return _this.setData(res); }), operators.switchMap(function (res) {
            if (connectData.length > 0) {
                return rxjs.merge.apply(void 0, __spread(connectData));
            }
            else {
                return rxjs.of(res);
            }
        }), operators.map(function () { return _this.filtering(); }), operators.map(function () { return _this.sorting(); }), operators.map(function () { return _this.paging(); }));
    };
    TableAdapter.prototype.setData = function (data) {
        this.sourceData.next(data);
        this.tableData.next(data);
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
        }
    };
    TableAdapter.prototype.paging = function () {
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
            var data = this.tableData.value.slice();
            var startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        }
        else {
            return this.tableData.value;
        }
    };
    TableAdapter.prototype.sorting = function () {
        var _this = this;
        var data = this.tableData.value.slice();
        if (!this._sort || !this._sort.active || this._sort.direction === '') {
            return this.tableData.value;
        }
        data.sort(function (a, b) {
            var _a;
            var propertyA = '';
            var propertyB = '';
            _a = __read([a[_this._sort.active], b[_this._sort.active]], 2), propertyA = _a[0], propertyB = _a[1];
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1));
        });
        this.tableData.next(data);
        return data;
    };
    TableAdapter.prototype.filtering = function () {
        var _this = this;
        if (!this._filterInput) {
            return this.tableData.value;
        }
        if (this.filter.value === '') {
            this.tableData.next(this.sourceData.value);
            return this.sourceData.value;
        }
        var query = this.filter.value.split(' ');
        var tableData = this.sourceData.value;
        query.forEach(function (q) {
            tableData = tableData.slice().filter(function (item) {
                var exist = false;
                var result = -1;
                _this._searchColumns.forEach(function (obj) {
                    if (typeof item[obj] === 'string') {
                        if (typeof item[obj] !== 'undefined' &&
                            typeof query !== 'undefined') {
                            var searchStr = item[obj].toLowerCase();
                            result = searchStr.indexOf(q.toLowerCase());
                        }
                    }
                    else if (typeof item[obj] !== 'undefined' &&
                        typeof _this.filter.value !== 'undefined') {
                        var searchStr2 = item[obj].toString();
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
    };
    TableAdapter.prototype.disconnect = function () { };
    return TableAdapter;
}(table.DataSource));
var ContextMenu = /** @class */ (function () {
    function ContextMenu() {
    }
    return ContextMenu;
}());

exports.HdUploadModule = HdUploadModule;
exports.HdLayoutModule = HdLayoutModule;
exports.HdLoginModule = HdLoginModule;
exports.HdContextMenuModule = HdContextMenuModule;
exports.LayoutService = LayoutService;
exports.MenuService = MenuService;
exports.ContextMenu = ContextMenu;
exports.TableAdapter = TableAdapter;
exports.routerTransition = routerTransition;
exports.slideToRight = slideToRight;
exports.slideToLeft = slideToLeft;
exports.slideToUp = slideToUp;
exports.slideToDown = slideToDown;
exports.fadeUp = fadeUp;
exports.ringing = ringing;
exports.ɵbc = ContextMenuPanelComponent;
exports.ɵbd = ContextMenuDirective;
exports.ɵbe = ContextMenuService;
exports.ɵh = BreadcrumbComponent;
exports.ɵd = LayoutComponent;
exports.ɵo = MainToolbarChatComponent;
exports.ɵj = MainToolbarLeftMenuComponent;
exports.ɵl = MainToolbarMenuItemComponent;
exports.ɵm = MainToolbarNotificationComponent;
exports.ɵn = MainToolbarProfileComponent;
exports.ɵs = ProfileButtonComponent;
exports.ɵp = ProfileItemComponent;
exports.ɵt = ProfileListComponent;
exports.ɵr = ProfileSectionComponent;
exports.ɵq = ProfileSeparatorComponent;
exports.ɵk = MainToolbarRightMenuComponent;
exports.ɵe = MainToolbarComponent;
exports.ɵf = PageToolbarComponent;
exports.ɵx = SidenavItemComponent;
exports.ɵg = SidenavComponent;
exports.ɵw = StartPageDialogComponent;
exports.ɵi = StartPageComponent;
exports.ɵv = TimelineItemComponent;
exports.ɵu = TimelineComponent;
exports.ɵc = UploadContainerComponent;
exports.ɵa = UploadFileDirective;
exports.ɵb = UploadImageDirective;
exports.ɵz = LeftSideComponent;
exports.ɵbb = LoginFormComponent;
exports.ɵy = LoginComponent;
exports.ɵba = RightSideComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=humadev-ng-theme.umd.js.map
