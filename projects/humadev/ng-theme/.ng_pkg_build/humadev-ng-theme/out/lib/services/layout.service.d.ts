import { BehaviorSubject } from 'rxjs';
export declare class LayoutService {
    pageTitle: BehaviorSubject<string>;
    topProgressBar: BehaviorSubject<boolean>;
    lockScroll: BehaviorSubject<boolean>;
    sidebarOpen: BehaviorSubject<boolean>;
    closeOverlay: BehaviorSubject<boolean>;
    showNotification: BehaviorSubject<boolean>;
    state: string;
    constructor();
}
