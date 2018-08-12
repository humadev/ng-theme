import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
export declare class ProfileButtonComponent implements OnInit {
    private render;
    private el;
    private ls;
    constructor(render: Renderer2, el: ElementRef, ls: LayoutService);
    ngOnInit(): void;
}
