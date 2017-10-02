import { slideToUp } from 'app/lib/animations/router.animation';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from "app/lib/services/layout.service";

@Component({
  selector: 'hd-example',
  template: `
      <hd-layout lazyLoadModule='true' title="Undiknas SIM" notification="true">
            <router-outlet></router-outlet>
      </hd-layout>
  `
})
export class ExampleComponent implements OnInit {

  constructor(private _ls: LayoutService) {
        _ls.pageProgressBar = true;
  }

  ngOnInit() {
        this._ls.pageProgressBar = false;
  }

}
