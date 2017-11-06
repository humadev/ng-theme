import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'hd-page-toolbar',
  template: `
  <div class="m-subheader">
  <div class="d-flex align-items-center">
      <div class="mr-auto">
          <h3 class="m-subheader__title">
              {{pageTitle}}
          </h3>
      </div>
      <div>
          <hd-breadcrumb></hd-breadcrumb>
      </div>
  </div>
</div>
  `
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
