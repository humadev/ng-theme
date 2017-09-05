import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuPanelComponent } from './context-menu-panel.component';
import { ContextMenuDirective } from "./context-menu.directive";
import {
      MdButtonModule,
      MdIconModule
} from '@angular/material';
import { ComponentInjectionService } from "./../services/component-injection.service";

@NgModule({
      imports: [ CommonModule, MdButtonModule, MdIconModule ],
      declarations: [ ContextMenuPanelComponent, ContextMenuDirective ],
      exports:[ ContextMenuPanelComponent, ContextMenuDirective ],
      providers:[ComponentInjectionService],
      entryComponents:[ContextMenuPanelComponent]
})
export class HdContextMenuModule {}