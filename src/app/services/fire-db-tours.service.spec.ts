import { TestBed } from '@angular/core/testing';

import { FireDbToursService } from './fire-db-tours.service';

describe('FireDbToursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireDbToursService = TestBed.get(FireDbToursService);
    expect(service).toBeTruthy();
  });
});
