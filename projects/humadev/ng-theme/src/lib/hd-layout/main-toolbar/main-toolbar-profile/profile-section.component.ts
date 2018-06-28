import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hd-profile-section]',
  template: `
    <span class="text">
        <ng-content></ng-content>
    </span>
  `,
  styles: [`
        :host{
            display: table;
            width: 100%;
            vertical-align: middle;
            margin: 20px 20px 10px 20px;
        }
        .text{
            color:#2a61ac;
            display: table-cell;
            margin: 0;
            vertical-align: middle;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;

        }
  `]
})
export class ProfileSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
