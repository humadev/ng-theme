import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, OverlayOrigin } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'hd-main-toolbar-left-menu',
  templateUrl: './main-toolbar-left-menu.component.html',
  styleUrls: ['./main-toolbar-left-menu.component.scss']
})
export class MainToolbarLeftMenuComponent implements OnInit {

    @ViewChild('mainMenu') menu: OverlayOrigin;
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

    constructor(
        public overlay: Overlay
    ) { }

    ngOnInit() {
    }

    clickMenu(e) {
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'menu-overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().connectedTo(
                this.menu.elementRef,
                {originX: 'start', originY: 'bottom'},
                {overlayX: 'start', overlayY: 'top'}
            )
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(() => {
            overlayRef.dispose();
        });
  }

}