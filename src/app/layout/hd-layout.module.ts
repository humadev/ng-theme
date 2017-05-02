import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
      CommonModule,
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule,
      RouterModule
  ],
  exports: [
      LayoutComponent
  ],
  declarations: [LayoutComponent, BreadcrumbComponent]
})
export class HdLayoutModule { }
