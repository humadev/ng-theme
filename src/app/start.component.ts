import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'hd-start',
  template: `
    <hd-main-toolbar [showSidenavToggle]="false"></hd-main-toolbar>
      <hd-start-page [menus]="startMenus"></hd-start-page>
  `,
  styles: []
})
export class StartComponent {

      menu:Array<any> = [
            {icon:'dashboard', path:'dashboard', name:'Dashboard', groupAccess:'0', children:[
                  {path:'dashboard1',name:'Dashboard 1', groupAccess:'0'},
                  {path:'#',name:'Dashboard 2', groupAccess:'0'},
                  {path:'#',name:'Dashboard 3', groupAccess:'0'}
            ]
      },
            {icon:'laptop', path:'#',name:'Layouts', groupAccess:'0'},
            {icon:'assignment', path:'#',name:'Forms', groupAccess:'0'},
            {icon:'extension', path:'#',name:'Components', groupAccess:'0'},
            {icon:'build', path:'#',name:'Tools', groupAccess:'0'},
      ];

      // startMenus = [
      //       {title: "Example", icons:'https://sia.undiknas.ac.id/assets/icons/kalender.png', path:"/example"}
      // ];
      startMenus = this.router.config;

      constructor(
            private router: Router
      ) {}
}
