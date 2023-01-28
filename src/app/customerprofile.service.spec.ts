import { TestBed } from '@angular/core/testing';

import { CustomerprofileService } from './customerprofile.service';

describe('CustomerprofileService', () => {
  let service: CustomerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
