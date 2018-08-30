import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    pageTitle = new BehaviorSubject<string>('');
    topProgressBar = new BehaviorSubject<boolean>(false);
    lockScroll = new BehaviorSubject<boolean>(false);
    sidebarOpen = new BehaviorSubject<boolean>(true);
    closeOverlay = new BehaviorSubject<boolean>(false);
    showNotification = new BehaviorSubject<boolean>(false);
    state = localStorage.getItem('humadev-theme');

    constructor() {
        // if(this.state) {
        //     const s = JSON.parse(this.state);
        //     this.sidebarOpen.next(s.sidebarOpen);
        // }
        this.closeOverlay.subscribe((res) => {
            if (res) {
                this.closeOverlay.next(false);
            }
        });
    }
}
