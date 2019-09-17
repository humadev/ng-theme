import {
  Observable,
  BehaviorSubject,
  fromEvent,
  merge,
  of
} from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ElementRef } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';

export interface Pagination {
  pageIndex: number;
  pageSize: number;
  length: number;
}

export interface Sort {
  active: string;
  direction: string;
}
export class TableAdapter extends DataSource<any> {
  tableData = new BehaviorSubject<{}[]>([]);
  sourceData = new BehaviorSubject<{}[]>([]);
  displayedColumns = [];
  searchColumns = [];
  pagination = new BehaviorSubject<Pagination>({
    pageIndex: 0,
    pageSize: 10,
    length: this.tableData.value.length
  });
  filter = new BehaviorSubject<String>('');
  sort = new BehaviorSubject<Sort>({
    active: '',
    direction: 'asc'
  });

  constructor(
    private _data: any,
    private _displayedColumns?: string[],
    private _paginator?: MatPaginator,
    private _sort?: MatSort,
    private _searchColumns?: string[],
    private _filterInput?: ElementRef
  ) {
    super();
    if (_searchColumns && _searchColumns.length === 0) {
      _searchColumns = _displayedColumns;
    }

    if (_filterInput) {
      fromEvent(_filterInput.nativeElement, 'keyup')
        .pipe(debounceTime(100), distinctUntilChanged())
        .subscribe(() => this.filter.next(_filterInput.nativeElement.value));
    }
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    const connectData = [];
    if (this._filterInput) {
      connectData.push(this.filter);
    }
    if (this._sort) {
      connectData.push(this._sort.sortChange);
    }
    if (this._paginator) {
      connectData.push(this._paginator.page);
    }

    return this._data.pipe(
      map((res: any) => this.setData(res)),
      switchMap(res => {
        if (connectData.length > 0) {
          return merge(...connectData);
        } else {
          return of(res);
        }
      }),
      map(() => this.filtering()),
      map(() => this.sorting()),
      map(() => this.paging())
    );
  }

  setData(data: any[]) {
    this.sourceData.next(data);
    this.tableData.next(data);
    if (this._paginator) {
      this._paginator.length = this.tableData.value.length;
    }
  }

  paging() {
    if (this._paginator) {
      this._paginator.length = this.tableData.value.length;
      const data = this.tableData.value.slice();

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    } else {
      return this.tableData.value;
    }
  }

  sorting() {
    const data = this.tableData.value.slice();
    if (!this._sort || !this._sort.active || this._sort.direction === '') {
      return this.tableData.value;
    }

    data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
    this.tableData.next(data);
    return data;
  }

  filtering() {
    if (!this._filterInput) {
      return this.tableData.value;
    }
    if (this.filter.value === '') {
      this.tableData.next(this.sourceData.value);
      return this.sourceData.value;
    }
    const query: string[] = this.filter.value.split(' ');
    let tableData = this.sourceData.value;
    query.forEach(q => {
      tableData = tableData.slice().filter(item => {
        let exist = false;
        let result = -1;
        this._searchColumns.forEach(obj => {
          if (typeof item[obj] === 'string') {
            if (
              typeof item[obj] !== 'undefined' &&
              typeof query !== 'undefined'
            ) {
              const searchStr = item[obj].toLowerCase();
              result = searchStr.indexOf(q.toLowerCase());
            }
          } else if (
            typeof item[obj] !== 'undefined' &&
            typeof this.filter.value !== 'undefined'
          ) {
            const searchStr2 = item[obj].toString();
            result = searchStr2.indexOf(q);
          }
          if (result !== -1) {
            exist = true;
          }
        });
        return exist;
      });
    });
    this.tableData.next(tableData);
    this._paginator.pageIndex = 0;
    this._paginator.length = tableData.length;
    return tableData;
  }

  disconnect() {}
}
