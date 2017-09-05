import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule,
      MdMenuModule,
      MdIconModule,
      MdGridListModule,
      MdSelectModule,
      MdProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MenuService } from '../services/menu.service';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../services/layout.service';

@NgModule({
  imports: [
      CommonModule,
      MdSidenavModule,
      MdToolbarModule,
      MdButtonModule,
      MdListModule,
      MdMenuModule,
      MdIconModule,
      MdGridListModule,
      MdProgressBarModule,
      MdSelectModule,
      RouterModule,
      FormsModule
  ],
  exports: [
      LayoutComponent,
      MainToolbarComponent,
      PageToolbarComponent,
      SidenavComponent,
      BreadcrumbComponent,
      StartPageComponent
  ],
  declarations: [LayoutComponent, BreadcrumbComponent, SidenavComponent, MainToolbarComponent, PageToolbarComponent, StartPageComponent],
  providers: [MenuService, LayoutService]
})
export class HdLayoutModule { }
