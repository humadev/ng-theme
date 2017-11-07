import { HdContextMenuModule } from './../../publish/context-menu/hd-context-menu.module';
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
      MatIconModule
} from '@angular/material';
import { HdLayoutModule } from './lib/hd-layout/hd-layout.module';
import {FabSpeedDialModule} from './lib/fab-speed-dial/fab-speed-dial.module';


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
            FabSpeedDialModule,
            MatProgressBarModule,
            HdContextMenuModule,
            MatIconModule
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
            FabSpeedDialModule,
            MatProgressBarModule,
            MatIconModule
      ]
})
export class SharedModule { }
