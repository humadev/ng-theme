import { LayoutService } from '../../../services/layout.service';
import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare class ProfileItemComponent implements OnInit {
    private render;
    private el;
    private ls;
    badge: number;
    icon: string;
    constructor(render: Renderer2, el: ElementRef, ls: LayoutService);
    ngOnInit(): void;
}
