import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var days = [
    "D",
    "L",
    "M",
    "M",
    "G",
    "V",
    "S",
];
function getDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
}
var ChooseDateSessionService = /** @class */ (function () {
    function ChooseDateSessionService() {
        this.dateIndex = -1;
        this.date = null;
    }
    ChooseDateSessionService.prototype.getDateSession = function (userId) {
        var dateSessions = [];
        for (var i = 0; i < 3; i++) {
            dateSessions.push({
                day: null,
                hours: null
            });
        }
        return dateSessions;
    };
    ChooseDateSessionService.prototype.getSelectedDateAndIndex = function () {
        return {
            date: this.date,
            index: this.dateIndex,
        };
    };
    ChooseDateSessionService.prototype.setDateIndex = function (index) {
        this.dateIndex = index;
    };
    ChooseDateSessionService.prototype.setDate = function (date) {
        this.date = date;
    };
    ChooseDateSessionService.prototype.getCalendarArray = function (month, year) {
        var firstDay = new Date(year, month).getDay();
        var daysInMonth = getDaysInMonth(month, year);
        var date = 1;
        var weekIndex = 0;
        var weeks = [];
        var legend = [];
        days.forEach(function (day) {
            legend.push({
                value: day,
                legend: true,
            });
        });
        weeks.push(legend);
        while (date < daysInMonth) {
            var week = [];
            for (var j = 0; j < 7; j++) {
                var dayObj = {
                    value: -1,
                    free: true,
                    disabled: false,
                    timestamp: -1,
                };
                if ((weekIndex === 0 && j < firstDay) || date > daysInMonth) {
                    dayObj.disabled = true;
                    dayObj.free = false;
                }
                else {
                    dayObj.value = date;
                    dayObj.timestamp = new Date(year, month, date).getTime();
                    date++;
                }
                if (j == 0) {
                    // Disable all sundays
                    dayObj.disabled = true;
                    dayObj.free = false;
                }
                week.push(dayObj);
            }
            weeks.push(week);
            weekIndex++;
        }
        var hours = [
            {
                free: true,
            },
            {
                free: true,
            },
            {
                free: false,
            },
            {
                free: false,
            },
        ];
        return {
            weeks: weeks,
            hours: hours,
        };
    };
    ChooseDateSessionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChooseDateSessionService);
    return ChooseDateSessionService;
}());
export { ChooseDateSessionService };
//# sourceMappingURL=choose-date-session.service.js.map