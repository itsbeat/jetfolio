import { TestBed } from '@angular/core/testing';

import { CoachingPathsService } from './coaching-paths.service';

describe('CoachingPathsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachingPathsService = TestBed.get(CoachingPathsService);
    expect(service).toBeTruthy();
  });
});
