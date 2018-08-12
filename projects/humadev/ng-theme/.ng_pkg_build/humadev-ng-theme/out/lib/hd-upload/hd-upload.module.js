/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileDirective } from './upload-file.directive';
import { UploadImageDirective } from './upload-image.directive';
import { UploadContainerComponent } from './upload-container/upload-container.component';
import { MatIconModule } from '@angular/material';
export class HdUploadModule {
}
HdUploadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    ReactiveFormsModule,
                    FormsModule
                ],
                exports: [UploadFileDirective, UploadImageDirective, UploadContainerComponent],
                declarations: [UploadFileDirective, UploadImageDirective, UploadContainerComponent]
            },] },
];
function HdUploadModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HdUploadModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HdUploadModule.ctorParameters;
}
//# sourceMappingURL=hd-upload.module.js.map