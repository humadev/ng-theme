import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { intersection } from 'lodash-es';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hd-start-page-dialog',
  templateUrl: './start-page-dialog.component.html',
  styleUrls: ['start-page-dialog.component.scss']
})
export class StartPageDialogComponent implements OnInit {
  @Input()
  menus: any;
  @Input()
  fromRouter = true;
  @Input()
  copyright: string;

  constructor(
    private menuService: MenuService,
    private dialog: MatDialogRef<StartPageDialogComponent>
  ) {}

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

  onClick(e) {
    this.dialog.close();
  }
}
