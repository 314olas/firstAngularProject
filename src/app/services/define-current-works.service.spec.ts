import { TestBed } from '@angular/core/testing';

import { DefineCurrentWorksService } from './define-current-works.service';

describe('DefineCurrentWorksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefineCurrentWorksService = TestBed.get(DefineCurrentWorksService);
    expect(service).toBeTruthy();
  });
});
