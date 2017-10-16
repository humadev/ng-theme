import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[hd-main-toolbar-notification]',
  templateUrl: './main-toolbar-notification.component.html',
  styleUrls: ['./main-toolbar-notification.component.scss'],
  styles: [`
    :host{
        padding: 0 12px;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }
  `]
})
export class MainToolbarNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
