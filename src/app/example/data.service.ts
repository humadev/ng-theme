import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from "rxjs/Rx";
import { DataSource } from "@angular/cdk";
import { Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class DataService{

      constructor(
            private _apollo: Apollo
      ) {}

      /** Connect function called by the table to retrieve one stream containing the data to render. */
      setData() {
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
                  let data = [];
                  res.data.pegawai.forEach(element => {
                        data.push(element);
                  });
                  return data;
            });
      }
}

