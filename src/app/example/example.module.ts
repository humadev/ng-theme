import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponent } from './modal/modal.component';
import { ExampleComponent } from './example.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';


import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { DataService } from 'app/example/data.service';

const networkInterface = createNetworkInterface({ uri: 'https://sandbox.undiknas.ac.id/graphql' });

const client = new ApolloClient({
  networkInterface,
});

export function provideClient(): ApolloClient {
  return client;
}


const appRoutes: Routes = [
      {
            path: '',
            component: ExampleComponent,
            data:{
                  name: 'Example',
                  groupAccess: 0,
                  icon: 'dashboard'
            },
            children:[
            {
                  path: 'datatable',
                  component: DashboardComponent,
                  data:{
                        name: 'Data Table',
                        groupAccess: 0,
                        icon: 'dashboard'
                  }
            },
            {
                path: 'datatable1',
                component: DashboardComponent,
                data:{
                      name: 'Data Table 1',
                      groupAccess: 0,
                      icon: 'dashboard'
                },
                children: [
                {
                        path: 'datatable',
                        component: DashboardComponent,
                        data:{
                            name: 'Data Table',
                            groupAccess: 0,
                            icon: 'dashboard'
                        }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                            name: 'Data Table',
                            groupAccess: 0,
                            icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                        name: 'Data Table',
                        groupAccess: 0,
                        icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                            name: 'Data Table',
                            groupAccess: 0,
                            icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                        name: 'Data Table',
                        groupAccess: 0,
                        icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                            name: 'Data Table',
                            groupAccess: 0,
                            icon: 'dashboard'
                    }
                }]
          },
          {
              path: 'datatable2',
              component: DashboardComponent,
              data:{
                    name: 'Data Table 2',
                    groupAccess: 0,
                    icon: 'dashboard'
              },
              children: [
              {
                      path: 'datatable',
                      component: DashboardComponent,
                      data:{
                          name: 'Data Table',
                          groupAccess: 0,
                          icon: 'dashboard'
                      }
              },
              {
                  path: 'datatable',
                  component: DashboardComponent,
                  data:{
                          name: 'Data Table',
                          groupAccess: 0,
                          icon: 'dashboard'
                  }
              },
              {
                path: 'datatable',
                component: DashboardComponent,
                data:{
                    name: 'Data Table',
                    groupAccess: 0,
                    icon: 'dashboard'
                }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                            name: 'Data Table',
                            groupAccess: 0,
                            icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data:{
                        name: 'Data Table',
                        groupAccess: 0,
                        icon: 'dashboard'
                    }
            },
            {
                path: 'datatable',
                component: DashboardComponent,
                data:{
                        name: 'Data Table',
                        groupAccess: 0,
                        icon: 'dashboard'
                }
            },
            {
                path: 'datatable',
                component: DashboardComponent,
                data:{
                    name: 'Data Table',
                    groupAccess: 0,
                    icon: 'dashboard'
                }
        },
        {
            path: 'datatable',
            component: DashboardComponent,
            data:{
                    name: 'Data Table',
                    groupAccess: 0,
                    icon: 'dashboard'
            }
        },{
            path: 'datatable',
            component: DashboardComponent,
            data:{
                    name: 'Data Table',
                    groupAccess: 0,
                    icon: 'dashboard'
            }
        },
        {
            path: 'datatable',
            component: DashboardComponent,
            data:{
                name: 'Data Table',
                groupAccess: 0,
                icon: 'dashboard'
            }
    },
    {
        path: 'datatable',
        component: DashboardComponent,
        data:{
                name: 'Data Table',
                groupAccess: 0,
                icon: 'dashboard'
        }
    }]
        }]
      }];

@NgModule({
      declarations: [
            DashboardComponent,
            ModalComponent,
            ExampleComponent
      ],
      imports: [
            CommonModule,
            SharedModule,
            RouterModule.forChild(appRoutes),
            ReactiveFormsModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            CdkTableModule,
            FlexLayoutModule,
            MatAutocompleteModule,
            ApolloModule.forRoot(provideClient),
      ],
      providers: [DataService],
      entryComponents: [ModalComponent],
      bootstrap: [ExampleComponent]
})
export class ExampleModule { }
