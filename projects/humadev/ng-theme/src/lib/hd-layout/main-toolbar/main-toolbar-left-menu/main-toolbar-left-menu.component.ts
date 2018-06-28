import { MenuService } from './../../../services/menu.service';
import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';

@Component({
  selector: 'hd-main-toolbar-left-menu',
  templateUrl: './main-toolbar-left-menu.component.html',
  styleUrls: ['./main-toolbar-left-menu.component.scss'],
  animations: [fadeUp()]
})
export class MainToolbarLeftMenuComponent {
  @ViewChild('mainMenu') menu: CdkOverlayOrigin;
  @ViewChildren(TemplatePortalDirective)
  templatePortals: QueryList<Portal<any>>;
  startMenus = this.menuService.startMenu;

  constructor(public overlay: Overlay, private menuService: MenuService) {}

  clickMenu(e) {
    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'menu-overlay-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .connectedTo(
          this.menu.elementRef,
          { originX: 'start', originY: 'bottom' },
          { overlayX: 'start', overlayY: 'top' }
        )
    });
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.templatePortals.first);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }
}
