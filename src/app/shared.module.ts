import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
      MdCardModule,
      MdButtonModule,
      MdDialogModule,
      MdInputModule,
      MdMenuModule,
      MdGridListModule,
      MdCheckboxModule,
      MdSelectModule
} from '@angular/material';
import { HdLayoutModule } from "./lib/hd-layout/hd-layout.module";

@NgModule({
      imports: [
            MdCardModule,
            MdButtonModule,
            MdGridListModule,
            MdDialogModule,
            MdInputModule,
            MdSelectModule,
            MdMenuModule,
            MdCheckboxModule,
            FlexLayoutModule,
            HdLayoutModule
      ],
      exports: [
            MdCardModule,
            MdButtonModule,
            MdGridListModule,
            MdDialogModule,
            MdInputModule,
            MdSelectModule,
            MdMenuModule,
            MdCheckboxModule,
            FlexLayoutModule,
            HdLayoutModule
      ]
})
export class SharedModule { }
