import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
      MdCardModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HdLayout1Module } from "app/hd-layout-1/hd-layout-1.module";
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';

const appRoutes: Routes = [
      { path: 'dashboard', children: [
            { path: 'dashboard1', component: DashboardExampleComponent}
      ]},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardExampleComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      HdLayout1Module,
      MdCardModule,
      BrowserModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
