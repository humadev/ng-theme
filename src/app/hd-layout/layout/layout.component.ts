import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'hd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

      @Input() titleText:string = "Humadev Theme";
      @Input() titleImg:string;

      constructor(
      ){}

      ngOnInit(){
           
      }
}
