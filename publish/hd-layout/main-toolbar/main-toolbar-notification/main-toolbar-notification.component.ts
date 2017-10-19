import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: '[hd-main-toolbar-notification]',
  templateUrl: './main-toolbar-notification.component.html',
  styleUrls: ['./main-toolbar-notification.component.scss']
})
export class MainToolbarNotificationComponent {

    @ViewChild('notification') menu: OverlayOrigin;
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

    constructor(
        public overlay: Overlay
    ) { }

    clickMenu(e) {
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(
                this.menu.elementRef,
                {originX: 'center', originY: 'bottom'},
                {overlayX: 'center', overlayY: 'top'}
            ).withOffsetX(-30)
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
  }

}
