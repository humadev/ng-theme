import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'hd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      @Input() title:string = "Title";
      @Output() login = new EventEmitter();
      loginForm;
      

  constructor(
        private fb:FormBuilder
  ){}

  ngOnInit(){
      this.loginForm = this.fb.group({
            email:['',[Validators.required, Validators.email]],
            password:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      });
  }

  onLogin(event){
        if(this.loginForm.valid){
            this.login.emit(this.loginForm.value);
        }
  }

}
