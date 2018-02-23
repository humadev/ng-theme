import { HdUploadModule } from './../lib/hd-upload/hd-upload.module';
import { HdContextMenuModule } from './../lib/context-menu/hd-context-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalComponent } from './modal/modal.component';
import { ExampleComponent } from './example.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule, MatTabsModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
      {
            path: '',
            component: ExampleComponent,
            data: {
                  name: 'Example',
                  groupAccess: {
                      permissions: [0],
                      groups: [0]
                  },
                  icon: 'dashboard',
                  badge: '3'
            },
            children: [
            {
                  path: 'dashboard',
                  component: DashboardComponent,
                  data: {
                        name: 'Dashboard',
                        groupAccess: {
                            permissions: [0],
                            groups: [1]
                        },
                        icon: 'dashboard',
                        badge: '3'
                  }
            },
            {
                path: 'datatable1',
                component: DashboardComponent,
                data: {
                      name: 'Example 21',
                      groupAccess: {
                          permissions: [0],
                          groups: [2]
                      },
                      icon: 'dashboard'
                },
                children: [
                    {
                            path: 'datatable',
                            component: DashboardComponent,
                            data: {
                                name: 'Example 2.1',
                                groupAccess: {
                                    permissions: [0],
                                    groups: [0]
                                },
                                icon: 'dashboard',
                                badge: '3'
                            }
                    },
                    {
                        path: 'datatable',
                        component: DashboardComponent,
                        data: {
                                name: 'Example 2.2',
                                groupAccess: {
                                    permissions: [0],
                                    groups: [0]
                                },
                                icon: 'dashboard'
                        }
                    },
                    {
                        path: 'datatable',
                        component: DashboardComponent,
                        data: {
                            name: 'Example 2.3',
                            groupAccess: {
                                permissions: [0],
                                groups: [0]
                            },
                            icon: 'dashboard'
                        }
                    },
                    {
                        path: 'datatable',
                        component: DashboardComponent,
                        data: {
                                name: 'Example 2.4',
                                groupAccess: {
                                    permissions: [0],
                                    groups: [0]
                                },
                                icon: 'dashboard'
                        }
                    },
                    {
                        path: 'datatable',
                        component: DashboardComponent,
                        data: {
                            name: 'Example 2.5',
                            groupAccess: {
                                permissions: [0],
                                groups: [0]
                            },
                            icon: 'dashboard'
                        }
                    },
                    {
                        path: 'datatable',
                        component: DashboardComponent,
                        data: {
                                name: 'Example 2.6',
                                groupAccess: {
                                    permissions: [0],
                                    groups: [0]
                                },
                                icon: 'dashboard'
                        }
                    }]
          },
          {
              path: 'datatable2',
              component: DashboardComponent,
              data: {
                    name: 'Example 3',
                    groupAccess: {
                        permissions: [0],
                        groups: [0]
                    },
                    icon: 'dashboard'
              },
              children: [
              {
                      path: 'datatable',
                      component: DashboardComponent,
                      data: {
                          name: 'Example 3.1',
                          groupAccess: {
                              permissions: [0],
                              groups: [0]
                          },
                          icon: 'dashboard'
                      }
              },
              {
                  path: 'datatable',
                  component: DashboardComponent,
                  data: {
                          name: 'Example 3.2',
                          groupAccess: {
                              permissions: [0],
                              groups: [0]
                          },
                          icon: 'dashboard'
                  }
              },
              {
                path: 'datatable',
                component: DashboardComponent,
                data: {
                    name: 'Example 3.3',
                    groupAccess: {
                        permissions: [0],
                        groups: [0]
                    },
                    icon: 'dashboard'
                }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data: {
                            name: 'Data Table',
                            groupAccess: {
                                permissions: [0],
                                groups: [0]
                            },
                            icon: 'dashboard'
                    }
                },
                {
                    path: 'datatable',
                    component: DashboardComponent,
                    data: {
                        name: 'Data Table',
                        groupAccess: {
                            permissions: [0],
                            groups: [0]
                        },
                        icon: 'dashboard'
                    }
            },
            {
                path: 'datatable',
                component: DashboardComponent,
                data: {
                        name: 'Data Table',
                        groupAccess: {
                            permissions: [0],
                            groups: [0]
                        },
                        icon: 'dashboard'
                }
            },
            {
                path: 'datatable',
                component: DashboardComponent,
                data: {
                    name: 'Data Table',
                    groupAccess: {
                        permissions: [0],
                        groups: [0]
                    },
                    icon: 'dashboard'
                }
        },
        {
            path: 'datatable',
            component: DashboardComponent,
            data: {
                    name: 'Data Table',
                    groupAccess: {
                        permissions: [0],
                        groups: [0]
                    },
                    icon: 'dashboard'
            }
        }, {
            path: 'datatable',
            component: DashboardComponent,
            data: {
                    name: 'Data Table',
                    groupAccess: {
                        permissions: [0],
                        groups: [0]
                    },
                    icon: 'dashboard'
            }
        },
        {
            path: 'datatable',
            component: DashboardComponent,
            data: {
                name: 'Data Table',
                groupAccess: {
                    permissions: [0],
                    groups: [0]
                },
                icon: 'dashboard'
            }
    },
    {
        path: 'datatable',
        component: DashboardComponent,
        data: {
                name: 'Data Table',
                groupAccess: {
                    permissions: [0],
                    groups: [0]
                },
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
            FormsModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatTabsModule,
            CdkTableModule,
            FlexLayoutModule,
            MatAutocompleteModule,
            HdContextMenuModule,
            HdUploadModule,
            HttpClientModule
      ],
      providers: [DataService],
      entryComponents: [ModalComponent],
      bootstrap: [ExampleComponent]
})
export class ExampleModule { }
