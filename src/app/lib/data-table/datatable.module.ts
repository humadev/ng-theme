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
import { HdContextMenuModule } from "./../context-menu/hd-context-menu.module";

@NgModule({
  imports: [
      CommonModule,
      HdContextMenuModule
  ],
  providers: [
      ScrollbarHelper
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
      DatatableFooterDirective
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
  ]
})
export class HdDatatableModule { }
