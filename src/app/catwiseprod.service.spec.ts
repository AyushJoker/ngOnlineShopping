import { TestBed } from '@angular/core/testing';

import { CatwiseprodService } from './catwiseprod.service';

describe('CatwiseprodService', () => {
  let service: CatwiseprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatwiseprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
