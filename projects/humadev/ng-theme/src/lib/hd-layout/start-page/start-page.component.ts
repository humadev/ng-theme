import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { intersection } from 'lodash-es';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hd-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['start-page.component.scss']
})
export class StartPageComponent implements OnInit {

    @Input() menus: any;
    @Input() fromRouter = true;
    @Input() copyright: string;

    constructor(
        private menuService: MenuService
    ) { }

    ngOnInit() {
        if (this.fromRouter) {
            this.menus = this.menuService.startMenu;
        }
    }

    checkGroupAccess(menu, asal = '') {
        if (
            menu &&
            menu.data &&
            menu.data.groupAccess.permissions &&
            menu.data.groupAccess.groups
        ) {
            const allowed =
                intersection(
                    menu.data.groupAccess.permissions,
                    menu.data.groupAccess.groups
                ).length > 0
                    ? true
                    : false;
            if (allowed) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

}
