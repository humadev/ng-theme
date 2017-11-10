import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[hd-profile-item]',
  template: `
    <span class="link">
        <i [class]="icon"></i>
        <span class="title">
            <span class="wrap">
                <span class="text">
                    <ng-content></ng-content>
                </span>
                <span class="link-badge" *ngIf="badge">
                    <span class="badge badge-success">
                        {{badge}}
                    </span>
                </span>
            </span>
        </span>
    </span>
  `,
  styleUrls: ['profile-item.component.scss']
})
export class ProfileItemComponent implements OnInit {

    @Input() badge: number;
    @Input() icon: string;

    constructor() { }

    ngOnInit() {
    }

}
