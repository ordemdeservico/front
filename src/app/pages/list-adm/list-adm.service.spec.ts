import { TestBed } from '@angular/core/testing';

import { ListAdmService } from './list-adm.service';

describe('ListAdmService', () => {
  let service: ListAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
