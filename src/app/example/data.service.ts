import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private _http: HttpClient) {}

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  setData() {
    return this._http
      .get('/assets/data.json')
      .pipe(map((res: any) => res.pegawai));
  }
}
