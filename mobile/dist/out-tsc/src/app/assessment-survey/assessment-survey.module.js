import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AssessmentSurveyPage } from './assessment-survey.page';
var routes = [
    {
        path: '',
        component: AssessmentSurveyPage
    }
];
var AssessmentSurveyPageModule = /** @class */ (function () {
    function AssessmentSurveyPageModule() {
    }
    AssessmentSurveyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AssessmentSurveyPage]
        })
    ], AssessmentSurveyPageModule);
    return AssessmentSurveyPageModule;
}());
export { AssessmentSurveyPageModule };
//# sourceMappingURL=assessment-survey.module.js.map