import { Component } from '@angular/core';

@Component({
  selector: 'hd-page-toolbar',
  template: `
      <md-toolbar class="hd-page-toolbar">
            <span class="hd-page-title">{{pageTitle}}</span>
            <span class="fill-space"></span>
            <hd-breadcrumb></hd-breadcrumb>
      </md-toolbar>  
  `
})
export class PageToolbarComponent{

      pageTitle = '';

      changePageTitle(title:string){
            this.pageTitle = title;
      }

}
