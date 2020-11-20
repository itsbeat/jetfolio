import * as tslib_1 from "tslib";
import { SessionsService } from './../services/sessions.service';
import { Component } from '@angular/core';
import { ChooseDateSessionService } from '../services/choose-date-session.service';
import { Router, ActivatedRoute } from '@angular/router';
var SessionActionDetailsPage = /** @class */ (function () {
    function SessionActionDetailsPage(dateSessionChooseService, session_service, router, route) {
        this.dateSessionChooseService = dateSessionChooseService;
        this.session_service = session_service;
        this.router = router;
        this.route = route;
    }
    SessionActionDetailsPage.prototype.ngOnInit = function () {
        this.type = this.route.snapshot.paramMap.get('type');
        this.sessionId = this.route.snapshot.paramMap.get('sessionId');
        this.actionId = this.route.snapshot.paramMap.get('actionId');
        if (this.type && this.sessionId && this.actionId) {
            var session = this.session_service.getSessionById(this.sessionId);
            this.note = session.action_plan[this.actionId].note;
            this.deadline = session.action_plan[this.actionId].deadline;
        }
    };
    SessionActionDetailsPage.prototype.save = function () {
        this.session_service.saveAction(this.sessionId, this.actionId, {
            nota: this.note,
            deadline: this.deadline
        });
        console.log(this.session_service.sessions[1]);
        this.router.navigateByUrl('/session-details');
    };
    SessionActionDetailsPage.prototype.setDate = function () {
        this.dateSessionChooseService.setDateIndex(1);
        this.router.navigateByUrl('/calendar');
    };
    SessionActionDetailsPage.prototype.ionViewWillEnter = function () {
        var dateSelected = this.dateSessionChooseService.getSelectedDateAndIndex();
        if (dateSelected.index > -1) {
            console.log(dateSelected);
            this.deadline = {};
            this.deadline.day = new Date(dateSelected.date.date);
            this.deadline.hour = dateSelected.date.hour;
        }
    };
    SessionActionDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-session-action-details',
            templateUrl: './session-action-details.page.html',
            styleUrls: ['./session-action-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ChooseDateSessionService,
            SessionsService,
            Router,
            ActivatedRoute])
    ], SessionActionDetailsPage);
    return SessionActionDetailsPage;
}());
export { SessionActionDetailsPage };
//# sourceMappingURL=session-action-details.page.js.map