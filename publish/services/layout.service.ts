import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class LayoutService {

      pageTitle = new BehaviorSubject<string>('');
      pageProgressBar= true;
}
