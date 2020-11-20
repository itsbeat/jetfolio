import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SurveyResultsPage } from './survey-results.page';
var routes = [
    {
        path: '',
        component: SurveyResultsPage
    }
];
var SurveyResultsPageModule = /** @class */ (function () {
    function SurveyResultsPageModule() {
    }
    SurveyResultsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SurveyResultsPage]
        })
    ], SurveyResultsPageModule);
    return SurveyResultsPageModule;
}());
export { SurveyResultsPageModule };
//# sourceMappingURL=survey-results.module.js.map