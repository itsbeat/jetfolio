import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChooseCoachPage } from './choose-coach.page';
var routes = [
    {
        path: '',
        component: ChooseCoachPage
    }
];
var ChooseCoachPageModule = /** @class */ (function () {
    function ChooseCoachPageModule() {
    }
    ChooseCoachPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ChooseCoachPage]
        })
    ], ChooseCoachPageModule);
    return ChooseCoachPageModule;
}());
export { ChooseCoachPageModule };
//# sourceMappingURL=choose-coach.module.js.map