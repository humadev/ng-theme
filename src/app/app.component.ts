import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}