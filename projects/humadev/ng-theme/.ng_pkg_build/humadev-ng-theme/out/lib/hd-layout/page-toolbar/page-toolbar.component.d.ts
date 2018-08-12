import { LayoutService } from '../../services/layout.service';
export declare class PageToolbarComponent {
    _ls: LayoutService;
    pageTitle: string;
    constructor(_ls: LayoutService);
    changePageTitle(title: string): void;
}
