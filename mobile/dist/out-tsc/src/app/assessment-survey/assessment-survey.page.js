import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';
var AssessmentSurveyPage = /** @class */ (function () {
    function AssessmentSurveyPage(router, surveyService) {
        this.answers = [];
        this.areaNames = {
            1: "Area 1",
            2: "Area 2",
            3: "Area 3",
            4: "Area 4",
        };
        this.router = router;
        this.surveyService = surveyService;
    }
    AssessmentSurveyPage.prototype.ngOnInit = function () {
        this.questions = this.surveyService.getQuestions();
        this.nextBtnText = "Continua";
        this.currentQuestionIndex = 0;
    };
    AssessmentSurveyPage.prototype.selectAnswer = function (answerIndex, answerValue) {
        if (this.answers[answerIndex]) {
            this.answers[answerIndex] = answerValue;
        }
        else {
            this.answers.push(answerValue);
        }
    };
    AssessmentSurveyPage.prototype.nextQuestion = function () {
        if (this.currentQuestionIndex == this.questions.length - 1) {
            this.surveyService.saveAnswers(this.answers);
            this.router.navigate(['/survey-results']);
        }
        else {
            this.currentQuestionIndex++;
        }
    };
    AssessmentSurveyPage.prototype.prevQuestion = function () {
        this.currentQuestionIndex--;
    };
    AssessmentSurveyPage = tslib_1.__decorate([
        Component({
            selector: 'app-assessment-survey',
            templateUrl: './assessment-survey.page.html',
            styleUrls: ['./assessment-survey.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            SurveyService])
    ], AssessmentSurveyPage);
    return AssessmentSurveyPage;
}());
export { AssessmentSurveyPage };
//# sourceMappingURL=assessment-survey.page.js.map