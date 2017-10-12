import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule,
      MatIconModule,
      MatGridListModule,
      MatSelectModule,
      MatProgressBarModule
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
import { OverlayContainer } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopMenuDirective } from 'app/lib/directives/pop-menu.directive';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
      CommonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatButtonModule,
      MatListModule,
      MatMenuModule,
      MatIconModule,
      MatGridListModule,
      MatProgressBarModule,
      MatSelectModule,
      RouterModule,
      FormsModule,
      OverlayModule,
      PortalModule
  ],
  exports: [
      LayoutComponent,
      MainToolbarComponent,
      PageToolbarComponent,
      SidenavComponent,
      BreadcrumbComponent,
      StartPageComponent,
      PopMenuDirective
  ],
declarations: [
      LayoutComponent,
      BreadcrumbComponent,
      SidenavComponent,
      MainToolbarComponent,
      PageToolbarComponent,
      StartPageComponent,
      PopMenuDirective
],
  providers: [MenuService, LayoutService, OverlayContainer]
})
export class HdLayoutModule { }
