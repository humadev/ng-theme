import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'hd-start-page',
  templateUrl: './start-page.component.html',
  styles:[`
    :host {
      background-color: grey;
    }
  `],
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit{

      @Input() menus:any;
      img = "https://sia.undiknas.ac.id/assets/icons/admission.png";

      constructor(
            private menuService:MenuService
      ) {}

      ngOnInit(){
             this.menus = this.menuService.startMenu;
      }
}
