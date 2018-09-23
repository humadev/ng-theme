import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import {
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent
} from './component';

const COMPONENTS = [
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
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
