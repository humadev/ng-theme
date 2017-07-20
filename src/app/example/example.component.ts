import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-example',
  template: `
      <hd-layout lazyLoadModule='true' title="Undiknas SIM" notification="true">
            <router-outlet></router-outlet>
      </hd-layout>
  `,
  styles: []
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
