import * as tslib_1 from "tslib";
import { CoachService } from './../services/coach.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ChooseCoachPage = /** @class */ (function () {
    function ChooseCoachPage(coach_service, router) {
        this.coach_service = coach_service;
        this.router = router;
        this.selectedCoach = null;
        this.coaches = [];
        this.index = 0;
    }
    ChooseCoachPage.prototype.ngOnInit = function () {
        this.coaches = this.coach_service.getCoach();
        this.selectedCoach = this.coaches[this.index];
    };
    ChooseCoachPage.prototype.nextCoach = function () {
        this.index++;
        console.log(this.index, this.coaches.length, this.index === this.coaches.length);
        if (this.index === this.coaches.length) {
            this.index = 0;
        }
        this.selectedCoach = this.coaches[this.index];
    };
    ChooseCoachPage.prototype.prevCoach = function () {
        this.index--;
        console.log(this.index, this.coaches.length, this.index === this.coaches.length);
        if (this.index == -1) {
            this.index = this.coaches.length - 1;
        }
        this.selectedCoach = this.coaches[this.index];
    };
    ChooseCoachPage.prototype.chooseCoach = function () {
        this.router.navigateByUrl('/date-session-chooser');
    };
    ChooseCoachPage = tslib_1.__decorate([
        Component({
            selector: 'app-choose-coach',
            templateUrl: './choose-coach.page.html',
            styleUrls: ['./choose-coach.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CoachService,
            Router])
    ], ChooseCoachPage);
    return ChooseCoachPage;
}());
export { ChooseCoachPage };
//# sourceMappingURL=choose-coach.page.js.map