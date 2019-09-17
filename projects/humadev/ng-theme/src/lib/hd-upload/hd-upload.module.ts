import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileDirective } from './upload-file.directive';
import { UploadImageDirective } from './upload-image.directive';
import { UploadContainerComponent } from './upload-container/upload-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [UploadFileDirective, UploadImageDirective, UploadContainerComponent],
    declarations: [UploadFileDirective, UploadImageDirective, UploadContainerComponent]
})
export class HdUploadModule { }
