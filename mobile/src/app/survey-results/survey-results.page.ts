import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';

const valueToTextColors = ["red", "rose", "secondary", "primary"];

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.page.html',
  styleUrls: ['./survey-results.page.scss'],
})
export class SurveyResultsPage implements OnInit {
  answers;
  questions;
  areaResults;
  isLoading;
  survey;

  constructor(
    private surveyService: SurveyService,
    private router: Router,
  ) {
    this.surveyService = surveyService;
    this.router = router;
  }

  getSpotColorClass(answerValue) {
    return Math.ceil(answerValue / 2);
  }

  getTextColorFromValue(areaIndex) {
    let areaResult = this.getAreaResult(areaIndex);

    return 'tx-' + valueToTextColors[Math.ceil(areaResult) - 1];
  }

  getAreaResult(area) {
    return this.survey['area_' + area].toFixed(2);
  }

  getSpotIsSelected(area, spot) {
    return this.getAreaResult(area) >= 0.5 * spot;
  }

  ngOnInit() {
    this.survey = this.surveyService.getSurvey();

    console.log(this.survey);
  }

  nextStep() {
    this.router.navigateByUrl('/choose-coach');
  }

}
