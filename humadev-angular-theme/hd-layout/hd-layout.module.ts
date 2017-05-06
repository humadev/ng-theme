import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule,
      MdMenuModule,
      MdIconModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';

@NgModule({
  imports: [
      CommonModule,
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule,
      MdMenuModule,
      MdIconModule,
      RouterModule
  ],
  exports: [
      LayoutComponent
  ],
  declarations: [LayoutComponent, BreadcrumbComponent, SidenavComponent, MainToolbarComponent, PageToolbarComponent]
})
export class HdLayoutModule { }
