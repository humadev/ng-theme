/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenuDirective } from './context-menu.directive';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ContextMenuService } from './context-menu.service';
export class HdContextMenuModule {
}
HdContextMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatButtonModule, MatIconModule],
                declarations: [ContextMenuPanelComponent, ContextMenuDirective],
                exports: [ContextMenuPanelComponent, ContextMenuDirective],
                providers: [ContextMenuService],
                entryComponents: [ContextMenuPanelComponent]
            },] },
];
//# sourceMappingURL=hd-context-menu.module.js.map