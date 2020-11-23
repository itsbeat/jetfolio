import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResultsPage } from './survey-results.page';

describe('SurveyResultsPage', () => {
  let component: SurveyResultsPage;
  let fixture: ComponentFixture<SurveyResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
