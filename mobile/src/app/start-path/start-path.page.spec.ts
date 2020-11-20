import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPathPage } from './start-path.page';

describe('StartPathPage', () => {
  let component: StartPathPage;
  let fixture: ComponentFixture<StartPathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPathPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
