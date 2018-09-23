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
        this.sidebarOpen.subscribe(isOpen => {
            const s = {
                sidebarOpen: isOpen
            }
            localStorage.setItem('humadev-theme', JSON.stringify(s));
        });
        
        if (this.state) {
            const s = JSON.parse(this.state);
            this.sidebarOpen.next(s.sidebarOpen);
        } else {
            const s = {
                sidebarOpen: true
            }
            localStorage.setItem('humadev-theme', JSON.stringify(s));
        }

        this.closeOverlay.subscribe((res) => {
            if (res) {
                this.closeOverlay.next(false);
            }
        });
    }
}
