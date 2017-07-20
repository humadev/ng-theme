import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSort } from '@angular/material';
import { ElementRef } from '@angular/core';

interface Pagination {
      pageIndex: number;
      pageSize: number;
      length: number;
}

interface Sort {
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
      sort   = new BehaviorSubject<Sort>({
            active: '',
            direction: 'asc'
      });

      constructor(
            private _data: any,
            private _paginator: MdPaginator,
            private _sort: MdSort,
            private _displayedColumns: string[],
            private _searchColumns?: string[],
            private _filterInput?: ElementRef
      ) {
            super();
            if(_searchColumns.length === 0){
                  _searchColumns = _displayedColumns;
            }

            Observable.fromEvent(_filterInput.nativeElement, 'keyup')
            .debounceTime(100)
            .distinctUntilChanged()
            .subscribe(() => this.filter.next(_filterInput.nativeElement.value));

      }

      /** Connect function called by the table to retrieve one stream containing the data to render. */
      connect(): Observable<any> {
            const connectData = [
                  this.filter,
                  this._sort.mdSortChange,
                  this._paginator.page
            ];
            return this._data
            .map((res) => this.setData(res))
                  .switchMap(res => {
                        return Observable.merge(...connectData);
                  })
                  .map(() => this.filtering())
                  .map(() => this.sorting())
                  .map(() => this.paging());
      }

      setData(data: any[]) {
            this.sourceData.next(data);
            this.tableData.next(data);
            this._paginator.length = this.tableData.value.length;
      }

      paging(){
            this._paginator.length = this.tableData.value.length;
            const data = this.tableData.value.slice();

            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
      }

      sorting() {
            const data = this.tableData.value.slice();
            if (!this._sort.active || this._sort.direction === '') {
                  return data;
            }

            data.sort((a, b) => {
                  let propertyA: number|string = '';
                  let propertyB: number|string = '';

                  [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

                  const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                  const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

                  return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
            });
            this.tableData.next(data);
            return data;
      }

      filtering() {
            if (this.filter.value === '') {
                  this.tableData.next(this.sourceData.value);
                  return this.sourceData.value;
            }
            const tableData = this.sourceData.value.slice().filter((item) => {
                  let exist = false;
                  let result = -1;
                  this._searchColumns.forEach(obj => {
                        if(typeof item[obj] === 'string'){
                              const query: String = this.filter.value;
                              if (typeof item[obj] !== 'undefined' && typeof query !== 'undefined') {
                                    const searchStr = item[obj].toLowerCase();
                                    result = searchStr.indexOf(query.toLowerCase());
                              }
                        }else if (typeof item[obj] !== 'undefined' && typeof this.filter.value !== 'undefined') {
                                    const searchStr = item[obj].toString();
                                    result = searchStr.indexOf(this.filter.value);
                        }
                        if (result !== -1) {
                              exist = true;
                        }
                  });
                  return exist;
            });
            this.tableData.next(tableData);
            this._paginator.pageIndex = 0;
            this._paginator.length = tableData.length;
            return tableData;
      }

      disconnect() {}

}