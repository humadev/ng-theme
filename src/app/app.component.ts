import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hd-login>
        <hd-left-side>
            <hd-login-form logo="./assets/logo.png"></hd-login-form>
        </hd-left-side>
        <hd-right-side background="./assets/bg-login.jpg"></hd-right-side>
    </hd-login>
  `,
  styles: [`
      .test{
            display:block;
            background: grey;
            height:100%;
            top:0;
      }
  `]
})

export class AppComponent {
}
