import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'hd-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['start-page.component.scss']
})
export class StartPageComponent implements OnInit {

    @Input() menus: any;
    @Input() copyright: string;

    constructor(
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.menus = this.menuService.startMenu;
    }
}
