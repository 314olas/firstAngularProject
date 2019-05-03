import { TestBed } from '@angular/core/testing';

import { ContactPostRequestService } from './contact-post-request.service';

describe('ContactPostRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactPostRequestService = TestBed.get(ContactPostRequestService);
    expect(service).toBeTruthy();
  });
});
