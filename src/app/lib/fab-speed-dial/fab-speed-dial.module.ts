import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HdFabSpeedDialTriggerComponent } from './fab-speed-dial-trigger/fab-speed-dial-trigger.component';
import { HdFabSpeedDialActionsComponent } from './fab-speed-dial-actions/fab-speed-dial-actions.component';
import { HdFabSpeedDialComponent } from './fab-speed-dial.component';
import { MatButtonModule } from '@angular/material';

const COMPONENTS = [
    HdFabSpeedDialTriggerComponent,
    HdFabSpeedDialActionsComponent,
    HdFabSpeedDialComponent
];


@NgModule({
    imports: [
        MatButtonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [],
    entryComponents: [HdFabSpeedDialActionsComponent, HdFabSpeedDialTriggerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FabSpeedDialModule {

}
