import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var questions = [
    {
        area: 1,
        text: "Domanda 1 molto bella diciamo così?",
    },
    {
        area: 1,
        text: "Domanda 2 molto bella diciamo così?",
    },
    {
        area: 1,
        text: "Domanda 1 molto bella diciamo così?",
    },
    {
        area: 2,
        text: "Domanda 2 molto bella diciamo così?",
    },
    {
        area: 2,
        text: "Domanda 1 molto bella diciamo così?",
    },
    {
        area: 2,
        text: "Domanda 2 molto bella diciamo così?",
    },
    {
        area: 3,
        text: "Domanda 1 molto bella diciamo così?",
    },
    {
        area: 3,
        text: "Domanda 2 molto bella diciamo così?",
    },
    {
        area: 4,
        text: "Domanda 9 molto bella diciamo così?",
    },
    {
        area: 4,
        text: "Domanda 10 molto bella diciamo così?",
    },
];
var SurveyService = /** @class */ (function () {
    function SurveyService() {
        this.answers = [];
    }
    SurveyService.prototype.saveAnswers = function (answers) {
        this.answers = answers;
    };
    SurveyService.prototype.getAnswers = function () {
        return this.answers;
    };
    SurveyService.prototype.getQuestions = function () {
        return questions;
    };
    SurveyService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SurveyService);
    return SurveyService;
}());
export { SurveyService };
//# sourceMappingURL=survey.service.js.map