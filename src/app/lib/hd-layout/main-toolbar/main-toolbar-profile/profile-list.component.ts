import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hd-profile-list]',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host{
        padding: 0;
        margin: 0;
        margin-top:20px;
        list-style: none;
    }
  `]
})
export class ProfileListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
