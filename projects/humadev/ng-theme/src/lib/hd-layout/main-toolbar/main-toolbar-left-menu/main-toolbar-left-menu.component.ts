import { MatDialog } from '@angular/material';
import { MenuService } from '../../../services/menu.service';
import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';
import { StartPageDialogComponent } from '../../start-page-dialog/start-page-dialog.component';

@Component({
  selector: 'hd-main-toolbar-left-menu',
  templateUrl: './main-toolbar-left-menu.component.html',
  styleUrls: ['./main-toolbar-left-menu.component.scss'],
  animations: [fadeUp()]
})
export class MainToolbarLeftMenuComponent {
  
  constructor() {}
}
