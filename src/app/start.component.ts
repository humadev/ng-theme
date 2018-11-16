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
        <li hd-main-toolbar-notification>
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
          imgProfile="./assets/user.jpg"
          name="Humadev"
          email="huma.elektro@gmail.com"
        >
          <ul hd-profile-list>
            <li
              hd-profile-item
              icon="icon flaticon-profile-1"
              (click)="test($event)"
            >
              Profil Anda
            </li>
            <li hd-profile-item icon="icon flaticon-key" (click)="test($event)">
              Ganti Password
            </li>
            <li hd-profile-separator></li>
            <li hd-profile-button>
              <a mat-raised-button color="primary" (click)="test($event)"
                >Logout</a
              >
            </li>
          </ul>
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
