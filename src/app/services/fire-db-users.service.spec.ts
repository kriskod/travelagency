import { TestBed } from '@angular/core/testing';

import { FireDbUsersService } from './fire-db-users.service';

describe('FireDbUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireDbUsersService = TestBed.get(FireDbUsersService);
    expect(service).toBeTruthy();
  });
});
