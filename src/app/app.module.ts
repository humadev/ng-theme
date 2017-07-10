import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
      MdCardModule,
      MdButtonModule,
      MdDialogModule,
      MdInputModule,
      MdMenuModule,
      MdGridListModule,
      MdCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HdLoginModule } from "app/lib/login/hd-login.module";
import { HdLayoutModule } from "app/lib/hd-layout/hd-layout.module";
//import { HdContextMenuModule } from "./context-menu/hd-context-menu.module";
import { HdDatatableModule } from "app/lib/data-table/datatable.module";
// import { DashboardExampleComponent } from './docs/dashboard-example/dashboard-example.component';
// import { ModalExampleComponent } from './docs/modal-example/modal-example.component';

const appRoutes: Routes = [
      { 
            path: 'dashboard1',
            component: AppComponent, 
            data:{
                  name:'Dashboard 1', 
                  groupAccess:0
            }
      }];

@NgModule({
  declarations: [
    AppComponent,
//     DashboardExampleComponent,
//     ModalExampleComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      HdLayoutModule,
      HdLoginModule,
      MdCardModule,
      MdButtonModule,
      MdGridListModule,
      BrowserModule,
      BrowserAnimationsModule,
      HdDatatableModule,
      MdDialogModule,
      MdInputModule,
      MdMenuModule,
      MdCheckboxModule,
      ReactiveFormsModule,
      FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
//   entryComponents:[ModalExampleComponent]
})
export class AppModule { }
