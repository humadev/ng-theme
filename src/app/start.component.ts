import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hd-start',
  template: `
    <hd-main-toolbar titleImg="assets/logo.png" [showSidenavToggle]='false' theme='light'>
        <!-- BEGIN: Topbar -->
        <hd-main-toolbar-right-menu>
            <li hd-main-toolbar-notification>
                <mat-tab-group>
                    <mat-tab label="Alert" class="notification-tab">
                        <hd-timeline>
                            <hd-timeline-item badge="pending" time="just now">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="12 minute ago">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="1 hour ago">12 new users registered</hd-timeline-item>
                        </hd-timeline>
                    </mat-tab>
                    <mat-tab label="Event">
                        <hd-timeline>
                            <hd-timeline-item badge="pending" time="just now">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="12 minute ago">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="1 hour ago">12 new users registered</hd-timeline-item>
                        </hd-timeline>
                    </mat-tab>
                    <mat-tab label="Logs">
                        <hd-timeline>
                            <hd-timeline-item badge="pending" time="just now">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="12 minute ago">12 new users registered</hd-timeline-item>
                            <hd-timeline-item time="1 hour ago">12 new users registered</hd-timeline-item>
                        </hd-timeline>
                    </mat-tab>
                </mat-tab-group>
            </li>
            <li hd-main-toolbar-chat></li>
            <li hd-main-toolbar-profile>
                <ul hd-profile-list>
                    <li hd-profile-section>section</li>
                    <li hd-profile-item icon='icon flaticon-profile-1' badge='2'>My Profile</li>
                    <li hd-profile-item icon='icon flaticon-share'>Activity</li>
                    <li hd-profile-item icon='icon flaticon-chat-1'>Messages</li>
                    <li hd-profile-separator></li>
                    <li hd-profile-item icon='icon flaticon-info'>FAQ</li>
                    <li hd-profile-item icon='icon flaticon-lifebuoy'>Support</li>
                    <li hd-profile-separator></li>
                    <li hd-profile-button><a mat-raised-button color="primary">Logout</a></li>
                </ul>
            </li>
        </hd-main-toolbar-right-menu>
        <!-- END: Topbar -->
    </hd-main-toolbar>
    <hd-start-page
        copyright='&copy; 2017 humadev angular theme author'
        [menus]="startMenus"></hd-start-page>
  `,
  styles: []
})
export class StartComponent {

      startMenus = this.router.config;

      constructor(
            private router: Router
      ) {}
}
