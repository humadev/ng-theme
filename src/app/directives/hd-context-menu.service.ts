import { Injectable, Injector, TemplateRef, ViewChild } from '@angular/core';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { Overlay, ComponentType, OverlayState, ComponentPortal, OverlayOrigin } from '@angular/material';
import { contextmenu } from './context-menu';
import { Subject } from "rxjs/Subject";

@Injectable()
export class HdContextMenuService {
            nextPosition: number = 0;
      
      constructor(private _overlay: Overlay, private _injector: Injector){

      }

      test(vc, oo){
            let strategy = this._overlay.position()
                  .connectedTo(
                        oo.elementRef,
                        {originX: 'start', originY: 'bottom'},
                        {overlayX: 'start', overlayY: 'top'} );

            let config = new OverlayState();
            config.positionStrategy = strategy;

            let overlayRef = this._overlay.create(config);
            overlayRef.attach(new ComponentPortal(ContextMenuPanelComponent, vc));
      }

}
