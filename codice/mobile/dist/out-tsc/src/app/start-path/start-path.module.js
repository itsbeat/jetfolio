import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StartPathPage } from './start-path.page';
var routes = [
    {
        path: '',
        component: StartPathPage
    }
];
var StartPathPageModule = /** @class */ (function () {
    function StartPathPageModule() {
    }
    StartPathPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [StartPathPage]
        })
    ], StartPathPageModule);
    return StartPathPageModule;
}());
export { StartPathPageModule };
//# sourceMappingURL=start-path.module.js.map