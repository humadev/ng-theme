import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--<div class="test">
            <hd-login class="mat-elevation-z8" title="test"></hd-login>
      </div>-->
      <router-outlet></router-outlet>
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

export class AppComponent{
}