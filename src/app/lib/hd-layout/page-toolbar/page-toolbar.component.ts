import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'hd-page-toolbar',
  template: `
        <h3 class="title">
            {{pageTitle}}
        </h3>
        <hd-breadcrumb></hd-breadcrumb>
    `,
    styles: [`
        :host{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            margin-top: 70px;
            padding: 20px;
            padding-top: 30px;
            padding-bottom: 0;
            vertical-align: middle;
        }
        .title{
                padding: 7px 25px 7px 0;
                font-family: Roboto;
                font-weight: 300;
                font-size: 1.55rem;
                font-weight: 500;
                vertical-align: middle;
                color: #3f4047;
        }
    `]
})
export class PageToolbarComponent {

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
