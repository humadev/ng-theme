import { Component } from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';

@Component({
  selector: 'hd-main-toolbar-left-menu',
  templateUrl: './main-toolbar-left-menu.component.html',
  styleUrls: ['./main-toolbar-left-menu.component.scss'],
  animations: [fadeUp()]
})
export class MainToolbarLeftMenuComponent {
  
  constructor() {}
}
