import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";

@Component({
  selector: 'hd-main-toolbar',
  template: `
      <md-toolbar class="hd-main-toolbar mat-elevation-z4">
            <span class="hd-menu hd-left-menu" *ngIf="showSidenavToggle" (click)="onSidenavToggle()"><md-icon>menu</md-icon></span>
            <md-select class="fill-space" (change)="onChange($event)" [(ngModel)]="active">
                  <md-option *ngFor="let menu of startMenus" [value]="menu.path">
                  {{ menu.data.title }}
                  </md-option>
            </md-select>
            <md-menu #menu="mdMenu" class="hd-profile-menu" yPosition="below" xPosition="before" [overlapTrigger]="false">
                  <button md-menu-item (click)="onLogout()">
                        <md-icon>dashboard</md-icon>
                        <span>Menu 2</span>
                  </button>
            </md-menu>
            <span class="hd-menu hd-right-menu" *ngIf="notification"><md-icon>notifications_none</md-icon></span>
            <button md-button [mdMenuTriggerFor]="menu" #profileMenu class="hd-menu hd-right-menu" *ngIf="profile">
                  <md-icon>face</md-icon> Admin
            </button>
            <md-menu #menu="mdMenu" class="hd-profile-menu" yPosition="below" xPosition="before" [overlapTrigger]="false">
                  <button md-menu-item (click)="onLogout()">
                        <md-icon>power_settings_new</md-icon>
                        <span>Logout</span>
                  </button>
            </md-menu>
      </md-toolbar>
  `
})
export class MainToolbarComponent implements OnInit {
      @Input() notification = false;
      @Input() notificationList: Array<any>;
      @Input() profile = true;
      @Input() showSidenavToggle = true;
      @Output() sidenavToggle = new EventEmitter();
      @Output() logout = new EventEmitter();
      startMenus = this.menuService.startMenu;
      active;

      constructor(
            private menuService:MenuService
      ) {}

      ngOnInit(){
            this.menuService.moduleActive.subscribe(res => {
                  this.active = res;
            });
      }

      onSidenavToggle() {
            this.sidenavToggle.emit();
      }

      onLogout(){
            this.logout.emit();
      }

      onChange(e){
            console.log(e);
            this.menuService.navigate(e.value);
      }
}
