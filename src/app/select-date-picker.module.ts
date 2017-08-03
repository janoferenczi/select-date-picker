import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './select-date-picker.component';
import {MdOptionModule, MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdSelectModule,
        MdOptionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class SelectDatePickerModule {
}
