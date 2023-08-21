import { TestBed } from '@angular/core/testing';

import { RentholderService } from './rentholder.service';

describe('RentholderService', () => {
  let service: RentholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
