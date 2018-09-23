/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TimelineItemComponent {
}
TimelineItemComponent.decorators = [
    { type: Component, args: [{
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
                styles: [`:host{position:relative;display:table;table-layout:fixed;width:100%;padding:6px 0;margin:5px 0}:host>.badge{text-align:left;vertical-align:middle;display:table-cell;position:relative;width:20px}:host .badge::before{background-color:#ebedf2;position:absolute;display:block;content:'';width:7px;height:7px;left:0;top:50%;margin-top:-3.5px;border-radius:100%}:host .text{color:#575962;display:table-cell;text-align:left;vertical-align:middle;width:100%;padding:0 5px 0 0;font-size:1rem;font-weight:300;font-family:Poppins;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased}:host .text .badge{letter-spacing:.6px;padding:1px 10px;border-radius:10px;background:#eaeaea;font-size:.8rem;line-height:20px;min-height:20px;min-width:20px;width:auto;vertical-align:middle;text-align:center;display:inline-block}:host .text .badge.badge-success{background-color:#34bfa3;color:#fff}:host .time{color:#7b7e8a;display:table-cell;text-align:right;vertical-align:middle;width:80px;padding:0 7px 0 0;font-size:.85rem}:host:first-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;top:0;bottom:0;left:3px}:host:last-child:before{background-color:#fff;position:absolute;display:block;content:'';width:1px;height:50%;bottom:0;left:3px}`]
            },] },
];
TimelineItemComponent.propDecorators = {
    badge: [{ type: Input }],
    time: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TimelineItemComponent.prototype.badge;
    /** @type {?} */
    TimelineItemComponent.prototype.time;
}
//# sourceMappingURL=timeline-item.component.js.map