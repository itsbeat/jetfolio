import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CoachingPathsPage } from './coaching-paths.page';
var routes = [
    {
        path: '',
        component: CoachingPathsPage
    }
];
var CoachingPathsPageModule = /** @class */ (function () {
    function CoachingPathsPageModule() {
    }
    CoachingPathsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CoachingPathsPage]
        })
    ], CoachingPathsPageModule);
    return CoachingPathsPageModule;
}());
export { CoachingPathsPageModule };
//# sourceMappingURL=coaching-paths.module.js.map