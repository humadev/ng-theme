import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { OverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2, Input } from '@angular/core';
import { fadeUp, ringing } from '../../../animations/router.animation';

@Component({
  selector: '[hd-main-toolbar-notification]',
  templateUrl: './main-toolbar-notification.component.html',
  styleUrls: ['./main-toolbar-notification.component.scss'],
  animations: [fadeUp(), ringing()]
})
export class MainToolbarNotificationComponent {

    @ViewChild('notification') menu: OverlayOrigin;
    @ViewChild('shake') shake: ElementRef;
    @Input() blink = false;
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

    constructor(
        public overlay: Overlay,
        private _render: Renderer2
    ) { }

    @Input()
    set shakeAndBlink(set: boolean) {
        if (set) {
            this.blink = true;
            this._render.addClass(this.shake.nativeElement, 'm-animate-shake');
        }else {
            this.blink = false;
            this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
        }
    }

    clickMenu(e) {
        this.blink = false;
        this._render.removeClass(this.shake.nativeElement, 'm-animate-shake');
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
