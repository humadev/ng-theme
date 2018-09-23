/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject, fromEvent, merge, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
/**
 * @record
 */
export function Pagination() { }
/** @type {?} */
Pagination.prototype.pageIndex;
/** @type {?} */
Pagination.prototype.pageSize;
/** @type {?} */
Pagination.prototype.length;
/**
 * @record
 */
export function Sort() { }
/** @type {?} */
Sort.prototype.active;
/** @type {?} */
Sort.prototype.direction;
export class TableAdapter extends DataSource {
    /**
     * @param {?} _data
     * @param {?=} _displayedColumns
     * @param {?=} _paginator
     * @param {?=} _sort
     * @param {?=} _searchColumns
     * @param {?=} _filterInput
     */
    constructor(_data, _displayedColumns, _paginator, _sort, _searchColumns, _filterInput) {
        super();
        this._data = _data;
        this._displayedColumns = _displayedColumns;
        this._paginator = _paginator;
        this._sort = _sort;
        this._searchColumns = _searchColumns;
        this._filterInput = _filterInput;
        this.tableData = new BehaviorSubject([]);
        this.sourceData = new BehaviorSubject([]);
        this.displayedColumns = [];
        this.searchColumns = [];
        this.pagination = new BehaviorSubject({
            pageIndex: 0,
            pageSize: 10,
            length: this.tableData.value.length
        });
        this.filter = new BehaviorSubject('');
        this.sort = new BehaviorSubject({
            active: '',
            direction: 'asc'
        });
        if (_searchColumns && _searchColumns.length === 0) {
            _searchColumns = _displayedColumns;
        }
        if (_filterInput) {
            fromEvent(_filterInput.nativeElement, 'keyup')
                .pipe(debounceTime(100), distinctUntilChanged())
                .subscribe(() => this.filter.next(_filterInput.nativeElement.value));
        }
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        /** @type {?} */
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
        return this._data.pipe(map((res) => this.setData(res)), switchMap(res => {
            if (connectData.length > 0) {
                return merge(...connectData);
            }
            else {
                return of(res);
            }
        }), map(() => this.filtering()), map(() => this.sorting()), map(() => this.paging()));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.sourceData.next(data);
        this.tableData.next(data);
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
        }
    }
    /**
     * @return {?}
     */
    paging() {
        if (this._paginator) {
            this._paginator.length = this.tableData.value.length;
            /** @type {?} */
            const data = this.tableData.value.slice();
            /** @type {?} */
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        }
        else {
            return this.tableData.value;
        }
    }
    /**
     * @return {?}
     */
    sorting() {
        /** @type {?} */
        const data = this.tableData.value.slice();
        if (!this._sort || !this._sort.active || this._sort.direction === '') {
            return this.tableData.value;
        }
        data.sort((a, b) => {
            /** @type {?} */
            let propertyA = '';
            /** @type {?} */
            let propertyB = '';
            [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];
            /** @type {?} */
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            /** @type {?} */
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
        this.tableData.next(data);
        return data;
    }
    /**
     * @return {?}
     */
    filtering() {
        if (!this._filterInput) {
            return this.tableData.value;
        }
        if (this.filter.value === '') {
            this.tableData.next(this.sourceData.value);
            return this.sourceData.value;
        }
        /** @type {?} */
        const query = this.filter.value.split(' ');
        /** @type {?} */
        let tableData = this.sourceData.value;
        query.forEach(q => {
            tableData = tableData.slice().filter(item => {
                /** @type {?} */
                let exist = false;
                /** @type {?} */
                let result = -1;
                this._searchColumns.forEach(obj => {
                    if (typeof item[obj] === 'string') {
                        if (typeof item[obj] !== 'undefined' &&
                            typeof query !== 'undefined') {
                            /** @type {?} */
                            const searchStr = item[obj].toLowerCase();
                            result = searchStr.indexOf(q.toLowerCase());
                        }
                    }
                    else if (typeof item[obj] !== 'undefined' &&
                        typeof this.filter.value !== 'undefined') {
                        /** @type {?} */
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
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /** @type {?} */
    TableAdapter.prototype.tableData;
    /** @type {?} */
    TableAdapter.prototype.sourceData;
    /** @type {?} */
    TableAdapter.prototype.displayedColumns;
    /** @type {?} */
    TableAdapter.prototype.searchColumns;
    /** @type {?} */
    TableAdapter.prototype.pagination;
    /** @type {?} */
    TableAdapter.prototype.filter;
    /** @type {?} */
    TableAdapter.prototype.sort;
    /** @type {?} */
    TableAdapter.prototype._data;
    /** @type {?} */
    TableAdapter.prototype._displayedColumns;
    /** @type {?} */
    TableAdapter.prototype._paginator;
    /** @type {?} */
    TableAdapter.prototype._sort;
    /** @type {?} */
    TableAdapter.prototype._searchColumns;
    /** @type {?} */
    TableAdapter.prototype._filterInput;
}
//# sourceMappingURL=table-adapter.js.map