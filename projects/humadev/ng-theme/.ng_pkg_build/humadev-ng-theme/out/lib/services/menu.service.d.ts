import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { LayoutService } from './layout.service';
export declare class MenuService {
    private router;
    private activeRoute;
    private loc;
    private _ls;
    pageTitle: BehaviorSubject<string>;
    lazyLoad: boolean;
    sidenav: BehaviorSubject<any[]>;
    moduleIndex: Subject<number>;
    startMenu: any[];
    moduleActive: Subject<string>;
    constructor(router: Router, activeRoute: ActivatedRoute, loc: Location, _ls: LayoutService);
    navigate(url: string): void;
}
