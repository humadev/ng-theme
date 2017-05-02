import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.css']
})
export class PageToolbarComponent implements OnInit {

      pageTitle = '';

      constructor(){}

      ngOnInit(){

      }

      changePageTitle(title:string){
            this.pageTitle = title;
      }

}
