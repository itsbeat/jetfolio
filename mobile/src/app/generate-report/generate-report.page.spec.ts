import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportPage } from './generate-report.page';

describe('GenerateReportPage', () => {
  let component: GenerateReportPage;
  let fixture: ComponentFixture<GenerateReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
