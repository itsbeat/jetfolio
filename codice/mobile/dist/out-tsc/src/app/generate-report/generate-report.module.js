import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenerateReportPage } from './generate-report.page';
var routes = [
    {
        path: '',
        component: GenerateReportPage
    }
];
var GenerateReportPageModule = /** @class */ (function () {
    function GenerateReportPageModule() {
    }
    GenerateReportPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GenerateReportPage]
        })
    ], GenerateReportPageModule);
    return GenerateReportPageModule;
}());
export { GenerateReportPageModule };
//# sourceMappingURL=generate-report.module.js.map