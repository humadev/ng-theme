import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'hd-modal-example',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ModalComponent>) {}

  ngOnInit() {
  }

}