/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { LoginFormComponent } from './login-form/login-form.component';
export class HdLoginModule {
}
HdLoginModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
function HdLoginModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HdLoginModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HdLoginModule.ctorParameters;
}
//# sourceMappingURL=hd-login.module.js.map