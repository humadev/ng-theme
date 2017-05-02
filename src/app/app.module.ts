import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
      MdCardModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HdLayoutModule } from "app/layout/hd-layout.module";
import { HdLoginModule } from "app/login/hd-login.module";
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';

const appRoutes: Routes = [
      { 
            path: 'dashboard', 
            data:{
                  icon:'dashboard', 
                  name:'Dashboard',
                  groupAccess:0,
            },
            children: [{
                  path: 'dashboard1',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'Dashboard 1', 
                        groupAccess:0
                  }
            },{
                  path: 'dashboard2',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'Dashboard 2', 
                        groupAccess:0
                  }
            },{
                  path: 'dashboard3',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'Dashboard 3', 
                        groupAccess:0
                  }
            }]
      },{ 
            path: 'layout', 
            data:{
                  icon:'laptop', 
                  name:'layout',
                  groupAccess:0,
            },
            children: [{
                  path: 'layout1',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'layout 1', 
                        groupAccess:0
                  }
            },{
                  path: 'layout2',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'layout 2', 
                        groupAccess:0
                  }
            },{
                  path: 'layout3',
                  component: DashboardExampleComponent, 
                  data:{
                        name:'layout 3', 
                        groupAccess:0
                  }
            }]
      }];

@NgModule({
  declarations: [
    AppComponent,
    DashboardExampleComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      HdLayoutModule,
      HdLoginModule,
      MdCardModule,
      BrowserModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
