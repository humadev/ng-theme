import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LayoutService {

      pageTitle = new BehaviorSubject<string>('');
      pageProgressBar = true;
      lockScroll = new BehaviorSubject<boolean>(false);
}
