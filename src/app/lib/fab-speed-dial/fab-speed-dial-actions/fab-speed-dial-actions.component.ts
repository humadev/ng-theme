import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterContentInit,
    ContentChildren,
    QueryList,
     Inject,
      Renderer,
       forwardRef } from '@angular/core';
import { MatButton } from '@angular/material';
import { HdFabSpeedDialComponent } from '../fab-speed-dial.component';

const Z_INDEX_ITEM = 23;

@Component({
    selector: 'hd-fab-speed-dial-actions',
    template: `
        <ng-content select="[mat-mini-fab], [mat-mini-fab]"></ng-content>
    `
})
export class HdFabSpeedDialActionsComponent implements AfterContentInit {

    @ContentChildren(MatButton) _buttons: QueryList<MatButton>;

    constructor(
        @Inject(forwardRef(() => HdFabSpeedDialComponent)) private _parent: HdFabSpeedDialComponent,
        private renderer: Renderer) {
    }

    ngAfterContentInit(): void {
        this._buttons.changes.subscribe(() => {
            this.initButtonStates();
            this._parent.setActionsVisibility();
        });

        this.initButtonStates();
    }

    private initButtonStates() {
        this._buttons.toArray().forEach((button, i) => {
            this.renderer.setElementClass(button._getHostElement(), 'smd-fab-action-item', true);
            this.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
        })
    }

    show() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode === 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + (65 * i);
                    transform = 'scale(1)';
                } else {
                    transform = this.getTranslateFunction('0');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', '1');
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            })
        }
    }

    hide() {
        if (this._buttons) {
            this._buttons.toArray().forEach((button, i) => {
                let opacity = '1';
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode === 'scale') {
                    transitionDelay = 3 - (65 * i);
                    transform = 'scale(0)';
                    opacity = '0';
                } else {
                    transform = this.getTranslateFunction((55 * (i + 1) - (i * 5)) + 'px');
                }
                this.changeElementStyle(button._getHostElement(), 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(button._getHostElement(), 'opacity', opacity);
                this.changeElementStyle(button._getHostElement(), 'transform', transform);
            })
        }
    }

    private getTranslateFunction(value: string) {
        const dir = this._parent.direction;
        const translateFn = (dir === 'up' || dir === 'down') ? 'translateY' : 'translateX';
        const sign = (dir === 'down' || dir === 'right') ? '-' : '';
        return translateFn + '(' + sign + value + ')';
    }

    private changeElementStyle(elem: any, style: string, value: string) {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setElementStyle(elem, style, value);
    }
}
