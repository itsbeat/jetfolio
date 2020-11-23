import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSessionChooserPage } from './date-session-chooser.page';

describe('DateSessionChooserPage', () => {
  let component: DateSessionChooserPage;
  let fixture: ComponentFixture<DateSessionChooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSessionChooserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSessionChooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
