import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenuDirective } from './context-menu.directive';
import {
      MatButtonModule,
      MatIconModule
} from '@angular/material';

@NgModule({
      imports: [ CommonModule, MatButtonModule, MatIconModule ],
      declarations: [ ContextMenuPanelComponent, ContextMenuDirective ],
      exports: [ ContextMenuPanelComponent, ContextMenuDirective ],
      entryComponents: [ContextMenuPanelComponent]
})
export class HdContextMenuModule {}
