import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'hd-main-toolbar',
  template: `
      <mat-toolbar class="hd-main-toolbar mat-elevation-z8" color="primary">
            <span class="hd-sidenav-toggle" *ngIf="showSidenavToggle" (click)="onSidenavToggle()"><mat-icon>menu</mat-icon></span>
            <img class="hd-title-bar" [src]="titleImg" *ngIf="titleImg; else titleTextEl">
            <ng-template #titleTextEl><span class="hd-title-bar">{{titleText}}</span></ng-template>
            <mat-select class="fill-space" (change)="onChange($event)" [(ngModel)]="active">
                <ng-template ngFor let-menu [ngForOf]="startMenus">
                    <mat-option *ngIf="menu.data.isMenu" [value]="menu.path">
                        {{ menu.data.title }}
                    </mat-option>
                </ng-template>
            </mat-select>
            <mat-menu #menu="matMenu" class="hd-profile-menu" yPosition="below" xPosition="before" [overlapTrigger]="false">
                  <button mat-menu-item (click)="onLogout()">
                        <mat-icon>dashboard</mat-icon>
                        <span>Menu 2</span>
                  </button>
            </mat-menu>
            <span class="hd-menu hd-right-menu" *ngIf="notification"><mat-icon>notifications_none</mat-icon></span>
            <button mat-button [matMenuTriggerFor]="menu" #profileMenu class="hd-menu hd-right-menu" *ngIf="profile">
                  <mat-icon>face</mat-icon> Admin
            </button>
            <mat-menu #menu="matMenu" class="hd-profile-menu" yPosition="below" xPosition="before" [overlapTrigger]="false">
                  <button mat-menu-item (click)="onLogout()">
                        <mat-icon>power_settings_new</mat-icon>
                        <span>Logout</span>
                  </button>
            </mat-menu>
      </mat-toolbar>
  `,
  styles: [`
      .hd-main-toolbar{
            position: fixed;
            width: 100%;
            z-index: 9;
      }
  `]
})
export class MainToolbarComponent implements OnInit {
      @Input() notification = false;
      @Input() notificationList: Array<any>;
      @Input() profile = true;
      @Input() showSidenavToggle = true;
      @Output() sidenavToggle = new EventEmitter();
      @Output() logout = new EventEmitter();
      @Input() titleText = 'Humadev Theme';
      @Input() titleImg: string;
      startMenus = this.menuService.startMenu;
      active;

      constructor(
            private menuService: MenuService
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
            this.menuService.navigate(e.value);
      }
}
