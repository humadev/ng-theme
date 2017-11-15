import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {

    pageTitle = new BehaviorSubject<string>('');
    topProgressBar = new BehaviorSubject<boolean>(false);
    lockScroll = new BehaviorSubject<boolean>(false);
    sidebarOpen = new BehaviorSubject<boolean>(true);
    closeOverlay = new BehaviorSubject<boolean>(false);

    constructor() {
        this.closeOverlay.subscribe((res) => {
            if(res) {
                this.closeOverlay.next(false);
            }
        });
    }
}
