import { slideToUp } from './../lib/animations/router.animation';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from "./../lib/services/layout.service";

@Component({
  selector: 'hd-example',
  template: `
        <hd-main-toolbar titleImg="assets/logo.png"></hd-main-toolbar>
        <hd-sidenav #sidenav lazyLoadModule="true">
                <hd-page-toolbar #pagebar></hd-page-toolbar>
                <div class='hd-page'>
                    <router-outlet></router-outlet>
                </div>
        </hd-sidenav>
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
