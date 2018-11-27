import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '@humadev/ng-theme';

@Component({
  selector: 'hd-start',
  template: `
    <hd-main-toolbar
      titleImg="assets/logo.png"
      [showSidenavToggle]="false"
      theme="light"
      class="mat-elevation-z4"
    >
      <!-- BEGIN: Topbar -->
      <hd-main-toolbar-right-menu>
        <li hd-main-toolbar-notification #notif>
          <div class="notification-header"><span>0 Notification</span></div>
          <mat-list>
            <mat-list-item>12 new users registered</mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>12 new users registered</mat-list-item>
            <mat-list-item>12 new users registered</mat-list-item>
          </mat-list>
        </li>
        <li hd-main-toolbar-chat></li>
        <li
          hd-main-toolbar-profile
          imgProfile=""
          name="Humadev"
          email="huma.elektro@gmail.com"
        >
          <mat-list>
            <mat-list-item>
              <mat-icon mat-list-icon>people</mat-icon>
              <p mat-line>Profil anda</p>
            </mat-list-item>
            <mat-list-item>
              <mat-icon mat-list-icon>vpn_key</mat-icon>
              <p mat-line>Ganti Password</p>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon mat-list-icon>lock</mat-icon>
              <p mat-line>Logout</p>
            </mat-list-item>
          </mat-list>
        </li>
      </hd-main-toolbar-right-menu>
      <!-- END: Topbar -->
    </hd-main-toolbar>
    <hd-start-page
      copyright="&copy; 2017 humadev angular theme author"
      [menus]="startMenus"
    ></hd-start-page>
  `,
  styles: [
    `
      .notification-header {
        padding: 5px 10px;
        border-bottom: thin solid rgba(0, 0, 0, 0.2);
      }
    `
  ]
})
export class StartComponent implements OnInit {
  startMenus = this.router.config;

  constructor(private router: Router, private _ls: LayoutService) {}

  ngOnInit() {
    this._ls.topProgressBar.next(false);
  }

  test(e) {}
}
