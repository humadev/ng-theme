import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'hd-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ModalExampleComponent>) {}

  ngOnInit() {
  }

}
