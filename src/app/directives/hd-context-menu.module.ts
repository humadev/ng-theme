import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenuDirective } from "./context-menu.directive";
import {
      MdButtonModule,
      MdIconModule
} from '@angular/material';
import { HdContextMenuService } from "app/directives/hd-context-menu.service";

@NgModule({
      imports: [ CommonModule, MdButtonModule, MdIconModule ],
      declarations: [ ContextMenuPanelComponent, ContextMenuDirective ],
      exports:[ ContextMenuPanelComponent, ContextMenuDirective ],
      providers:[HdContextMenuService],
      entryComponents:[ContextMenuPanelComponent]
})
export class ContextMenuModule {}