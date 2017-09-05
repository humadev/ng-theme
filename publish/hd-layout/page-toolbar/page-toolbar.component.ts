import { Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: 'hd-page-toolbar',
  template: `
      <md-toolbar class="hd-page-toolbar mat-elevation-z2">
            <span class="hd-page-title">{{pageTitle}}</span>
            <span class="fill-space"></span>
            <hd-breadcrumb></hd-breadcrumb>
      </md-toolbar>
      <md-progress-bar mode="indeterminate" *ngIf="_ls.pageProgressBar"></md-progress-bar>
  `
})
export class PageToolbarComponent{

      pageTitle = '';

      constructor(
            public _ls: LayoutService
      ) {
            _ls.pageTitle.subscribe(res => this.pageTitle = res);
      }

      changePageTitle(title: string) {
            this.pageTitle = title;
      }

}
