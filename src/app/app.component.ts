import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      @ViewChild('printout') canvas:any;
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

      image;

      constructor(private el:ElementRef){}

      doLogin(event){
            console.log(event);
      }

      print(){
            html2canvas(document.getElementById("test"), {
                  onrendered: function(canvas) {
                        let img = canvas.toDataURL("image/png");
                        let newtab = window.open(img);
                        newtab.print();
                  }
            });
      }
}