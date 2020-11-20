import * as tslib_1 from "tslib";
import { SessionsService } from './../services/sessions.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var actionPlanNumberOfItems = 3;
var SessionDetailsPage = /** @class */ (function () {
    function SessionDetailsPage(session_service, router) {
        this.session_service = session_service;
        this.router = router;
    }
    SessionDetailsPage.prototype.ngOnInit = function () {
        this.session = this.session_service.getSessionById(1);
        this.actionPlanTemplateItems = Array(actionPlanNumberOfItems).fill(0).map(function (x, i) { return i; });
    };
    SessionDetailsPage.prototype.goToActionDetails = function (index) {
        if (index === 0) {
            this.router.navigateByUrl("/session-action-details/new/" + this.session.id + "/" + index);
        }
        else {
            this.router.navigateByUrl("/session-action-details/edit/" + this.session.id + "/" + index);
        }
    };
    SessionDetailsPage.prototype.generateReport = function () {
        this.router.navigateByUrl('/generate-report/' + this.session.id);
    };
    SessionDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-session-details',
            templateUrl: './session-details.page.html',
            styleUrls: ['./session-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SessionsService,
            Router])
    ], SessionDetailsPage);
    return SessionDetailsPage;
}());
export { SessionDetailsPage };
//# sourceMappingURL=session-details.page.js.map