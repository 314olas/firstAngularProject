import { TestBed } from '@angular/core/testing';

import { HttpGetSliderItemService } from './http-get-slider-item.service';

describe('HttpGetSliderItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGetSliderItemService = TestBed.get(HttpGetSliderItemService);
    expect(service).toBeTruthy();
  });
});
