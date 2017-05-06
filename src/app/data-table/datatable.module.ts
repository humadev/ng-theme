import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'rxjs/add/observable/fromEvent';
import {
      MdButtonModule,
      MdIconModule
} from '@angular/material';
import {
  DatatableComponent,
  DataTableColumnDirective,
  DataTableHeaderComponent,
  DataTableBodyComponent,
  DataTableFooterComponent,
  DataTableHeaderCellComponent,
  DataTablePagerComponent,
  DataTableBodyRowComponent,
  DataTableRowWrapperComponent,
  ProgressBarComponent,
  DataTableBodyCellComponent,
  DatatableRowDetailDirective,
  ScrollerComponent,
  DataTableSelectionComponent,
  DataTableColumnHeaderDirective,
  DataTableColumnCellDirective,
  DatatableRowDetailTemplateDirective,
  DataTableFooterTemplateDirective,
  DatatableFooterDirective
} from './components';

import {
  VisibilityDirective,
  LongPressDirective,
  ResizeableDirective,
  OrderableDirective,
  DraggableDirective
} from './directives';

import { ScrollbarHelper } from './services';
import { ContextMenuPanelComponent } from "./../context-menu/context-menu-panel.component";
import { ContextMenuDirective } from "./../context-menu/context-menu.directive";
import { ComponentInjectionService } from "./../services/component-injection.service";

@NgModule({
  imports: [
      CommonModule,
      MdButtonModule,
      MdIconModule
  ],
  providers: [
      ScrollbarHelper,
      ComponentInjectionService
  ],
  declarations: [
      DataTableFooterTemplateDirective,
      VisibilityDirective,
      DraggableDirective,
      ResizeableDirective,
      OrderableDirective,
      LongPressDirective,
      ScrollerComponent,
      DatatableComponent,
      DataTableColumnDirective,
      DataTableHeaderComponent,
      DataTableHeaderCellComponent,
      DataTableBodyComponent,
      DataTableFooterComponent,
      DataTablePagerComponent,
      ProgressBarComponent,
      DataTableBodyRowComponent,
      DataTableRowWrapperComponent,
      DatatableRowDetailDirective,
      DatatableRowDetailTemplateDirective,
      DataTableBodyCellComponent,
      DataTableSelectionComponent,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective,
      DatatableFooterDirective,
      ContextMenuDirective,
      ContextMenuPanelComponent
  ],
  exports: [
      DatatableComponent,
      DatatableRowDetailDirective,
      DatatableRowDetailTemplateDirective,
      DataTableColumnDirective,
      DataTableColumnHeaderDirective,
      DataTableColumnCellDirective,
      DataTableFooterTemplateDirective,
      DatatableFooterDirective
  ],
  entryComponents:[ContextMenuPanelComponent],
})
export class HdDatatableModule { }
