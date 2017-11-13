import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hd-profile-button]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
        display: block;
        padding: 20px 20px;
        padding-top:0;
    }
  `]
})
export class ProfileButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
