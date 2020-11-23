import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TeachingAgreementPage } from './teaching-agreement.page';
var routes = [
    {
        path: '',
        component: TeachingAgreementPage
    }
];
var TeachingAgreementPageModule = /** @class */ (function () {
    function TeachingAgreementPageModule() {
    }
    TeachingAgreementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TeachingAgreementPage]
        })
    ], TeachingAgreementPageModule);
    return TeachingAgreementPageModule;
}());
export { TeachingAgreementPageModule };
//# sourceMappingURL=teaching-agreement.module.js.map