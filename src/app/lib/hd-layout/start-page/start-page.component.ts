import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'hd-start-page',
  templateUrl: './start-page.component.html',
  styles:[`
    :host {
      background-color: grey;
    }
  `],
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

      @Input() menus = [];
      img = "https://sia.undiknas.ac.id/assets/icons/admission.png";

  ngOnInit() {
  }

  

}
