import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MainToolbarLeftMenuComponent } from './main-toolbar/main-toolbar-left-menu/main-toolbar-left-menu.component';
import { MainToolbarRightMenuComponent } from './main-toolbar/main-toolbar-right-menu/main-toolbar-right-menu.component';
import { MainToolbarMenuItemComponent } from './main-toolbar/main-toolbar-menu-item/main-toolbar-menu-item.component';
import { MainToolbarNotificationComponent } from './main-toolbar/main-toolbar-notification/main-toolbar-notification.component';
import { MainToolbarProfileComponent } from './main-toolbar/main-toolbar-profile/main-toolbar-profile.component';
import { MainToolbarChatComponent } from './main-toolbar/main-toolbar-chat/main-toolbar-chat.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { ProfileItemComponent } from './main-toolbar/main-toolbar-profile/profile-item.component';
import { ProfileSeparatorComponent } from './main-toolbar/main-toolbar-profile/profile-separator.component';
import { ProfileSectionComponent } from './main-toolbar/main-toolbar-profile/profile-section.component';
import { ProfileButtonComponent } from './main-toolbar/main-toolbar-profile/profile-button.component';
import { ProfileListComponent } from './main-toolbar/main-toolbar-profile/profile-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';
import { StartPageDialogComponent } from './start-page-dialog/start-page-dialog.component';
import { MainToolbarStartShortcutComponent } from './main-toolbar/main-toolbar-start-shortcut/main-toolbar-start-shortcut.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

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
    PortalModule,
    MatTabsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatBadgeModule
  ],
  exports: [
    LayoutComponent,
    MainToolbarComponent,
    PageToolbarComponent,
    SidenavComponent,
    BreadcrumbComponent,
    StartPageComponent,
    MainToolbarLeftMenuComponent,
    MainToolbarRightMenuComponent,
    MainToolbarMenuItemComponent,
    MainToolbarNotificationComponent,
    MainToolbarProfileComponent,
    MainToolbarChatComponent,
    ProfileItemComponent,
    ProfileSeparatorComponent,
    ProfileSectionComponent,
    ProfileButtonComponent,
    ProfileListComponent,
    TimelineComponent,
    TimelineItemComponent,
    StartPageDialogComponent,
    MainToolbarStartShortcutComponent
  ],
  declarations: [
    StartPageDialogComponent,
    LayoutComponent,
    BreadcrumbComponent,
    SidenavComponent,
    MainToolbarComponent,
    PageToolbarComponent,
    StartPageComponent,
    MainToolbarLeftMenuComponent,
    MainToolbarRightMenuComponent,
    MainToolbarMenuItemComponent,
    MainToolbarNotificationComponent,
    MainToolbarProfileComponent,
    MainToolbarChatComponent,
    SidenavItemComponent,
    ProfileItemComponent,
    ProfileSeparatorComponent,
    ProfileSectionComponent,
    ProfileButtonComponent,
    ProfileListComponent,
    TimelineComponent,
    TimelineItemComponent,
    MainToolbarStartShortcutComponent
  ],
  entryComponents: [StartPageDialogComponent],
  providers: [MenuService, LayoutService]
})
export class HdLayoutModule {}
