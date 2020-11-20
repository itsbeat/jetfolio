import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SessionActionDetailsPage } from './session-action-details.page';
var routes = [
    {
        path: '',
        component: SessionActionDetailsPage
    }
];
var SessionActionDetailsPageModule = /** @class */ (function () {
    function SessionActionDetailsPageModule() {
    }
    SessionActionDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SessionActionDetailsPage]
        })
    ], SessionActionDetailsPageModule);
    return SessionActionDetailsPageModule;
}());
export { SessionActionDetailsPageModule };
//# sourceMappingURL=session-action-details.module.js.map