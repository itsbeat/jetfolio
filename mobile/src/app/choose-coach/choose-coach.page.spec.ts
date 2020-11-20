import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCoachPage } from './choose-coach.page';

describe('ChooseCoachPage', () => {
  let component: ChooseCoachPage;
  let fixture: ComponentFixture<ChooseCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCoachPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
