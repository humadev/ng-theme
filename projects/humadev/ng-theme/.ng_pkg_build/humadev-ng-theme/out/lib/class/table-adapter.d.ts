import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from '@angular/material';
import { ElementRef } from '@angular/core';
export interface Pagination {
    pageIndex: number;
    pageSize: number;
    length: number;
}
export interface Sort {
    active: string;
    direction: string;
}
export declare class TableAdapter extends DataSource<any> {
    private _data;
    private _displayedColumns?;
    private _paginator?;
    private _sort?;
    private _searchColumns?;
    private _filterInput?;
    tableData: BehaviorSubject<{}[]>;
    sourceData: BehaviorSubject<{}[]>;
    displayedColumns: any[];
    searchColumns: any[];
    pagination: BehaviorSubject<Pagination>;
    filter: BehaviorSubject<String>;
    sort: BehaviorSubject<Sort>;
    constructor(_data: any, _displayedColumns?: string[], _paginator?: MatPaginator, _sort?: MatSort, _searchColumns?: string[], _filterInput?: ElementRef);
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any>;
    setData(data: any[]): void;
    paging(): {}[];
    sorting(): {}[];
    filtering(): {}[];
    disconnect(): void;
}
