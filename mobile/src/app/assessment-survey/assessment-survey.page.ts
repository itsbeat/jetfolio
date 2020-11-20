import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-assessment-survey',
  templateUrl: './assessment-survey.page.html',
  styleUrls: ['./assessment-survey.page.scss']
})
export class AssessmentSurveyPage implements OnInit {
  questions;
  isLoading;
  error = '';

  currentQuestionIndex;
  nextBtnText;

  router: Router;
  surveyService: SurveyService;

  answers = [];

  areaNames = ['Area 1', 'Area 2', 'Area 3', 'Area 4'];

  constructor(router: Router, surveyService: SurveyService) {
    this.router = router;
    this.surveyService = surveyService;
  }

  ngOnInit() {
    this.isLoading = true;
    this.error = '';

    this.questions = this.surveyService.getQuestions().then(
      (questions: any) => {
        console.log('questions', questions);

        this.questions = questions;
        this.nextBtnText = 'Continua';
        this.currentQuestionIndex = 0;

        questions.forEach(() => {
          this.answers.push({ value: -1 });
        });

        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.error = err;
        this.isLoading = false;
      }
    );
  }

  selectAnswer(answerValue) {
    let answerIndex = this.currentQuestionIndex;
    let question = this.questions[answerIndex];

    let answer = {
      value: answerValue,
      question_id: question.id
    };

    if (this.answers[answerIndex]) {
      this.answers[answerIndex] = answer;
    } else {
      this.answers.push(answer);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex == this.questions.length - 1) {
      this.saveSurvey();
    } else {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion() {
    this.currentQuestionIndex--;
  }

  saveSurvey() {
    this.isLoading = true;

    this.surveyService.save(this.answers).then(
      (survey) => {
        this.router.navigate(['/survey-results']);
      },
      (err) => {}
    );
  }

  goHome() {
    this.router.navigate(['/coaching-paths']);
  }
}
