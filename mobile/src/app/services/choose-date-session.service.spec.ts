import { TestBed } from '@angular/core/testing';

import { ChooseDateSessionService } from './choose-date-session.service';

describe('ChooseDateSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseDateSessionService = TestBed.get(ChooseDateSessionService);
    expect(service).toBeTruthy();
  });
});
