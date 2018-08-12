import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
export interface IBreadcrumb {
    label: string;
    params?: Params;
    url: string;
    class?: any;
}
export declare class BreadcrumbComponent implements OnInit {
    private router;
    private activatedRoute;
    breadcrumbs: IBreadcrumb[];
    constructor(router: Router, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    private getBreadcrumbs;
}
