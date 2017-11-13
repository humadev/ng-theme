import { Component, OnInit, ViewEncapsulation, HostBinding, Input, Inject, forwardRef, HostListener } from '@angular/core';
import { HdFabSpeedDialComponent } from '../fab-speed-dial.component';

@Component({
    selector: 'hd-fab-speed-dial-trigger',
    template: `
        <ng-content select="[md-fab], [mat-fab]"></ng-content>
    `
})
export class HdFabSpeedDialTriggerComponent {

    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    @HostBinding('class.smd-spin')
    @Input() spin = false;

    constructor( @Inject(forwardRef(() => HdFabSpeedDialComponent)) private _parent: HdFabSpeedDialComponent) {
    }

    @HostListener('click', ['$event'])
    _onClick(event: any) {
        if (!this._parent.fixed) {
            this._parent.toggle();
            event.stopPropagation();
        }
    }

}
