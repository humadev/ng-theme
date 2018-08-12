import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HdUploadModule, HdContextMenuModule } from '@humadev/ng-theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from './example2/example2.component';
import { TableComponent } from './table/table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatAutocompleteModule
} from '../../../node_modules/@angular/material';
import { CdkTableModule } from '../../../node_modules/@angular/cdk/table';

const appRoutes: Routes = [
  {
    path: '',
    component: Example2Component,
    children: [
      {
        path: 'dashboard',
        component: TableComponent,
        data: {
          name: 'Dashboard',
          groupAccess: {
            permissions: [0],
            groups: [0]
          },
          icon: 'dashboard',
          badge: '3'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    CdkTableModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    HdContextMenuModule,
    HdUploadModule,
    HttpClientModule
  ],
  declarations: [Example2Component, TableComponent]
})
export class Example2Module {}
