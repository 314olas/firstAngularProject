import { TestBed } from '@angular/core/testing';

import { NavrIsShowService } from './navr-is-show.service';

describe('NavrIsShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavrIsShowService = TestBed.get(NavrIsShowService);
    expect(service).toBeTruthy();
  });
});
