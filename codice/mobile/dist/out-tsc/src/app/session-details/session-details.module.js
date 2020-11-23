import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SessionDetailsPage } from './session-details.page';
var routes = [
    {
        path: '',
        component: SessionDetailsPage
    }
];
var SessionDetailsPageModule = /** @class */ (function () {
    function SessionDetailsPageModule() {
    }
    SessionDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SessionDetailsPage]
        })
    ], SessionDetailsPageModule);
    return SessionDetailsPageModule;
}());
export { SessionDetailsPageModule };
//# sourceMappingURL=session-details.module.js.map