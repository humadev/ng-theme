import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET, Params } from "@angular/router";

interface IBreadcrumb {
      label: string;
      params?: Params;
      url: string;
      class?:any
}

@Component({
      selector: 'hd-breadcrumb',
      templateUrl: './breadcrumb.component.html',
      styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

      breadcrumbs : IBreadcrumb[];

      constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

      ngOnInit() {
            //subscribe to the NavigationEnd event
            this.router.events.filter(
                  event => event instanceof NavigationEnd)
            .subscribe(event => {
                  //set breadcrumbs
                  let root: ActivatedRoute = this.activatedRoute.root;
                  this.breadcrumbs = this.getBreadcrumbs(root);
                  console.log("root",root);
            });
            
      }

      private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
            const ROUTE_DATA_BREADCRUMB: string = "name";

            //get the child routes
            let children: ActivatedRoute[] = route.children;

            //return if there are no more children
            if (children.length === 0) {
                  return breadcrumbs;
            }

            //iterate over each children
            for (let child of children) {
            //verify primary route
                  if (child.outlet !== PRIMARY_OUTLET) {
                        continue;
                  }

                  //verify the custom data property "breadcrumb" is specified on the route
                  if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        return this.getBreadcrumbs(child, url, breadcrumbs);
                  }

                  //get the route's URL segment
                  let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

                  //append route URL to URL
                  url += `/${routeURL}`;

                  //add breadcrumb
                  let breadcrumb: IBreadcrumb = {
                        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                        params: child.snapshot.params,
                        url: url
                  };
                  if(child.snapshot.component){
                        breadcrumb.class = 'link';
                  }else{
                        breadcrumb.class = 'non-link';
                  }
                  
                  breadcrumbs.push(breadcrumb);

                  //recursive
                  return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            return breadcrumbs;
      }

}
