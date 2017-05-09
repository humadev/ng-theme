import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
@Component({
  selector: 'hd-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;
      @Input() nav:any = false;
      @Input() navFromRouter:any;
      @Output() pageTitle = new EventEmitter();
      opened = true;

      constructor(
            private router:Router,
            private activeRoute:ActivatedRoute
      ){}

      ngOnInit(){
            if(this.nav == false)
                  this.navFromRouter = this.router.config;
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
