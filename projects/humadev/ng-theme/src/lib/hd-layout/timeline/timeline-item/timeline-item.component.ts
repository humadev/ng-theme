import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hd-timeline-item',
    template: `
        <span class="badge"></span>
        <span class="text">
            <ng-content></ng-content>
            <span *ngIf="badge" class="badge badge-success">{{badge}}</span>
        </span>
        <span class="time" *ngIf="time">
            {{time}}
        </span>
    `,
    styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

    @Input() badge: string;
    @Input() time: string;

}
