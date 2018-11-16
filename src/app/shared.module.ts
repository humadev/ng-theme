import { HdContextMenuModule, HdLayoutModule } from '@humadev/ng-theme';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatProgressBarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    FlexLayoutModule,
    HdLayoutModule,
    MatProgressBarModule,
    HdContextMenuModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    FlexLayoutModule,
    HdLayoutModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule
  ]
})
export class SharedModule {}
