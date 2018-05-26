import { Injectable, ElementRef } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Injectable()
export class ContextMenuService {
  private contextMenu: OverlayRef[] = [];
  private refs: ElementRef[] = [];

  constructor() {}

  setContextMenuOverlay(overlay: OverlayRef) {
    this.contextMenu = this.contextMenu.concat(overlay);
  }

  getContextMenuOverlay(): OverlayRef[] {
    return this.contextMenu;
  }

  public closeAllContextMenus(): void {
    if (this.contextMenu) {
      this.contextMenu.forEach((overlay, index) => {
        overlay.detach();
        overlay.dispose();
      });
    }
    this.contextMenu = [];
  }

  setRef(el: ElementRef) {
    this.refs = this.refs.concat(el);
  }

  getRef(): ElementRef[] {
    return this.refs;
  }

  public destroyAllRef(): void {
    this.refs = [];
  }
}
