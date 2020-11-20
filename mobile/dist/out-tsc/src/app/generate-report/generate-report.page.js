import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionsService } from '../services/sessions.service';
var GenerateReportPage = /** @class */ (function () {
    function GenerateReportPage(router, activatedRoute, sessionsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionsService = sessionsService;
        this.canProceed = false;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionsService = sessionsService;
    }
    GenerateReportPage.prototype.ngOnInit = function () {
        var sessionId = this.activatedRoute.snapshot.paramMap.get("sessionId");
        this.session = this.sessionsService.getSessionById(sessionId);
    };
    GenerateReportPage.prototype.tickAction = function (done, actionIndex) {
        this.session.action_plan[actionIndex].done = done ? 'ok' : 'no';
        var allActionsChecked = true;
        this.session.action_plan.forEach(function (action) {
            allActionsChecked = allActionsChecked && !!action.done;
        });
        this.canProceed = allActionsChecked;
    };
    GenerateReportPage.prototype.saveReport = function () {
        this.session.report = true;
        this.session.reportDate = new Date();
        this.sessionsService.saveSession(this.session);
        this.router.navigateByUrl('/session-details');
    };
    GenerateReportPage = tslib_1.__decorate([
        Component({
            selector: 'app-generate-report',
            templateUrl: './generate-report.page.html',
            styleUrls: ['./generate-report.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            SessionsService])
    ], GenerateReportPage);
    return GenerateReportPage;
}());
export { GenerateReportPage };
//# sourceMappingURL=generate-report.page.js.map