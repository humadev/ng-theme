import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    ReactiveFormsModule
  ],
  exports:[
        LoginComponent
  ],
  declarations: [LoginComponent]
})
export class HdLoginModule {}
