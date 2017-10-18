import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: '[hd-main-toolbar-profile]',
  templateUrl: './main-toolbar-profile.component.html',
  styleUrls: ['./main-toolbar-profile.component.scss']
})
export class MainToolbarProfileComponent{

    @ViewChild('profile') menu: OverlayOrigin;
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
                {originX: 'start', originY: 'bottom'},
                {overlayX: 'start', overlayY: 'top'}
            ).withOffsetX(-320)
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
  }

}
