import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
var valueToTextColors = ["red", "rose", "secondary", "primary"];
var SurveyResultsPage = /** @class */ (function () {
    function SurveyResultsPage(surveyService, router) {
        this.surveyService = surveyService;
        this.router = router;
        this.surveyService = surveyService;
        this.router = router;
    }
    SurveyResultsPage.prototype.getSpotColorClass = function (answerValue) {
        return Math.ceil(answerValue / 2);
    };
    SurveyResultsPage.prototype.getTextColorFromValue = function (areaResult) {
        return 'tx-' + valueToTextColors[Math.ceil(areaResult) - 1];
    };
    SurveyResultsPage.prototype.computeResults = function () {
        var _this = this;
        var areaResults = {};
        var areaSums = {};
        var areaCount = {};
        this.questions.forEach(function (question, questionIndex) {
            if (!areaSums[question.area]) {
                areaSums[question.area] = 0;
            }
            if (!areaCount[question.area]) {
                areaCount[question.area] = 0;
            }
            areaSums[question.area] += _this.answers[questionIndex];
            areaCount[question.area]++;
        });
        console.log(areaSums);
        console.log(areaCount);
        [1, 2, 3, 4].forEach(function (areaIndex) {
            areaResults[areaIndex] = areaSums[areaIndex] / areaCount[areaIndex];
        });
        console.log(areaResults);
        this.areaResults = areaResults;
    };
    SurveyResultsPage.prototype.ngOnInit = function () {
        this.answers = this.surveyService.getAnswers();
        this.questions = this.surveyService.getQuestions();
        this.computeResults();
    };
    SurveyResultsPage.prototype.nextStep = function () {
        this.router.navigateByUrl('/choose-coach');
    };
    SurveyResultsPage = tslib_1.__decorate([
        Component({
            selector: 'app-survey-results',
            templateUrl: './survey-results.page.html',
            styleUrls: ['./survey-results.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SurveyService,
            Router])
    ], SurveyResultsPage);
    return SurveyResultsPage;
}());
export { SurveyResultsPage };
//# sourceMappingURL=survey-results.page.js.map