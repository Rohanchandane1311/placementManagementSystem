import { TestBed } from '@angular/core/testing';

import { ApplyjobService } from './applyjob.service';

describe('ApplyjobService', () => {
  let service: ApplyjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
