import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
        LoginComponent
  ],
  declarations: [LoginComponent]
})
export class HdLoginModule { }
