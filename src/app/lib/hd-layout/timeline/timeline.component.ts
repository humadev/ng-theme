import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hd-timeline',
    template: `
        <div class="items">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
