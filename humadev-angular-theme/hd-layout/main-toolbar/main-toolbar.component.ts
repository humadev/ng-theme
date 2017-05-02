import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hd-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {

      @Input() notification:boolean = false;
      @Input() notificationList:Array<any>;
      @Input() profile:boolean = true;
      @Output() sidenavToggle = new EventEmitter();

      constructor() { }

      ngOnInit() {
      }

      onSidenavToggle(){
            this.sidenavToggle.emit();
      }

}
