import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export declare class LoginFormComponent implements OnInit {
    private fb;
    title: string;
    login: EventEmitter<{}>;
    loginForm: any;
    logo: string;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onLogin(event: any): void;
    changePasswordType(input: any): void;
}
