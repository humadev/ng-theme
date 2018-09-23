/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class LoginFormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.title = 'Title';
        this.login = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLogin(event) {
        if (this.loginForm.valid) {
            this.login.emit(this.loginForm.value);
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    changePasswordType(input) {
        if (input.type === 'password') {
            input.type = 'text';
        }
        else {
            input.type = 'password';
        }
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'hd-login-form',
                template: `<div>
    <img [src]="logo">
</div>
<h3>Sign in to admin</h3>
<form [formGroup]='loginForm' (ngSubmit)="onLogin($event)">
    <mat-form-field>
        <input matInput formControlName="email" placeholder="Email" autofill="off">
        <mat-hint align="start" class="error" *ngIf="loginForm.controls.email.invalid && loginForm.controls.email.touched">
            <span *ngIf="loginForm.controls.email.errors.required">
                Email harus diisi
            </span>
            <span *ngIf="loginForm.controls.email.errors.email">
                Format email salah
            </span>
        </mat-hint>
    </mat-form-field>
    <mat-form-field>
        <input matInput formControlName="password" type="password" placeholder="Password" #pass>
        <button type="button" mat-icon-button matSuffix (click)="changePasswordType(pass)">
            <mat-icon>visibility</mat-icon>
        </button>
        <mat-hint align="start" class="error" *ngIf="loginForm.controls.password.invalid && loginForm.controls.password.touched">
            <span *ngIf="loginForm.controls.password.errors.required">
                Password harus diisi
            </span>
            <span *ngIf="loginForm.controls.password.errors.minlength">
                Password minimal {{loginForm.controls.password.errors.minlength.requiredLength}} karakter
            </span>
            <span *ngIf="loginForm.controls.password.errors.maxlength">
                Password maximal {{loginForm.controls.password.errors.maxlength.requiredLength}} karakter
            </span>
        </mat-hint>
    </mat-form-field>
    <button mat-raised-button color="primary" class='mat-elevation-z5'>Sign In</button>
</form>`,
                styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;vertical-align:middle;text-align:center;width:100%;padding-top:20%;font-family:Poppins;color:#212529}:host img{max-width:250px;margin-bottom:50px}:host h3{display:block;font-size:1.4rem;margin-bottom:50px;font-weight:500;font-family:Poppins;color:#212529}:host form{text-align:center}:host form mat-form-field{max-width:60%;margin:20px auto;display:block}`]
            },] },
];
/** @nocollapse */
LoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
LoginFormComponent.propDecorators = {
    title: [{ type: Input }],
    login: [{ type: Output }],
    logo: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoginFormComponent.prototype.title;
    /** @type {?} */
    LoginFormComponent.prototype.login;
    /** @type {?} */
    LoginFormComponent.prototype.loginForm;
    /** @type {?} */
    LoginFormComponent.prototype.logo;
    /** @type {?} */
    LoginFormComponent.prototype.fb;
}
//# sourceMappingURL=login-form.component.js.map