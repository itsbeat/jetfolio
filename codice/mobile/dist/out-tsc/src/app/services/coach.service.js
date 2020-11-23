import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var CoachService = /** @class */ (function () {
    function CoachService() {
    }
    CoachService.prototype.getCoach = function () {
        return [
            {
                name: 'Isacco',
                surname: 'Rossi',
                bio: 'Sono uno sviluppatore decente',
                cv: 'Coding by Coping'
            },
            {
                name: 'Giacomo',
                surname: 'Alberini',
                bio: 'Sono uno sviluppatore decente',
                cv: 'Coding by Coping'
            }
        ];
    };
    CoachService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CoachService);
    return CoachService;
}());
export { CoachService };
//# sourceMappingURL=coach.service.js.map