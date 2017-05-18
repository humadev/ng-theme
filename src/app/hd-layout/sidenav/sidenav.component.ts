import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'hd-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;
      @Input() nav:any = false;
      @Input() lazyLoadModule:any = false;
      @Input() navFromRouter:any;
      @Input() lazyLoadPath:string = '';
      @Output() pageTitle = new EventEmitter();
      opened = true;

      constructor(
            private router:Router,
            private activeRoute:ActivatedRoute
      ){}

      ngOnInit(){
            if(this.nav == false){
                  this.router.events
                  .filter(event => event instanceof NavigationEnd)
                  .map(() => this.activeRoute)
                  .map(route => {
                        while (route.firstChild) route = route.firstChild;
                        return route;
                  })
                  .filter(route => route.outlet === 'primary')
                  .switchMap(route => route.data)
                  .subscribe(res => this.pageTitle.emit(res.name));
            
                  if(this.lazyLoadModule){
                        this.router.events
                        .filter(event => event instanceof NavigationEnd)
                        .map(() => this.activeRoute)
                        .switchMap(activeRoute => Observable.from(this.router.config))
                        .filter((res,i) => res.path === this.activeRoute.firstChild.routeConfig.path)
                        .subscribe(res => {
                                    this.navFromRouter = res["_loadedConfig"].routes;
                                    this.lazyLoadPath = res.path+'/';
                              }
                        );
                  }else{
                        this.navFromRouter = this.router.config;
                  }
            }
      }

      parentOpen(i:any){
            if(this.nav == false){
                  if(this.navFromRouter[i].isOpen == false || !this.navFromRouter[i].hasOwnProperty('isOpen')){
                        this.navFromRouter[i].isOpen = true;
                  }else{
                        this.navFromRouter[i].isOpen = false;
                  }
            }else{
                  if(this.nav[i].isOpen == false || !this.nav[i].hasOwnProperty('isOpen')){
                        this.nav[i].isOpen = true;
                  }else{
                        this.nav[i].isOpen = false;
                  }
            }
      }

      isActive(instruction: any[]): boolean{
            let res = this.router.isActive(this.router.createUrlTree(instruction), false);
            return res;
      }

      checkPath(row){
            if(row.path == ''){
                  return {exact:true};
            }else{
                  return {exact:false};
            }
      }

      @Output()
      toggle(){
            this.opened = !this.opened;
      }

}
