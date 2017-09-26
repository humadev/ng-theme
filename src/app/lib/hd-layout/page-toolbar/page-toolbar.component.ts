import { Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: 'hd-page-toolbar',
  template: `
  <div class="m-subheader">
  <div class="d-flex align-items-center">
      <div class="mr-auto">
          <h3 class="m-subheader__title">
              Dashboard
          </h3>
      </div>
      <div>
          <span class="m-subheader__daterange" id="m_dashboard_daterangepicker">
              <span class="m-subheader__daterange-label">
                  <span class="m-subheader__daterange-title"></span>
                  <span class="m-subheader__daterange-date m--font-brand"></span>
              </span>
              <a href="#" class="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                  <i class="la la-angle-down"></i>
              </a>
          </span>
      </div>
  </div>
</div>
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
