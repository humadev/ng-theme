import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
    exports: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent],
  declarations: [LoginComponent, LeftSideComponent, RightSideComponent, LoginFormComponent]
})
export class HdLoginModule {}
