import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import {
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent
} from './component';

const COMPONENTS = [
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent
];


@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FabSpeedDialModule {

}
