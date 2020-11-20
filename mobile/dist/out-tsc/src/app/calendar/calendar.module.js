import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarPage } from './calendar.page';
import { CalendarModule } from 'angular-calendar';
var routes = [
    {
        path: '',
        component: CalendarPage
    }
];
var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                CalendarModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CalendarPage]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());
export { CalendarPageModule };
//# sourceMappingURL=calendar.module.js.map