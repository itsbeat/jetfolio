import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentSurveyPage } from './assessment-survey.page';

describe('AssessmentSurveyPage', () => {
  let component: AssessmentSurveyPage;
  let fixture: ComponentFixture<AssessmentSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentSurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
