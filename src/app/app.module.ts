import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HdLayoutModule, MenuService, HdLoginModule } from '@humadev/ng-theme';
import { StartComponent } from './start.component';


const appRoutes: Routes = [
      {
            path: '',
            component: AppComponent,
            data: {
                  title: 'Home',
                  groupAccess: 0,
                  icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
                  isMenu: false
            },
            children: [
                  {
                        path: '',
                        component: StartComponent
                  }]
      },
      {
            path: 'example',
            loadChildren: './example/example.module#ExampleModule',
            data: {
                  title: 'Example',
                  description: 'menu untuk mengelola data example',
                  icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
                  groupAccess: 0,
                  isMenu: true
            }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    },
    {
        path: 'example',
        loadChildren: './example/example.module#ExampleModule',
        data: {
            title: 'Example',
            description: 'menu untuk mengelola data example',
            icon: 'https://sia.undiknas.ac.id/assets/icons/doit.png',
            groupAccess: 0,
            isMenu: true
        }
    }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      HdLayoutModule,
      HdLoginModule
  ],
  bootstrap: [AppComponent],
  providers: [MenuService]
})
export class AppModule { }
