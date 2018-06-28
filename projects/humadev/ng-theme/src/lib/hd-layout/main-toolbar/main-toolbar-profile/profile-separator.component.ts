import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hd-profile-separator]',
  template: `
  `,
  styles: [`
        :host{
            margin: 15px 0;
            margin-left: -20px;
            margin-right: -20px;
            border-bottom: 1px solid #f4f5f8;
            height: 0;
            overflow: hidden;
        }
  `]
})
export class ProfileSeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
