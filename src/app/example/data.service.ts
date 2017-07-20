import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { DataSource } from "@angular/cdk";
import { Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';

interface pagination{
      pageIndex: number,
      pageSize: number,
      length: number
}

interface sort{
      active: string,
      direction: string
}

@Injectable()
export class DataService extends DataSource<any> {

      count: number;
      pagination = new BehaviorSubject<pagination>({
            pageIndex: 0,
            pageSize: 10,
            length: this.count
      });
      data = [];
      dataSource = [];
      search = new BehaviorSubject<String>('');
      sort   = new BehaviorSubject<sort>({
            active:'name',
            direction:'desc'
      });
      source = this.setData()
                  .switchMap(res => this.searching())
                  .switchMap(res => this.sorting())
                  .switchMap(res => this.paging());

      constructor(
            private _apollo: Apollo
      ) {
            super();
      }

      /** Connect function called by the table to retrieve one stream containing the data to render. */
      connect(): Observable<any[]> {
            return this.source;
      }

      setData(){
            return this._apollo.watchQuery({
                  query: gql`{
                        pegawai(where:{show:"1"}){
                              first_name
                              last_name
                              pre_title
                              post_title
                              birth
                              place_birth
                              home_address
                              work_address
                              work_phone
                              mobile_phone
                        }
                  }`,
                  fetchPolicy: 'network-only',
                  notifyOnNetworkStatusChange: true
            })
            .map((res: any) => {
                  this.count = res.data.pegawai.length;
                  let data = [];
                  res.data.pegawai.forEach(element => {
                        data.push(element);
                  });
                  this.dataSource = data;
                  this.data = data;
                  return data;
            });
      }

      paging(){
            return this.pagination
            .map((res: any) => {
                  let data = this.data.slice();
                  const startIndex = this.pagination.value.pageIndex * this.pagination.value.pageSize;
                  return data.splice(startIndex, this.pagination.value.pageSize);
            });
      }

      sorting(){
            return this.sort
            .map((res: any) => {
                  let data = this.data.slice();
                  if (!this.sort.value.active || this.sort.value.direction == '') { return data; }

                  data.sort((a, b) => {
                        let propertyA: number|string = '';
                        let propertyB: number|string = '';

                        switch (this.sort.value.active) {
                        case 'name': [propertyA, propertyB] = [a.first_name, b.first_name]; break;
                        case 'phone': [propertyA, propertyB] = [a.mobile_phone, b.mobile_phone]; break;
                        case 'address': [propertyA, propertyB] = [a.home_address, b.home_address]; break;
                        }

                        let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                        let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

                        return (valueA < valueB ? -1 : 1) * (this.sort.value.direction == 'asc' ? 1 : -1);
                  });
                  this.data = data;
                  return data;
            });
      }

      searching(){
            return this.search
            .map((res: any) => {
                  if(this.search.value === ''){
                        this.data = this.dataSource;
                        return this.data;
                  }
                  this.data = this.dataSource.slice().filter((item) => {
                        let searchStr = item.first_name.toLowerCase();
                        return searchStr.indexOf(this.search.value.toLowerCase()) != -1;
                  });
                  return this.data;
            });
      }

      disconnect() {}

}

