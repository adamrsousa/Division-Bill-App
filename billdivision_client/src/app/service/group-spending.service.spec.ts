import { TestBed } from '@angular/core/testing';

import { GroupSpendingService } from './group-spending.service';

describe('GroupSpendingService', () => {
  let service: GroupSpendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupSpendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
