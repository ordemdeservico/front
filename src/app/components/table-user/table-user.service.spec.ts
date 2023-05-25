import { TestBed } from '@angular/core/testing';

import { TableUserService } from './table-user.service';

describe('TableUserService', () => {
  let service: TableUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
