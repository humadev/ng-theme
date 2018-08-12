import { TemplatePortalDirective, Portal } from '@angular/cdk/portal';
import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  Input
} from '@angular/core';
import { fadeUp } from '../../../animations/router.animation';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: '[hd-main-toolbar-profile]',
  templateUrl: './main-toolbar-profile.component.html',
  styleUrls: ['./main-toolbar-profile.component.scss'],
  animations: [fadeUp()]
})
export class MainToolbarProfileComponent implements OnInit {
  @Input()
  imgProfile: string;
  @Input()
  name: string;
  @Input()
  email: string;
  @ViewChild('profile')
  menu: CdkOverlayOrigin;
  @ViewChildren(TemplatePortalDirective)
  templatePortals: QueryList<Portal<any>>;
  imageProfileClass = {};

  constructor(public overlay: Overlay, private ls: LayoutService) {}

  ngOnInit() {
    this.imageProfileClass = {
      'background-image': `url(${this.imgProfile})`
    };
  }

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
        .withOffsetX(-265)
    });
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.templatePortals.first);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    this.ls.closeOverlay.subscribe(res => {
      if (res) {
        overlayRef.dispose();
      }
    });
  }
}
