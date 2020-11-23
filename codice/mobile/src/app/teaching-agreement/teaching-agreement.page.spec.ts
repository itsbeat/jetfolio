import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAgreementPage } from './teaching-agreement.page';

describe('TeachingAgreementPage', () => {
  let component: TeachingAgreementPage;
  let fixture: ComponentFixture<TeachingAgreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingAgreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingAgreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
