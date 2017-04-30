import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

interface menu{
      icon:string;
      path:string;
      name:string;
      groupAccess?:Array<number>;
      children?:Array<menu>;
      isOpen?:boolean;
}

@Component({
  selector: 'hd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;
      @Input() nav;
      @Input() notification:boolean = false;
      @Input() notificationList:Array<any>;
      @Input() profilePosition:string = "top";
      pageTitle = '';

      constructor(
            private router:Router,
            private activeRoute:ActivatedRoute
      ){
            
      }

      ngOnInit(){
            this.activeRoute.url.subscribe(
                  path => {
                        console.log('rute', path);
                  }
            );
             let test = this.nav.reduce(
                   (a,b) => {
                         if(b.children){
                              return [...a, ...b, ...b.children];
                         }else{
                              return [...a, ...b];
                         }
                   }, []
            ).filter(red => red.path === 'dashboard1');
            console.log(test[0].name);
      }

      parentOpen(i:any){
            if(this.nav[i].isOpen == false || !this.nav[i].hasOwnProperty('isOpen')){
                  this.nav[i].isOpen = true;
            }else{
                  this.nav[i].isOpen = false;
            }
      }

      isActive(instruction: any[]): boolean {
            console.log(instruction);
            return this.router.isActive(this.router.createUrlTree(instruction), false);
      }

}
