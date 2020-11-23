import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProfileService = /** @class */ (function () {
    function ProfileService() {
    }
    ProfileService.prototype.getUserInfo = function () {
        return {
            coach_agreement: {
                goals: [{
                        id: 1,
                        name: 'Goal 1',
                        description: 'Questo è il goal 1'
                    },
                    {
                        id: 1,
                        name: 'Goal 2',
                        description: 'Questo è il goal 2'
                    },
                    {
                        id: 1,
                        name: 'Goal 3',
                        description: 'Questo è il goal 3'
                    }],
                kpi_measure: {
                    detail: 'boh'
                },
                sessions: [
                    {
                        id: 1,
                        status: 'idle',
                        hours: [
                            {
                                date: '15/02/2019',
                                hours: '15:00-17.00'
                            },
                            {
                                date: '18/02/2019',
                                hours: '12:00-14.00'
                            },
                            {
                                date: '20/02/2019',
                                hours: '09:00-11.00'
                            }
                        ]
                    },
                    {
                        id: 1,
                        status: 'active',
                        hours: [
                            {
                                date: '20/02/2019',
                                hours: '09:00-11.00'
                            }
                        ]
                    }
                ]
            }
        };
    };
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map