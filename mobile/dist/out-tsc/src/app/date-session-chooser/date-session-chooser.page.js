import * as tslib_1 from "tslib";
import { ChooseDateSessionService } from './../services/choose-date-session.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var hourSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
];
var DateSessionChooserPage = /** @class */ (function () {
    function DateSessionChooserPage(router, dateSessionChooseService) {
        this.router = router;
        this.dateSessionChooseService = dateSessionChooseService;
        this.dates = null;
        this.choosenDates = 0;
    }
    DateSessionChooserPage.prototype.ngOnInit = function () {
        this.dates = this.dateSessionChooseService.getDateSession(1);
    };
    DateSessionChooserPage.prototype.addDate = function (index) {
        //this.dates[index].day = '14 Febbraio';
        //this.dates[index].hours = '16:00 - 18:00';
        this.dateSessionChooseService.setDateIndex(index);
        this.router.navigateByUrl('/calendar');
    };
    DateSessionChooserPage.prototype.saveRequest = function () {
        // TODO: Save request
        this.router.navigateByUrl('/session-details');
    };
    DateSessionChooserPage.prototype.ionViewWillEnter = function () {
        // Check if dateSessionChooseService has dates to put there
        var dateSelected = this.dateSessionChooseService.getSelectedDateAndIndex();
        if (dateSelected.index > -1) {
            this.dates[dateSelected.index] = {
                day: new Date(dateSelected.date.date),
                hour: hourSlots[dateSelected.date.hour],
            };
            this.choosenDates++;
        }
    };
    DateSessionChooserPage = tslib_1.__decorate([
        Component({
            selector: 'app-date-session-chooser',
            templateUrl: './date-session-chooser.page.html',
            styleUrls: ['./date-session-chooser.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ChooseDateSessionService])
    ], DateSessionChooserPage);
    return DateSessionChooserPage;
}());
export { DateSessionChooserPage };
//# sourceMappingURL=date-session-chooser.page.js.map