import { Component, OnInit, ViewEncapsulation, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'hd-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

    @Input() background: string;

    constructor(
        private _render: Renderer2,
        private _ref: ElementRef
    ) { }

    ngOnInit() {
        this._render.setStyle(this._ref.nativeElement, 'background-image', 'url(' + this.background + ')'); // coloring row with class
    }

}
