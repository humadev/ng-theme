import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hd-main-toolbar',
  template: `
      <md-toolbar class="hd-main-toolbar">
            <span class="hd-menu hd-left-menu" (click)="onSidenavToggle()"><md-icon>menu</md-icon></span>
            <span class="fill-space"></span>
            <span class="hd-menu hd-right-menu" *ngIf="notification"><md-icon>notifications_none</md-icon></span>
            <button md-button [mdMenuTriggerFor]="menu" #profileMenu class="hd-menu hd-right-menu" *ngIf="profile"><md-icon>face</md-icon> Admin</button>
            <md-menu #menu="mdMenu" class="hd-profile-menu">
                  <button md-menu-item (click)="logout()">
                        <md-icon>power_settings_new</md-icon>
                        <span>Logout</span>
                  </button>
            </md-menu>
      </md-toolbar>
  `
})
export class MainToolbarComponent{

      @Input() notification:boolean = false;
      @Input() notificationList:Array<any>;
      @Input() profile:boolean = true;
      @Output() sidenavToggle = new EventEmitter();

      onLogout: any;

      onSidenavToggle(){
            this.sidenavToggle.emit();
      }

      logout(){
            this.onLogout.emit();
      }

}
