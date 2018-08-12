import { LayoutService } from '../../../services/layout.service';
import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

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
  @Input()
  badge: number;
  @Input()
  icon: string;

  constructor(
    private render: Renderer2,
    private el: ElementRef,
    private ls: LayoutService
  ) {}

  ngOnInit() {
    if (this.el.nativeElement.querySelector('.close-on-click')) {
      this.render.listen(
        this.el.nativeElement.querySelector('.close-on-click'),
        'click',
        () => {
          this.ls.closeOverlay.next(true);
        }
      );
    }
  }
}
