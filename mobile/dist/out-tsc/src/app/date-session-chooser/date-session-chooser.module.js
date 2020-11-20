import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DateSessionChooserPage } from './date-session-chooser.page';
var routes = [
    {
        path: '',
        component: DateSessionChooserPage
    }
];
var DateSessionChooserPageModule = /** @class */ (function () {
    function DateSessionChooserPageModule() {
    }
    DateSessionChooserPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DateSessionChooserPage]
        })
    ], DateSessionChooserPageModule);
    return DateSessionChooserPageModule;
}());
export { DateSessionChooserPageModule };
//# sourceMappingURL=date-session-chooser.module.js.map