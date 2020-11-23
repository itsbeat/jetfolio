import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SessionsService = /** @class */ (function () {
    function SessionsService() {
        this.sessions = {
            1: {
                id: 1,
                period: {
                    day: '12/03/2019',
                    hours: '17:00'
                },
                action_plan: [
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                ]
            },
            2: {
                id: 2,
                period: {
                    day: 'Ciao',
                    hours: 'Ciaone'
                },
                action_plan: [
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                ]
            },
            3: {
                id: 3,
                period: {
                    day: 'Ciao',
                    hours: 'Ciaone'
                },
                action_plan: [
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                    {
                        note: 'Creare uno stile di vita di coach perfetto',
                        deadline: "17/05/19",
                    },
                ]
            }
        };
    }
    SessionsService.prototype.getSessionById = function (sessionId) {
        return this.sessions[sessionId];
    };
    SessionsService.prototype.getSessionActionPlanById = function (sessionId) {
        return this.sessions[sessionId].action_plan;
    };
    SessionsService.prototype.saveAction = function (sessionId, action_id, action_plan) {
        this.sessions[sessionId].action_plan[action_id] = action_plan;
    };
    SessionsService.prototype.saveSession = function (session) {
        this.sessions[session.id] = session;
    };
    SessionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SessionsService);
    return SessionsService;
}());
export { SessionsService };
//# sourceMappingURL=sessions.service.js.map