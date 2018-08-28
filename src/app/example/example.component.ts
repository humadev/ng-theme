import { slideToUp, LayoutService } from '@humadev/ng-theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-example',
  template: `
        <hd-sidenav #sidenav titleImg="assets/logo.png">
            <hd-main-toolbar titleImg="assets/logo.png" class='mat-elevation-z4'>
              <!-- BEGIN: Topbar -->
              <hd-main-toolbar-right-menu>
                  <!--<li>
                      <button (click)="_ls.showNotification.next(true)">test</button>
                  </li> -->
                    <li hd-main-toolbar-start-shortcut></li>
                    <li hd-main-toolbar-notification>
                          <mat-tab-group>
                                <mat-tab label="Alert" class="notification-tab">
                                      <hd-timeline>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                      </hd-timeline>
                                </mat-tab>
                                <mat-tab label="Event">
                                      <hd-timeline>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                            <hd-timeline-item badge='pending' time="just now">12 new users registered</hd-timeline-item>
                                      </hd-timeline>
                                </mat-tab>
                                <mat-tab label="Logs">
                                      <hd-timeline>
                                            <div class="center middle">
                                                  All caught up!
                                                  <br>
                                                  No new logs.
                                            </div>
                                      </hd-timeline>
                                      </mat-tab>
                                </mat-tab-group>
                    </li>
                  <li hd-main-toolbar-chat></li>
                  <li hd-main-toolbar-profile imgProfile="../../assets/user.jpg">
                          <ul hd-profile-list>
                                <li hd-profile-item badge='2' icon="icon flaticon-profile-1">
                                      My Profile
                                </li>
                                <li hd-profile-item icon="icon flaticon-share">Activity</li>
                                <li hd-profile-item icon="icon flaticon-chat">Messages</li>
                                <li hd-profile-separator></li>
                                <li hd-profile-item icon="icon flaticon-info">FAQ</li>
                                <li hd-profile-item icon="icon flaticon-lifebuoy">Support</li>
                                <li hd-profile-separator></li>
                                <li hd-profile-button>
                                      <a mat-raised-button color='primary' class="close-on-click" [routerLink]="['/']">Logout</a>
                                </li>
                          </ul>
                  </li>
              </hd-main-toolbar-right-menu>
              <!-- END: Topbar -->
          </hd-main-toolbar>
          <div class='hd-page' cdkScrollable>
            <hd-page-toolbar #pagebar></hd-page-toolbar>
             <div class="hd-page-content">
                <router-outlet></router-outlet>
              </div>
          </div>
        </hd-sidenav>
  `
})
export class ExampleComponent implements OnInit {
  menu = [
    {
      path: '',
      component: ExampleComponent,
      data: {
        name: 'Example',
        groupAccess: {
          permissions: [0],
          groups: [0]
        },
        icon: 'dashboard',
        badge: '3'
      },
      children: [
        {
          path: 'dashboard',
          data: {
            name: 'Dashboard',
            groupAccess: {
              permissions: [0],
              groups: [1]
            },
            icon: 'dashboard',
            badge: '3'
          }
        },
        {
          path: 'datatable1',
          data: {
            name: 'Example 21',
            groupAccess: {
              permissions: [0],
              groups: [2]
            },
            icon: 'dashboard'
          },
          children: [
            {
              path: 'datatable',
              data: {
                name: 'Example 2.1',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard',
                badge: '3'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 2.2',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 2.3',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 2.4',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 2.5',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 2.6',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            }
          ]
        },
        {
          path: 'datatable2',
          data: {
            name: 'Example 3',
            groupAccess: {
              permissions: [0],
              groups: [0]
            },
            icon: 'dashboard'
          },
          children: [
            {
              path: 'datatable',
              data: {
                name: 'Example 3.1',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 3.2',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Example 3.3',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            },
            {
              path: 'datatable',
              data: {
                name: 'Data Table',
                groupAccess: {
                  permissions: [0],
                  groups: [0]
                },
                icon: 'dashboard'
              }
            }
          ]
        }
      ]
    }
  ];

  shakeAndBlink = false;

  constructor(public _ls: LayoutService) {}

  ngOnInit() {
    this._ls.topProgressBar.next(false);
  }
}
