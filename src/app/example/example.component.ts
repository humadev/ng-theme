import { slideToUp } from './../lib/animations/router.animation';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from "./../lib/services/layout.service";

@Component({
  selector: 'hd-example',
  template: `
        <hd-main-toolbar titleImg="assets/logo.png">
            <!-- BEGIN: Topbar -->
            <hd-main-toolbar-left-menu></hd-main-toolbar-left-menu>
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
                        </mat-tab>
                        <mat-tab label="Logs">
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
        <hd-sidenav #sidenav lazyLoadModule="true">
                <hd-page-toolbar #pagebar></hd-page-toolbar>
                <div class='hd-page'>
                    <router-outlet></router-outlet>
                </div>
        </hd-sidenav>
  `
})
export class ExampleComponent implements OnInit {

  constructor(private _ls: LayoutService) {

  }

  ngOnInit() {

  }

}
