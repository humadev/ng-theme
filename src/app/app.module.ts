import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HdLayoutModule } from 'app/lib/hd-layout/hd-layout.module';
import {FabSpeedDialModule} from 'app/lib/fab-speed-dial/fab-speed-dial.module';
import { StartComponent } from 'app/start.component';
import { MenuService } from 'app/lib/services/menu.service';
import { HdLoginModule } from 'app/lib';

const appRoutes: Routes = [
      {
            path: '',
            component: AppComponent,
            data: {
                  title: 'Home',
                  groupAccess: 0,
                  icon: 'https://sia.undiknas.ac.id/assets/icons/kalender.png',
                  isMenu: false
            },
            children:[
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
                  icon: 'https://sia.undiknas.ac.id/assets/icons/kalender.png',
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
      FabSpeedDialModule,
      HdLoginModule
  ],
  bootstrap: [AppComponent],
  providers:[MenuService]
})
export class AppModule { }
