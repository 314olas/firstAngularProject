import { TestBed } from '@angular/core/testing';

import { GetLatestWorkService } from './get-latest-work.service';

describe('GetLatestWorkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLatestWorkService = TestBed.get(GetLatestWorkService);
    expect(service).toBeTruthy();
  });
});
