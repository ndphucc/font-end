import { TestBed } from '@angular/core/testing';

import { BenhAnService } from './benh-an.service';

describe('BenhAnService', () => {
  let service: BenhAnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenhAnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
