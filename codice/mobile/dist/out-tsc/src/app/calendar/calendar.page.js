import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ChooseDateSessionService } from '../services/choose-date-session.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var monthNames = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
];
var CalendarPage = /** @class */ (function () {
    function CalendarPage(location, router, chooseDateSessionService) {
        this.location = location;
        this.router = router;
        this.chooseDateSessionService = chooseDateSessionService;
        this.chooseDateSessionService = chooseDateSessionService;
        this.router = router;
    }
    CalendarPage.prototype.ngOnInit = function () {
        this.date = new Date();
        this.dateSelected = {
            hour: -1,
            date: -1,
        };
        this.updateCalendar();
    };
    CalendarPage.prototype.updateCalendar = function () {
        this.year = this.date.getYear() + 1900;
        this.month = this.date.getMonth();
        this.monthName = monthNames[this.month];
        var calendarData = this.chooseDateSessionService.getCalendarArray(this.month, this.year);
        this.weeks = calendarData.weeks;
        this.hours = calendarData.hours;
    };
    CalendarPage.prototype.saveDate = function () {
        this.chooseDateSessionService.setDate(this.dateSelected);
        // this.router.navigateByUrl('/date-session-chooser');
        this.location.back();
    };
    CalendarPage.prototype.selectHour = function (hourIndex) {
        if (this.hours[hourIndex].free) {
            this.dateSelected.hour = hourIndex;
        }
    };
    CalendarPage.prototype.selectDate = function (day) {
        if (day.free) {
            this.dateSelected.date = day.timestamp;
        }
    };
    CalendarPage.prototype.nextMonth = function () {
        this.date.setMonth(this.date.getMonth() + 1);
        this.updateCalendar();
    };
    CalendarPage.prototype.prevMonth = function () {
        this.date.setMonth(this.date.getMonth() - 1);
        this.updateCalendar();
    };
    CalendarPage = tslib_1.__decorate([
        Component({
            selector: 'app-calendar',
            templateUrl: './calendar.page.html',
            styleUrls: ['./calendar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            Router,
            ChooseDateSessionService])
    ], CalendarPage);
    return CalendarPage;
}());
export { CalendarPage };
//# sourceMappingURL=calendar.page.js.map