import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'hd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;
      @Input() notification:boolean = false;
      @Input() notificationList:Array<any>;
      @Input() profilePosition:string = "top";
      pageTitle = '';

      constructor(
      ){
            
      }

      ngOnInit(){
           
      }

      changePageTitle(title:string){
            this.pageTitle = title;
      }

      

}
